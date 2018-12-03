function PostFactory() {
    var posts = [
        {
            id: 1,
            title: 'Post one',
            author: 'Raul',
            body: 'This is post one'
        },
        {
            id: 2,
            title: 'Post two',
            author: 'Andrei',
            body: 'This is post two'
        },
    ];

    var post = {};

    post.getPosts = function () {
        return posts.slice();
    };

    post.addPost = function (post) {
        post.id = 3
        posts.push(post);
        return post;
    };

    return post;
}

module.exports = PostFactory;