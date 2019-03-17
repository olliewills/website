const express = require('express')
const router = express.Router()

router.get('/', function (req, res) {
  req.session.userEmail = req.body.email
  res.render('index', {
    homeActive: true
  })
})
router.get('/home', function (req, res) {
  res.redirect('/')
})
router.get('/about-me', function (req, res) {
  req.session.userEmail = req.body.email
  res.render('about-me', {
    aboutActive: true
  })
})
router.get('/work', function (req, res) {
  req.session.userEmail = req.body.email
  res.render('work', {
    workActive: true
  })
})
router.get('/cv', function (req, res) {
  req.session.userEmail = req.body.email
  res.render('cv', {
    cvActive: true
  })
})

router.post('/contact-me', function (req, res) {
  req.session.userEmail = req.body.email
  res.redirect('message-sent')
})

module.exports = router
