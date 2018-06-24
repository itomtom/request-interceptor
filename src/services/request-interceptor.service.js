export default class RequestInterceptor {
  constructor ($q, $rootScope) {
    this.counter = 0;
    this.$q = $q;
    this.$rootScope = $rootScope;

    // Revealing Module Pattern
    return {
      request: this.request.bind(this),
      requestError: this.requestError.bind(this),
      response: this.response.bind(this),
      responseError: this.responseError.bind(this)
    }
  }

  request(config) {
    this.loadingOn(config.url);
    return config;
  }

  requestError(rejection) {
    this.loadingOff(rejection.config.url);
    return this.$q.reject(rejection);
  }

  response(response) {
    const deferred = this.$q.defer();
    setTimeout(() => { 
      this.loadingOff(response.config.url);
      deferred.resolve(response);
    }, 1000);
    return deferred.promise;

    /* If not testing then simply use:
    loadingOff(response.config.url);
    return response
    */
  }

  responseError(rejection) {
    this.loadingOff(rejection.config.url);
    return this.$q.reject(rejection);
  }

  loadingOn(url) {
    if (this.$rootScope.isUrlToWait(url)) {
      this.counter++;
      $('#loadingModal').modal('show');
    }
  }

  loadingOff(url) {
    if (this.$rootScope.isUrlToWait(url) && (--this.counter) === 0) {
      $('#loadingModal').modal('hide');
    }
  }
}
RequestInterceptor.$inject = ['$q', '$rootScope'];
