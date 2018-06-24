HttpProvider.$inject = ['$httpProvider'];

export default function HttpProvider($httpProvider) {
  $httpProvider.interceptors.push('RequestInterceptor');
}
