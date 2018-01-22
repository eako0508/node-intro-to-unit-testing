const expected = require('chai').expect;
const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer', function(){
	it('should show fizz on multiple 3, buzz on multiple 5 and fizz-buzz on multiple of 15', function(){
		const normalCases = [
			{num: 3, expected: 'fizz'},
			{num: 5, expected: 'buzz'},
			{num: 15, expected: 'fizz-buzz'},
			{num: 12, expected: 'fizz'},
			{num: 20, expected: 'buzz'},
			{num: 30, expected: 'fizz-buzz'}
		];
		normalCases.forEach(function(input){
			const result = fizzBuzzer(input.num);
			expected(result).to.equal(input.expected);
		});
	});
	it('should raise error if args not number', function(){
		const badCases = [
			'apple',
			'banana'
		];
		badCases.forEach(function(input){
			expected(function(){
				fizzBuzzer(input);
			}).to.throw(Error);
		});
	});
});
