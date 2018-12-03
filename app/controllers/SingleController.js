function SingleController($scope, $routeParams, ActionsService, $ngRedux)
{
    var vm = this;
    vm.post = {};
    vm.ready = true;
    vm.id = $routeParams.id;

    vm.onInit = function () {
        console.log(vm.id, vm.post);
    };

    vm.mapStateToThis = function(state) {
        return {
            post: state.postReducer.posts.find(function (post) {
                return post.id === Number(vm.id);
            })
        }
    };

    var unsubscribe = $ngRedux.connect(vm.mapStateToThis, ActionsService)(vm);
    $scope.$on('$destroy', unsubscribe);

}

module.exports = SingleController;