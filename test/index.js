const chai = require('chai');
const chaiHttp = require('chai-http');

const expect = chai.expect;
chai.use(chaiHttp);

const server = require('../src');

const url = {
    PING_ENDPOINT: '/api/ping',
    VERIFY_ENDPOINT: '/api/password/verify',
    COMPARE_ENDPOINT: '/api/password/compare',
    ENCRYPT_ENDPOINT: '/api/password/encrypt',
    GENERATE_ENDPOINT: '/api/password/generate',
};

const PASSWORD_EXPECTED_LENGTH = 12;

describe('API', function() {
    describe('ping', function() {
        it('should return content-type set to application/json', async function() {
            const res = await chai.request(server)
                .get(url.PING_ENDPOINT);

            expect(res).to.have.header('content-type', 'application/json; charset=utf-8');
            expect(res).to.have.status(200);
        });

        it('should return \'pong\'', async function() {
            const res = await chai.request(server)
                .get(url.PING_ENDPOINT);

            expect(res).to.have.nested.property('body.ping').that.equals('pong');
        });
    });

    describe('password', function() {
        describe('generate', function() {
            let res;

            before(async function() {
               res = await chai.request(server)
                   .get(url.GENERATE_ENDPOINT);
            });

            it('should return a password that is 12 characters long', async function() {
                expect(res).to.have.nested.property('body.value');
                expect(res.body.value.length).to.equal(PASSWORD_EXPECTED_LENGTH);
            });

            it('should have at least one letter in lowercase in the password', async function() {
                const upperCaseCount = res.body.value.replace(/[^a-z]/g, '').length;

                expect(upperCaseCount).to.be.at.least(1);
            });

            it('should have at least one letter in uppercase in the password', async function() {
                const upperCaseCount = res.body.value.replace(/[^A-Z]/g, '').length;

                expect(upperCaseCount).to.be.at.least(1);
            });

            it('should have at least one number in the password', async function() {
                const numberCount = res.body.value.replace(/\D/g, '').length;

                expect(numberCount).to.be.at.least(1);
            });

            it('should have at least one symbol in the password', async function() {
                const symbolCount = res.body.value.replace(/[a-zA-Z0-9]/g, '').length;

                expect(symbolCount).to.be.at.least(1);
            });

            it('should return two different passwords for different calls', async function() {
                const secondRes = await chai.request(server)
                    .get(url.GENERATE_ENDPOINT);

                expect(res).to.have.nested.property('body.value');
                expect(secondRes).to.have.nested.property('body.value');
                expect(res.body.value).to.not.equal(secondRes.body.value);
            });
        });
    });
});
