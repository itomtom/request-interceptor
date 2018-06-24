import template from './request-name.tpl.html';

class RquestNameController {
  constructor ($http, $rootScope) {
    this.$http = $http;
    this.baseApi = 'https://api.github.com';
    $rootScope.addUrlToWait(this.baseApi);
  }
  open() {
    this.$http.get(`${this.baseApi}/users/itomtom`).then((response) => {
      this.name = response.data.name;
    });
  };
}
RquestNameController.$inject = ['$http', '$rootScope'];

export default {
	controller: RquestNameController,
	template,
}