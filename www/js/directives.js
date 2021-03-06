angular.module('starter.directives', [])
    .directive('planetRevolve', function() {

        function link(scope, el, attr) {
            el = el[0]
            var width = "200",
                height = "200"
            var svg = d3.select(el).append('svg')
                .attr({
                    width: width,
                    height: height
                });
            var orbit = svg.append('circle')
                .attr({
                    cx: 100,
                    cy: 100,
                    r: 75
                })
                .style({
                    fill: 'none',
                    stroke: 'blue',
                    'stroke-width': 2
                });

            var sun = svg.append('circle')
                .attr({
                    cx: 100,
                    cy: 100,
                    r: 30
                })
                .style({
                    fill: 'blue',
                    stroke: 'blue',
                    'stroke-width': 2
                });

            var planet = svg.append('circle')
                .style({
                    fill: 'blue'
                })

            scope.$watch('planetLocation', function(planetLocation) {
                planet.attr({
                    cx: planetLocation.cx,
                    cy: planetLocation.cy,
                    r: planetLocation.r
                });
            }, true);
        }

        return {
            link: link,
            restrict: 'E',
            scope: {
                planetLocation: '=planetLocation'
            }
            // ,
            // templateUrl: 'templates/planet-revolve.html'
        }
    })

.directive('scalableBox', function() {
    function link(scope, el, attr) {
        el = el[0];

        var width = scope.svgSize + '%',
            height = 300;
        var svg = d3.select(el).append('svg')
            .attr({
                width: width,
                height: height
            })
            .style({
                border: 'solid'
            });

        var rect = svg.append('rect')
            .attr({
                width: scope.rectSize + '%',
                height: height
            })
            .style({
                fill: 'black'
            });

        scope.$watch('svgSize', function(newVal) {
            if (!newVal) return;
            svg.attr({
                width: newVal + '%'
            })
        }, true);

        scope.$watch('rectSize', function(newVal) {
            if (!newVal) return;
            rect.attr({
                width: newVal + '%'
            })
        }, true);

    }
    return {
        link: link,
        restrict: 'E'
    }

})


.directive('myHistogram', function() {
    function link(scope, el, attr) {
        el = el[0];

        var dataset = scope.dataset;

        d3.select(el).selectAll("div")
            .data(dataset)
            .enter()
            .append("div")
            .attr("class", "histStyle")
            .style("height", function(d) {
                var barHeight = d * 5;
                return barHeight + "px";
            });
    }
    return {
        replace: true,
        link: link,
        restrict: 'E',
        scope: {
            dataset: '=dataset'
        }
    }

})

;
