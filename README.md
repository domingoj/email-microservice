# Node Email Microservice
A reusable email sender service built with node.js inspired by DKWON of [www.velocity360.io](http://www.velocity360.io). The idea is to use this backend api service on any project. <br/>

A simple UI is added to this project for testing.

# Features
1. Can send emails (obviously) from a configured FROM_EMAIL_ADDRESS
2. Can send emails to multiple users via comma separated list of emails (strings)
3. Can send HTML formatted emails

# Installation

1. You need to configure a Heroku app for the project and include <code>sendgrid</code> as addon.
2. **For testing locally:** Create a <code>.env</code> file on the root directory and add the variables below.
3. **For live:** On Heroku, add the same variables to your Config Vars.

<b>SENDGRID_API_KEY</b> = <--your api key goes here--> <br/>
<b>FROM_EMAIL</b> = <-- your own heroku email goes here -->

