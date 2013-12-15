'use strict';

var services = angular.module('guthub.services',
    ['ngResource']);


var ctx2 = '/buy4me-angular-server';

services.factory('NeedItem', ['$resource',
    function($resource) {
  return $resource(ctx2+'/needItems/:id', {id: '@id'},
      {},
      { 'get':    {method:'GET'},
          'save':   {method:'POST'},
          'query':  {method:'GET', isArray:true},
          'remove': {method:'DELETE'},
          'delete': {method:'DELETE'},
          'update': {method:'PUT' }
      }
      );
}]);

services.factory('MultiItemLoader', ['NeedItem', '$q',
    function(NeedItem, $q) {
  return function() {
    var delay = $q.defer();
      NeedItem.query(function(needItems) {
      delay.resolve(needItems);
    }, function() {
      delay.reject('Unable to fetch need items');
    });
    return delay.promise;
  };
}]);

services.factory('NeedItemLoader', ['NeedItem', '$route', '$q',
    function(NeedItem, $route, $q) {
  return function() {
    var delay = $q.defer();
    NeedItem.get({id: $route.current.params.needItemId}, function(needItem) {
      delay.resolve(needItem);
    }, function() {
      delay.reject('Unable to fetch need Item '  + $route.current.params.needItemId);
    });
    return delay.promise;
  };
}]);
