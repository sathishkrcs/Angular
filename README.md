Angular Boot Process
--------------------

- Load Html into browser.
- If you have any css, scripts are downloaded and initialized by browser.
- Your Script has to be loaded once DOM is ready.
- Js has event callback called **window.onload** so you have to initialize your application code into the callback.

``` javascript
function init() {
}
var init = function() {
}

window.onload =init;
```

- Angular uses **jquery(JQlite)** to parse the **Angular** template.
- Below in Pseudo code of angularjs compilation.

``` javascript 
window.onload = function() {
  var $rootElement = angular.element(window.document);
  var modules = [
    'ng',
    'myApp',
    function($provide) {
      $provide.value('$rootElement', $rootElement);
    }
  ];
}

  var $injector = angular.injector(modules);
  var $compile = $injector.get('compile'); //Static changes update
  var $compileToLink = $compile($compile); // Dynamic chages update(Addig listeners)
  var $rootScope = $injector.get('$root$scope');
  $compileToLink($rootScope); 
  $rootScope.apply();
}
```


#Type Script
https://learnxinyminutes.com/docs/typescript/

#Javascript
https://learnxinyminutes.com/docs/javascript/

#Css
https://learnxinyminutes.com/docs/css/

#Git
https://learnxinyminutes.com/docs/git/

#ES5 to ES6
http://lebab.io/try-it


#HTML - NA
Slides - http://www.devopsschool.com/tutorial/devops/slides/pdf.zip
 
#Git
HTML - http://www.devopsschool.com/tutorial/git/
Slides - http://www.devopsschool.com/tutorial/git/slides/pdf.zip

#Docker 
HTML - http://www.devopsschool.com/tutorial/docker/
Slides - http://www.devopsschool.com/tutorial/docker/slides.zip

#Jenkins
HTML - http://www.devopsschool.com/tutorial/jenkins/
Slides - http://www.devopsschool.com/tutorial/jenkins/slides.zip

#Nexus
HTML - http://www.devopsschool.com/tutorial/nexus/
Slides - http://www.devopsschool.com/tutorial/nexus/slides/ppt.zip
