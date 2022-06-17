const router = require("express").Router();
const { User, Messages, Convo } = require('../models')

router.get('/', (req, res) => {
    res.render('homepage')
})

router.get('/register', (req, res) => {
    res.render('register')
})

router.get('/chat', (req, res) => {
    res.render('chat')
})

router.get('/dashboard', (req, res) => {
    res.render('test', {layout: "dashboard"})
})

module.exports = router