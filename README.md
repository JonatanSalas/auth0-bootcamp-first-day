# auth0-bootcamp-first-day 

[![Build Status](https://travis-ci.org/JonatanSalas/auth0-bootcamp-first-day.svg?branch=master)](https://travis-ci.org/JonatanSalas/auth0-bootcamp-first-day)

## Ping
Endpoint to test if the host is reachable

* **URL**

  /api/ping

* **Method:**
  
  `GET`
  
*  **URL Params**
 
   *No params needed*

* **Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ ping : 'pong' }`
 
* **Sample Call:**

        /api/ping

## Password Encryption
Returns the hash value for the input password

* **URL**

  /api/password/encrypt

* **Method:**
  
  `GET`
  
*  **URL Params**
 
   `value=[String]`  Password to encrypt

* **Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ hashedValue : [String] }`
 
* **Sample Call:**

        /api/password/encrypt?value=mypassword

## Password and hash value comparison
Returns **true** if the hash value matches the password after being encrypted, **false** otherwise

* **URL**

  /api/password/compare

* **Method:**
  
  `GET`
  
*  **URL Params**
 
   `hash=[String]`  Hash value
   `value=[String]`  Password

* **Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ result : [boolean] }`
 
* **Sample Call:**

        /api/password/compare?hash=hashedpassword&value=mypassword
        
## Password generation
Generates a strong random password

* **URL**

  /api/password/generate

* **Method:**
  
  `GET`
  
*  **URL Params**
 
   *No params needed*

* **Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ value : [String] }`
 
* **Sample Call:**

        /api/password/generate

## Password strength verification
Returns the strength of a given password based on common rules

* **URL**

  /api/password/verify

* **Method:**
  
  `GET`
  
*  **URL Params**
 
   `value=[String]`  Password to verify its strength

* **Response:**
  
  * **Code:** 200 <br />
    **Content:** `{ result : [String], error: [Array.<String>] }`
 
* **Sample Call:**

        /api/password/verify?value=mypassword