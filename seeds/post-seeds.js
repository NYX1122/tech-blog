const { Post } = require('../models');

const postData = [
    {
        title: 'Became a web developer :)',
        contents: "I'm now officially a web developer! Hopefully I can find a job now lmao",
        user_id: 1
    },
    {
        title: 'test post title for john doe',
        contents: 'test post contents for john doe',
        user_id: 2
    },
    {
        title: 'test post title for jane doe',
        contents: 'test post contents for jane doe',
        user_id: 3
    },
    {
        title: 'test post title for jamie fraser',
        contents: 'test post contents for jamie fraser',
        user_id: 4
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;