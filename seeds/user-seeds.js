const { User } = require('../models');

const userData = [
    {
        username: 'bodee_angus',
        password: '112200'
    },
    {
        username: 'john_doe',
        password: '123456'
    },
    {
        username: 'jane_doe',
        password: '654321'
    },
    {
        username: 'jamie_fraser',
        password: '1654'
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;