(function () {
  'use strict';

  angular
    .module('PaGantt')
    .controller('GanttCtrl', GanttCtrl);

  GanttCtrl.$inject = ['$scope', 'toastr']

  /** @ngInject */
  function GanttCtrl($scope, toastr) {
    var vm = this;

    vm.components = {
      init: function () {
        vm.components.gantt = new Gantt("#gantt", vm.components.pa.tasks, {
          language: 'ptBr',
          view_mode: 'Week',
          on_click: function (task) {
            console.log(task);
          },
          on_date_change: function (task, start, end) {
            console.log(task, start, end);
          },
          on_progress_change: function (task, progress) {
            console.log(task, progress);
          },
          on_view_change: function (mode) {
            console.log(mode);
          },
        });
      },
      text: "Eu sou um texto",
      pa: {
        tasks: [
          {
            id: '1',
            name: 'Task 1',
            start: '2023-05-01',
            end: '2023-05-05',
            progress: null,
            //dependencies: '2'
          },
          {
            id: '2',
            name: 'Task 2',
            start: '2023-05-06',
            end: '2023-05-08',
            progress: null,
            //dependencies: '3'
          },
          {
            id: '3',
            name: 'Task 3',
            start: '2023-05-08',
            end: '2023-05-09',
            progress: null,
            //dependencies: '1'
          },
        ],
      },
      changeMode: function (mode) {
        console.log(mode);
        //vm.components.gantt.change_view_mode(mode);
      },
    };

    vm.components.init();
  }

}());