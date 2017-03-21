const helper = require('sendgrid').mail;
const Promise = require('bluebird');

module.exports = {

  sendEmails: (recipients, emailDetails, completion) => {

    let from_email = new helper.Email(process.env.FROM_EMAIL);
    let subject = emailDetails.subject;
    let content = new helper.Content('text/plain', emailDetails.content);
    const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);

    recipients.forEach((recipient, i)=> {

      //take the recipient, trimming the space
      let to_email = new helper.Email(recipient.trim());
      let mail = new helper.Mail(from_email, subject, to_email, content);

      let request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: mail.toJSON(),
      });

      sg.API(request, function(error, response) {

        if (error) {

          //reject(error);
          //return;
        }

        //resolve(response);
      });

    });

    //callback completion
    completion();
  },

  sendEmail: (emailDetails) => {

    return new Promise((resolve, reject)=> {

      //take the details from emailDetails
      let from_email = new helper.Email(process.env.FROM_EMAIL);
      let to_email = new helper.Email(emailDetails.recipient);
      let subject = emailDetails.subject;
      let content = new helper.Content('text/plain', emailDetails.content);
      let mail = new helper.Mail(from_email, subject, to_email, content);

      const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
      let request = sg.emptyRequest({
          method: 'POST',
          path: '/v3/mail/send',
          body: mail.toJSON(),
      });

      sg.API(request, function(error, response) {

        if (error) {

          reject(error);
          return;
        }

        resolve(response);
      });



    });

  }
}
