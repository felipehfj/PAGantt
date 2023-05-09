(function () {
  'use strict';

  const depends = [
    'ngAnimate',
    'ngSanitize',
    'ngMessages',
    'toastr'
  ];

  angular
    .module('PaGantt', depends)
    // .constant('Gantt', window.Gantt)
    // .run(function ($rootScope) {
    //   $rootScope.Gantt = window.Gantt;
    // });
  ;
})()