``` html
<html>
    <head>
        <title></title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">
        <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js'></script>
        <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-route.min.js'></script>
    </head>
    <body ng-app="app">
        <a href="#test"> [ Sathish - Angular JS ] </a>

        <ul>
            <li><a ng-href='#route1'>Route1</a></li>
            <li><a ng-href='#route2'>Route2</a></li>
            <li><a ng-href='#route3'>Route3</a></li>
        </ul>

        <div id='test' ng-controller="homeController as homeCtrl">

            <br> 
            <br>
            Company Name: <span ng-bind="homeCtrl.companyName"></span>  - <b>From  Constant</b>

            <br> 
            <br>
            User Name: <span ng-bind="homeCtrl.userName"></span>  - <b>From  Value</b>

            <br> 
            <br>
            {{homeCtrl.wService()}} - <b>From Service</b>

            <br> 
            <br>
            {{homeCtrl.wFactory()}} - <b>From Factory</b>

            <br>
            <br>
            {{companyName}} - <b>From Scope Variable</b>

            <br>
            <br>
            {{homeCtrl.environment}} - <b>From Provider</b>


            <br>
            <br>
            {{customerName}} - <b>Factory from different module</b>

        </div>

        <br>
        <br>
        <b> Router Will rendered here </b>
        <div style="height: 200px; border: 1px solid"  ng-view></div>

        <br>
        <br>
        <div ng-include="'file.html'"></div>        
    </body>
</html>

<script>
    // Creating module to inject into different module 
    var ctsModule = angular.module('cts.com.customer', []);
    ctsModule.factory('customerFactory', function () {
        return {
            getCustomerName: function () {
                return 'Socitie Generale';
            }
        }
    });
    //Angular App used in the html
    var ezWeb = angular.module("app", ['cts.com.customer', 'ngRoute']);
    ezWeb.controller('homeController',
            function ($scope,
                    Company,
                    Name,
                    welcomeService,
                    welcomeFactory,
                    envSetup,
                    customerFactory,
                    $http
                    ) {
                //Using scope to bind
                $scope.companyName = Company;
                //$scope can be used for direct bind, this can be used from alias controller
                //From Value
                this.companyName = Company;
                //From Constant
                this.userName = Name;
                //From Service
                this.wService = welcomeService.sayHello;
                //From Factory 
                this.wFactory = welcomeFactory.message;
                //From factory from different module
                $scope.customerName = customerFactory.getCustomerName();
                //From Provider
                this.environment = envSetup.env;
                
                console.log(envSetup.env);
                console.log(customerFactory.getCustomerName());
                //$promise is algorithm or design pattern to solve nested call backs or callback hell.
                //http://caolan.github.io/async/ - async library for to solve this issue
                
                const config = {
                    url: "https://maps.googleapis.com/maps/api/directions/json?origin=Disneyl" +
                      "and&destination=Universal+Studios+Hollywood4&key=Y2343",
                    method: "GET"
                };
                
                //Promise is the variable holds promise object.
                var promise = $http(config).then(
                  function(response) { console.log(response); }, 
                  function(response) { console.error(response); } 
                );          
        
            });
    //Value Can be Overidden 
    ezWeb.value("Company", "CTS");
    ezWeb.value("Company", "CTS United States of America");
    //Constant cannot be Overidden
    ezWeb.constant("Name", "Sathish Kumar P");
    //Service [Can be used to have private variable and methods.] 
    ezWeb.service('welcomeService', ['Company', 'Name', function (Company, Name) {
            this.message = "Welcome Service";
            this.sayHello = function () {
                return 'Hello' + ' / ' + Company + ' / ' + Name;
            }
        }]);
    //Factory
    ezWeb.factory('welcomeFactory', [function () {
            return {
                message: function () {
                    return "Kabali Da...............";
                },
                getData: function () {
                },
                sum: function (a, b) {
                    return a + b;
                }
            };
        }]);
    //Provider
    ezWeb.provider('envSetup', function () {
        // Hold API logic 
        var greeter = {env: 'UAT'};
        return {
            //Configuration logic
            setConfig: function (value) {
                greeter.env = value;
            },
            //Get is provider api which returns your object.
            $get: function () { //$get Angular specific API its a factory through $get API
                return greeter;
            }
        };
    });
    //Provider Configuration
    ezWeb.config(function (envSetupProvider) {
        envSetupProvider.setConfig('PRD');
    });
    //$routeProvider Configuration
    ezWeb.config(function ($routeProvider) {
        $routeProvider
                .when('/route1', {
                    templateUrl: 'route1.html',
                    controller: 'route1',
                    controllerAs: 'r1'
                })
                .when('/route2', {
                    templateUrl: 'route2.html',
                    controller: 'route2',
                    controllerAs: 'r2'
                })
                .when('/route3', {
                    templateUrl: 'route3.html',
                    controller: 'route3',
                    controllerAs: 'r3'
                })
    });
</script>
```
