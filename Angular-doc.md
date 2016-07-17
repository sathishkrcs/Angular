```html

<html>
    <head>
        <title></title>

        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

        <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular.min.js'></script>
        <script src='https://ajax.googleapis.com/ajax/libs/angularjs/1.5.7/angular-route.min.js'></script>

        <!-- Template for Directive -->
        <script type="text/ng-template" id="myTemplate.html">
            <div>
            <h1>Hello World</h1>
            <h2>Hello Da...!</h2>
            </div>
        </script>

    </head>
    <body ng-app="app">
        <div style="margin: auto"><a  href="#test"> [ Sathish - Angular JS ] </a></div>

        <div style="border: 1px solid #777777; background-color: #CCCCCC;
             padding: 10px; border-radius: 20px; width: 50%;">
            <ul>
                <li><a ng-href='#route1'>Route1</a></li>
                <li><a ng-href='#route2'>Route2</a></li>
                <li><a ng-href='#route3'>Route3</a></li>
            </ul>
        </div>
        <br> 
        <br>
        <div id='test' ng-controller="homeController as homeCtrl">
            <div style="border: 1px solid #777777; background-color: #CCCCCC;
                 padding: 10px; border-radius: 20px; width: 50%;">
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

                <br>
                <br>
                <b> Router Will rendered here </b>
                <div style="height: 200px; border: 1px solid"  ng-view></div>

            </div>

            <br>
            <br>
            <div style="border: 1px solid #777777; background-color: #CCCCCC;
                 padding: 10px; border-radius: 20px; width: 50%;">

                <b> <u> Custom Directives </u> </b>

                <div hello></div>

                <div hello-world-from-script-template></div>

                <div hello-world-from-external-template></div>

                <div hello-world-dynamic>
                    <div hello-world-transclude></div>
                </div>

            </div>
        </div>
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
                    url: "https://maps.googleapis.com/maps/api/directions/json?origin=Disneyland&destination=Universal+Studios+Hollywood4&key=Y2343",
                    method: "GET"
                };
                
                //Promise is the variable holds promise object.
                var promise = $http(config).then(
                  function(response) { console.log(response); }, 
                  function(response) { console.error(response); } 
                );
        
               //Variable for Directive
               $scope.name = "Dude...."; 
        
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
    
    //Basic Directive 
    ezWeb.directive('hello', function() {
        //Retrun directive definition
        return {
            //Basic directive info
            //Compile process info
            template: '<h4>Welcome to custom directive</h4>'
        };
    });
    
    //1 Directive [Script Template]
    ezWeb.directive('helloWorldFromScriptTemplate', function() {
        return {
            //templateUrl: 'myTemplate.html'
        };
    });
    
    //2 Directive  [External Html file Template]
    ezWeb.directive('helloWorldFromExternalTemplate', function() {
        return {
            templateUrl: 'route1.html'
        };
    });
    
    //3 Directive  [Dynamic Variable Template]
    ezWeb.directive('helloWorldDynamic', function() {
        return {
            template: '<br><i>Nice Day ... Dynamic Variable! {{name}} <ng-transclude></ng-transclude></i>',
            transclude: true,
             compile: function(elem, attr) {
                
                console.log("compile[helloWorldDynamic] called.....!");
                console.log(angular.element(elem));
                
                return {
                    pre: function(scope, elem, attr) {
                      console.log("Pre Link[helloWorldDynamic] : called.....!");
                      console.log(angular.element(elem));  
                    },
                    post: function(scope, elem, attr) {
                      console.log("Post Link[helloWorldDynamic] :  called.....! ");
                      console.log(angular.element(elem));
                    }
                };
            }
        };
    });
    
    //4 Directive [Transclude, pre post, compile]
    ezWeb.directive('helloWorldTransclude', function() {
        return {
            restrict: 'AECM',
            transclude: true,
            //require: "^helloWorldDynamic",
            //replace: true, [Replace can be used only when no tranclude]
            template: '<br><i>Nice Day ... Transcule, Compile, Pre, Post! <ng-transclude></ng-transclude></i>',
            compile: function(elem, attr) {
                
                console.log("compile[helloWorldTransclude] called.....!");
                console.log(angular.element(elem));
                elem.css('border', '1px solid green');
                
                // Pre or post can access scope elem, compile cannot acess scope element
                return {
                    pre: function(scope, elem, attr) {
                      console.log("Pre Link[helloWorldTransclude] : called.....!");
                      console.log(angular.element(elem));  
                    },
                    post: function(scope, elem, attr) {
                      console.log("Post Link[helloWorldTransclude] :  called.....!");
                      console.log(angular.element(elem));
                    }
                };
            },
            controller: function($scope) {
                console.log("Child[helloWorldTransclude] from other parent directive[helloWorldDynamic]");
            }
        };
    });

</script>


```
