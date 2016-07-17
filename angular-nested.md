``` html

<!DOCTYPE html>
<html ng-app="app">
    <head>
        <title>Directive</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style type="text/css">
            div {
                padding: 15px;
                margin: 5px;
            }
        </style>
        <script src="../lib/angular.min.js"></script>
        <script>
            var app = angular.module('app', []);

            app.directive('parentDir', function() {

                return {
                    transclude:true,
                    compile: function(ele, attr) {
                        console.log('parentDir-compile phase');
                        ele.css('border', '1px solid green');

                        return {
                            pre: function() {
                                console.log('parentDir:preLink');

                            },
                            post: function() {
                                console.log('parentDir:postLink');
                            }
                        };
                    },
                    controller: function($scope) {
                        console.log('parentDir:controller');

                    },
                    template: '<div> Parent <div ng-transclude></div></div>'
                };

            });
            app.directive('childDir', function() {

                return {
                    transclude:true,
                    compile: function(ele, attr) {
                        console.log('childDir-compile phase');
                        ele.css('border', '1px solid green');

                        return {
                            pre: function() {
                                console.log('childDir:preLink');

                            },
                            post: function() {
                                console.log('childDir:postLink');
                            }
                        };
                    },
                    controller: function($scope) {
                        console.log('childDir:controller');

                    },
                    template: '<h1>This is  directive <ng-transclude></ng-transclude></h1>'
                };

            });
            app.directive('grandChildDir', function() {

                return {
                    transclude:true,
                    compile: function(ele, attr) {
                        console.log('grandChildDir-compile phase');
                        ele.css('border', '1px solid green');

                        return {
                            pre: function() {
                                console.log('grandChildDir:preLink');

                            },
                            post: function() {
                                console.log('grandChildDir:postLink');
                            }
                        };
                    },
                    controller: function($scope) {
                        console.log('grandChildDir:controller');

                    },
                    template: '<h1>This is  directive<ng-transclude></ng-transclude></h1>'
                };

            });
        </script>
    </head>
    <body>
        <div parent-Dir>
            <div child-Dir>
                <div grand-Child-Dir>
                </div>
            </div>
        </div>

    </body>
</html>
```
