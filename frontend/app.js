var app = angular.module('myApp', ['ngRoute']);
console.log(app.config['$routeProvider']);
app.config(['$routeProvider',
    function ($routeProvider) {
        $routeProvider
                // Home
                .when("/", {templateUrl: "frontend/modules/main/view/main.view.html", controller: "mainCtrl"})
                
                // Contact
                .when("/contact", {templateUrl: "frontend/modules/contact/view/contact.view.html", controller: "contactCtrl"})
            
                // else 404
                .otherwise("/", {templateUrl: "frontend/modules/main/view/main.view.html", controller: "mainCtrl"});
    }]);

   