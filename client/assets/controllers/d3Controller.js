(function(){
	'use strict'
	angular
		.module('app')
		.controller('d3Controller', d3Ctrl)
		// .directive("phyTree", ['d3', phyTreeDirective])
		// .directive("barGraph", ['d3', barChartDirective])
		.directive("charts", ['d3', chartsDirective])

	function d3Ctrl($location, $scope, analysisService){

		$scope.tree = {name:"HIV-1 isolate Cameroon1(ViroSeq) HIV DR 46",children: [{name: "A",children: [{ name: "aaaaaaa" },{ name: "bbbbbbbbb" },{ name: "cccc" },]},{name: "B",children: [{name: "aaaaaaa",children: [{ name: "11111" },{ name: "22" },]},{name: "bbbbbbbbbbbbbbb",children: [{ name: "1111" },{ name: "22" },{ name: "3333333333333" },{ name: "444444444" }]}]},]}
		console.log(analysisService.getBarGraphInfo(1));
		console.log(analysisService.getBarGraphInfo(2));
		$scope.barfreq = analysisService.getBarGraphInfo(1);
		$scope.bar2 = analysisService.getBarGraphInfo(2);

		var matrix = [];
		for (var i = 0; i < 4; i++) {

			var row = [];
			for (var j = i+1; j < 5; j++) {
				console.log(i + " " + j)
				row.push(analysisService.getRelation(i, j));
			}
			matrix.push(row);
		}
		console.log(matrix);

	}


	function chartsDirective(d3){
		return{
    		restrict: "EA",
    		link: function($scope, elem, attrs){
				function phyTree(){
					var tree = {}
	    			d3.select(".phyTree").remove()

	    			var canvas = d3.select("#tree").append("svg")
	    				.attr("width", 500)
	    				.attr("height", 400)
	    				.attr("class", "phyTree")

	    			var tree = d3.layout.tree()
	    				.size([400, 400])

					var nodes = tree.nodes($scope.tree)
					// console.log(nodes)
					var links = tree.links(nodes);
					// console.log(links)

					var node = canvas.selectAll(".node")
						.data(nodes)
						.enter()
						.append("g")
							.attr("class", "node")
							.attr("transform", function(d) { return "translate(" + (d.y+10) + "," + (d.x) + ")" })


					node.append("circle")
						.attr("r", 5)
						.attr("fill", "#d5aa6d")
						.on("click", click)

					node.append("text")
						.text( function(d) { return d.name })
						.attr("dx", -5)
						.attr("dy", -8)

					var diagonal = d3.svg.diagonal()
						.projection( function(d) { return [d.y+5, d.x] })

					canvas.selectAll(".link")
						.data(links)
						.enter()
						.append("path")
						.attr("class", "link")
						.attr("fill", "none")
						.attr("stroke", "#c8c6c6")
						.attr("d", diagonal)

					function click(d){
						// console.log($scope.bar2)
						console.log("clicked")
						bar.update($scope.bar2)

					}

					// var bars =
					return tree
	    		}

				function barChart(){
					var bar = {}
	    			d3.select(".barChart").remove()

					var margin = {top: 20, right: 20, bottom: 30, left: 40},
					    width = 960 - margin.left - margin.right,
					    height = 500 - margin.top - margin.bottom;

					var x = d3.scale.ordinal()
					    .rangeRoundBands([0, width], .1);

					var y = d3.scale.linear()
					    .range([height, 0]);

					var xAxis = d3.svg.axis()
					    .scale(x)
					    .orient("bottom");

					var yAxis = d3.svg.axis()
					    .scale(y)
					    .orient("left")
					    .ticks(10, "%");

					var svg = d3.select("#bar").append("svg")
					    .attr("width", width + margin.left + margin.right)
					    .attr("height", height + margin.top + margin.bottom)
					  .append("g")
					    .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
	    				.attr("class", "barChart")

	    			var data = $scope.barfreq

					  x.domain(data.map(function(d) { return d.name; }));
					  y.domain([0, d3.max(data, function(d) { return d.freq; })]);

					  svg.append("g")
					      .attr("class", "x axis")
					      .attr("transform", "translate(0," + height + ")")
					      .call(xAxis);

					  svg.append("g")
					      .attr("class", "y axis")
					      .call(yAxis)
					    .append("text")
					      .attr("transform", "rotate(-90)")
					      .attr("y", 6)
					      .attr("dy", ".71em")
					      .style("text-anchor", "end")
					      .text("Frequency");

					  svg.selectAll(".bar")
					      .data(data)
					    .enter().append("rect")
					      .attr("class", "bar")
					      .attr("x", function(d) { return x(d.name); })
					      .attr("width", x.rangeBand())
					      .attr("y", function(d) { return y(d.freq); }) // orientation
					      .attr("height", function(d) { return height - y(d.freq); }) // length of the bar


					function type(d) {
					  d.freq = +d.freq;
					  return d;
					}


					bar.update = function(data2){
						// console.log("hererere")
						// console.log(data2)
						// console.log(svg.selectAll(".bar"))


						// console.log(d3.max(data2, function(d) { return d.freq; }))

					    y.domain([0, d3.max(data2, function(d) { return d.freq; })]);

	    				// d3.select(".barChart").remove()
						// svg.selectAll(".bar").transition().duration(3000).style("fill", "green")

						// var bars = svg.selectAll()
						// height = 500

						svg.selectAll("rect").data(data2)
							.transition()
							.duration(1500)
					      	.attr("x", function(d) { return x(d.name); })
					      	.attr("width", x.rangeBand())
					      	.attr("y", function(d) { return y(d.freq); }) // orientation
					      	.attr("height", function(d) { console.log(height - y(d.freq)); return height - y(d.freq); }) // length of the bar


					}
					return bar
	    		}
	    		var tree = phyTree()
	    		var bar = barChart()
			}
		}
   	}
})()
