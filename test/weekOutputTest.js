"use strict";

const {assert: {isFunction, strictEqual}} = require('chai');
const {weekOne, weekTwo, weekThree, weekFour, weekFive, weekSix} = require('../lib/weekOutput')
const {monthSlice} = require('../lib/monthOutput')


describe('days of week', () => {
	describe('week one', () => {
		it('should be a function', () => {
			isFunction(weekOne)
		})
		it('should output a string', () => {
			strictEqual(weekOne(monthSlice(2016, 10)), "                   1 ")
		})
	})
		describe('week two', () => {
		it('should be a function', () => {
			isFunction(weekTwo)
		})
		it('should output a string', () => {
			strictEqual(weekTwo(monthSlice(2016, 10)), " 2  3  4  5  6  7  8 ")
		})
	})
		describe('week three', () => {
		it('should be a function', () => {
			isFunction(weekThree)
		})
		it('should output a string', () => {
			strictEqual(weekThree(monthSlice(2016, 10)), " 9 10 11 12 13 14 15 ")
		})
	})
		describe('week four', () => {
		it('should be a function', () => {
			isFunction(weekFour)
		})
		it('should output a string', () => {
			strictEqual(weekFour(monthSlice(2016, 10)), "16 17 18 19 20 21 22 ")
		})
	})
		describe('week five', () => {
		it('should be a function', () => {
			isFunction(weekFive)
		})
		it('should output a string', () => {
			strictEqual(weekFive(monthSlice(2016, 10)), "23 24 25 26 27 28 29 ")
		})
	})
		describe('week six', () => {
		it('should be a function', () => {
			isFunction(weekSix)
		})
		it('should output a string', () => {
			strictEqual(weekSix(monthSlice(2016, 10)), "30 31                ")
		})
	})

})
