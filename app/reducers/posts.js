var defaultState = {
  posts: []
};

function reducer(state = defaultState, action) {
    switch(action.type) {
        case 'GET_ALL_POSTS':
            return {posts: action.payload.posts};
        case 'ADD_POST':
            var posts = state.posts.slice();
            posts.push(action.payload.post);
            return {posts: posts};
        default:
            return state;
    }
}

module.exports = reducer;