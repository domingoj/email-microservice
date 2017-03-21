const express = require('express');
const router = express.Router();
const utils = require('../utils');


router.post('/:action', (req, res, next) => {

  let action = req.params.action;

  if (action == 'send'){ // send an email

    let recipients = req.body.recipients; //comma separated list of email recipients
    let list = recipients.split(',');

    //3rd parameter is a completion callback function
    utils.Email.sendEmails(list, req.body, () => {

      res.json({
        confirmation: 'success',
        response: 'Emails sent!'
      });
    });


    // .sendEmail(req.body)
    // .then((response) => {
    //
    //   res.json({
    //
    //     confirmation: 'success',
    //     response: response
    //
    //   });
    //
    // })
    // .catch((error) => {
    //
    //   res.json({
    //     confirmation: 'fail',
    //     message: error
    //   });
    //
    // });

    return;
  }

    //not a valid api end point
    res.json({
      confirmation: 'fail',
      message: 'Invalid action'
    });


});

module.exports = router;
