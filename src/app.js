import angular from 'angular';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import RequestInterceptor from './services/request-interceptor.service';
import RequestNameComponent from './components/request-name.component';
import HttpProvider from './config/http-provider.config';
import HelperConfig from './config/helper.config';
import LoadingTemplate from './components/loading-blocker.html';

angular.module('app', [])
.config(HttpProvider)
.service('RequestInterceptor', RequestInterceptor)
.component('requestName', RequestNameComponent)
.component('blocker', {template: LoadingTemplate})
.run(HelperConfig);



