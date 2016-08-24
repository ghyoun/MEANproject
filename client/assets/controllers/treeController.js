(function(){
	'use strict'
	angular
		.module('app')
		.controller('treeController', treesCtrl)
		.directive("phyTree", ['d3', phyTreeDirective])

	function treesCtrl($location, $scope){

		$scope.tree = {
			name:"flare",
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
	}

	function phyTreeDirective(d3){
		return{
    		restrict: "EA",
    		link: function($scope, elem, attrs){
    			// console.log($scope)
    			d3.select("svg").remove()

    			var canvas = d3.select("#tree").append("svg")
    				.attr("width", 700)
    				.attr("height", 900)

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
						.attr("transform", function(d) { return "translate(" + d.y + "," + d.x + ")" })

				node.append("circle")
					.attr("r", 5)
					.attr("fill", "#d5aa6d")

				node.append("text")
					.text( function(d) { return d.name })

				var diagonal = d3.svg.diagonal()
					.projection( function(d) { return [d.y, d.x] })

				canvas.selectAll(".link")
					.data(links)
					.enter()
					.append("path")
					.attr("class", "link")
					.attr("fill", "none")
					.attr("stroke", "#ADADAD")
					.attr("d", diagonal)
  			
    		}
  		};
	}

})()