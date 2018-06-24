HelperConfig.$inject = ['$rootScope'];

export default function HelperConfig($rootScope) {
  const urlsToWait = [];
  $rootScope.addUrlToWait = (url) => {
    urlsToWait.push(url.toLowerCase());
  };

  $rootScope.isUrlToWait = (url) => {
    return urlsToWait.some((urlToWait) => {
      return url.toLowerCase().indexOf(urlToWait) >= 0;
    });
  };
}
