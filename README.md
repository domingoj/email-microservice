# email microservice
reusable email sender service built with node.js

# Installation

1. You need to configure a Heroku app for the project and include <code>sendgrid</code> as addon.
2. Create a <code>.env</code> file on the root directory with the following:

<code>
<b>SENDGRID_API_KEY</b> = <--your api key goes here-->
</code><br/>
<code>
<b>FROM_EMAIL</b> = <-- your own heroku email goes here -->
</code>
