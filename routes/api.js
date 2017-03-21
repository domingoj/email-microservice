const express = require('express');
const router = express.Router();
const helper = require('sendgrid').mail;


router.post('/:action', (req, res, next) => {

  let action = req.params.action;

  if (action == 'send'){ // send an email

    //take the details from req.body
    let from_email = new helper.Email(process.env.FROM_EMAIL);
    let to_email = new helper.Email(req.body.recipient);
    let subject = req.body.subject;
    let content = new helper.Content('text/plain', req.body.content);
    let mail = new helper.Mail(from_email, subject, to_email, content);

    const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    let request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    sg.API(request, function(error, response) {

      if (error) {
        res.json({
          confirmation: 'fail',
          message: error
        });

        return;
      }

      res.json({

        confirmation: 'success',
        response: response

      });
    });

    return;
  }

    //not a valid api end point
    res.json({
      confirmation: 'fail',
      message: 'Invalid action'
    });


});

router.get('/:action', (req, res, next) => {

  let action = req.params.action;

  if (action == 'send'){ // send an email

    //https://devcenter.heroku.com/articles/sendgrid#node-js
    let from_email = new helper.Email(process.env.FROM_EMAIL);
    let to_email = new helper.Email('jerdomingo8@gmail.com');
    let subject = 'TEST ONLY! - PLS DELETE';
    let content = new helper.Content('text/plain', 'Hello from Jermie!');
    let mail = new helper.Mail(from_email, subject, to_email, content);

    const sg = require('sendgrid')(process.env.SENDGRID_API_KEY);
    let request = sg.emptyRequest({
        method: 'POST',
        path: '/v3/mail/send',
        body: mail.toJSON(),
    });

    sg.API(request, function(error, response) {

      if (error) {
        res.json({
          confirmation: 'fail',
          message: error
        });

        return;
      }

      res.json({

        confirmation: 'success',
        response: response

      });
    });

    return;
  }

    //not a valid api end point
    res.json({
      confirmation: 'fail',
      message: 'Invalid action'
    });


});

module.exports = router;
