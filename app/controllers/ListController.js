function ListController($scope, ActionsService, $ngRedux) {
    var vm = this;
    vm.posts = [];

    vm.onInit = function () {
        if(!vm.posts.length) {
            $ngRedux.dispatch(ActionsService.getAllPosts());
        }
    };


    vm.refreshPosts = function()
    {
        vm.posts = [];
        setTimeout(function () {
            $ngRedux.dispatch(ActionsService.getAllPosts());
        }, 1000);
    };

    vm.mapStateToThis = function(state) {
        return {
            posts: state.postReducer.posts
        }
    };

    var unsubscribe = $ngRedux.connect(vm.mapStateToThis, ActionsService)(vm);
    $scope.$on('$destroy', unsubscribe);
}

module.exports = ListController;