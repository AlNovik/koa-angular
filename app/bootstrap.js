/**
 * Created by Alexander Novik.
 */
export default ['$location', '$rootScope', ($location, $rootScope) => {
  $rootScope.isLogin = false;
  $location.path('/login');
}];