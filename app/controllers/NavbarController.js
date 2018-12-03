function NavbarController($scope,$ngRedux)
{
    var vm = this;
    vm.counter = null;

    vm.mapStateToThis = function (state) {
        return {
            counter: state.postReducer.posts.length
        }
    };

    var unsubscribe = $ngRedux.connect(vm.mapStateToThis)(vm);
    $scope.$on('$destroy', unsubscribe)
}

module.exports = NavbarController;