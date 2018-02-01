

var app = angular.module('gemStore', []);
//Attach the gemStore module to our HTML page with a Directive.
//In the index.html file, add the ng-app directive to the html tag.
//Task 1/5 for controller
(function(){
  var gem = { name: 'Azurite', price: 2.95 };
  var app = angular.module('gemStore', []);
  app.controller('StoreController', function() {
    this.product = gem;
  });
})();

                                                                        