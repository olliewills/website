const express = require('express')
const router = express.Router()

router.post('/contact-me', function (req, res) {
  req.session.userEmail = req.body.email
  res.redirect('message-sent')
})

module.exports = router
