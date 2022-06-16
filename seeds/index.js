const { User } = require('../models');

const userData = [
    {
        "username": "T-swift",
        "password": "1234",
        "email": "ted@ted.com"
    },
    {
        "username": "T-swift",
        "password": "1234",
        "email": "ted@ted.com"
    },
    {
        "username": "T-swift",
        "password": "1234",
        "email": "ted@ted.com"
    },
    {
        "username": "T-swift",
        "password": "1234",
        "email": "ted@ted.com"
    },
    {
        "username": "T-swift",
        "password": "1234",
        "email": "ted@ted.com"
    }
];

const seedUser = () => User.bulkCreate(userData);

seedUser()
