const express = require('express');
const router = express.Router();

router.get('/:action', function(req, res, next){

  let action = req.params.action;

  if (action == 'send'){ // send an email

    res.json({

      confirmation: 'success',
      action: action

    });

    return;

  }

  res.json({
    confirmation: 'fail',
    message: 'Invalid action'
  });



});

module.exports = router;
