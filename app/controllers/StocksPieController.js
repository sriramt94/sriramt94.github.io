(function () {
    angular
        .module('app')
        .controller('VisitorsController', [
            'countriesService',VisitorsController
        ]);

    function VisitorsController(countriesService) {
        var vm = this;

        
        countriesService.loadAll()
        .then(function(response) {
        
        	 vm.visitorsChartData = [ {key: 'Stocks', y: angular.toJson(response.data.stocks)}, { key: 'Current Value', y:angular.toJson(response.data.curr) },{ key: '% Change', y: angular.toJson(response.data.change)} ];


        	
          });
       
        vm.chartOptions = {
            chart: {
                type: 'pieChart',
                height: 300,
                donut: false,
                x: function (d) { return d.key; },
                y: function (d) { return d.y; },
                valueFormat: (d3.format(".0f")),
                color: ['#2dfc25', '#990A06','#f90415'],
                showLabels: false,
                showLegend: true,
              margin :{top: 50}
             
            }
        };
    }
})();
