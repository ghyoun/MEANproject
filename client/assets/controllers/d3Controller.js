(function(){
	'use strict'
	angular
		.module('app')
		.controller('d3Controller', d3Ctrl)
		.directive("phyTree", ['d3', phyTreeDirective])
		.directive("barGraph", ['d3', barChartDirective])

	function d3Ctrl($location, $scope){

		$scope.tree = {
			name:"HIV-1 isolate Cameroon1(ViroSeq) HIV DR 46 from Cameroon pol protein (pol) gene, partial cds",
			children: [	
				{
					name: "A",
					children: [
						{ name: "aaaaaaa" },
						{ name: "bbbbbbbbb" },
						{ name: "cccc" },
					]
				},
				{
					name: "B",
					children: [
						{
						    name: "aaaaaaa",
						    children: [
						        { name: "11111" },
						        { name: "22" },
						    ]
						},
						{
						    name: "bbbbbbbbbbbbbbb",
						    children: [
						        { name: "1111" },
						        { name: "22" },
						        { name: "3333333333333" },
						        { name: "444444444" }
						    ]
						}
					]
				},
			]
     	}

     	$scope.bar = [
     		{name: "Gary"},
     		{name: "Gary"},
     		{name: "Gary"},
     		{name: "Gary"},
     		{name: "Dan"},
     		{name: "Dan"},
     		{name: "Gabe"},
     		{name: "Gabe"},
     		{name: "Gabe"},
     		{name: "Young"},
     	]

	}

	function phyTreeDirective(d3){
		return{
    		restrict: "EA",
    		link: function($scope, elem, attrs){
    			// console.log($scope)
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

    		}
  		};
	}


	function barChartDirective(d3){
		return{
    		restrict: "EA",
    		link: function($scope, elem, attrs){
    			d3.select(".barChart").remove()

				var canvas = d3.select("#bar").append("svg")
    				.attr("width", 500)
    				.attr("height", 400)
    				.attr("class", "barChart")

    		}
    	}
	}

})()
