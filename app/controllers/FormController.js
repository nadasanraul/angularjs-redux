function FormController ($scope, ActionsService, $ngRedux, $routeParams) {
    var vm = this;
    vm.post = {};
    var id = $routeParams.id;

    vm.onSubmit = function () {
        // console.log($scope.post);
        $ngRedux.dispatch(ActionsService.addPost(vm.post));
    };

    vm.mapStateToThis = function (state) {
        var post = state.postReducer.posts.find(function (post) {
            return post.id === Number(id);
        });
        return {
            post: post ? post : {}
        }
    }

    var unsubscribe = $ngRedux.connect(vm.mapStateToThis)(vm);
    $scope.$on('$destroy', unsubscribe);
};

module.exports = FormController;