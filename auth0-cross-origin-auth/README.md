# Auth0 Custom UI

[Auth0](https://auth0.com) is an authentication broker that supports social identity providers as well as enterprise identity providers such as Active Directory, LDAP, Google Apps, Salesforce and databases.

Sample project to demostrate [auth0.js](https://github.com/auth0/auth0.js) 

* Login with social connections e.g facebook, twitter, google
* Login with database connection
* Reset Password
* Signup with first name, last name, email, password
* Signup and login with email passwordless
* Signup and login with mobile passwordless

## Running locally

To run it locally:

* Populate the config object in js/local.js

```bash
    var config = {
      auth0Domain: 'YOUR_AUTH0_DOMAIN',
      clientID: 'YOUR_CLIENT_ID',
      callbackURL: 'YOUR_CALLBACK_URL',
      responseType: 'token id_token',
      dict: {
        signin: {
          title: 'Welcome to Auth0'
        }
      }
    };
```

```bash
$ npm install serve-https -g
$ serve-https .
```


## Cross Origin Auth0 Setup

Please follow this dicumentation to configure your client to allow cross origin logins. [Cross Origin](https://auth0.com/docs/cross-origin-authentication) 