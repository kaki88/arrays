var arrays = require("../lib/arrays");


describe("arrays functions kata", function() {
	var test = [-2,5,3,43,-40];

	it("should return the number of elements in my array", function() {
		var nb_elements = arrays.count(test);
		expect(nb_elements).toBe(5);

	})


	it("should return the minimum value in my array", function() {
		var min = arrays.min(test);
		expect(min).toBe(-40);
	})


	it("should return the maximum value in my array", function() {
		var max = arrays.max(test);
		expect(max).toBe(43);
	})


	it("should return the sum of the elements in my array", function() {
		var sum = arrays.sum(test);
		expect(sum).toBe(9);
	})


	it("should return the mean of the elements in my array", function() {
		var mean = arrays.mean(test);
		expect(mean).toBe(1.8);
	})


	it("should return the position of a given element", function(){
		var pos = arrays.pos(test,43);
		expect(pos).toBe(4);
	})

	it("should filter out negative values", function(){
		var result = arrays.filterNeg(test);
		expect(result).toEqual([5,3,43]);
	})

	it("should augment the arrays with new values at the end", function(){      
       var augmented = arrays.augment(test,-45);
       expect(augmented).toEqual([-2,5,3,43,-40,-45]);
	})

});