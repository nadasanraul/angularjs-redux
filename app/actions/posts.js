function ActionsService(PostFactory)
{
    var actions = {};

    setAllPosts = function(posts) {
        return {
            type: 'GET_ALL_POSTS',
            payload: {
                posts: posts
            }
        }
    };

    addPostToState = function(post) {
        return {
            type: 'ADD_POST',
            payload: {
                post: post
            }
        }
    };

    actions.getAllPosts = function() {

        var posts = PostFactory.getPosts();

        return function (dispatch, getState) {
            dispatch(setAllPosts(posts));
        }
    };

    actions.addPost = function (post) {

        var newPost = PostFactory.addPost(post);

        return function (dispatch, getState) {
            // console.log(getState());
            dispatch(addPostToState(newPost));
        }
    };

    return actions;
}

module.exports = ActionsService;