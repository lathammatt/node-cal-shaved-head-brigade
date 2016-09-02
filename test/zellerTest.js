"use strict";

const {exec} = require('child_process');
const {assert: {isFunction, strictEqual}} = require('chai');
const {getDayOfWeek, getMonth, getYear, monthCalc, yearCalc} = require('../lib/zeller')
const {weekOne, weekTwo, weekThree, weekFour, weekFive, weekSix} = require('../lib/weekOutput')
const {monthSlice} = require('../lib/monthOutput')


describe('zeller', () => {
	describe('month', () => {
		it('should be a function', ()=> {
			isFunction(getMonth)
		})
		it('should handle January', () => {
			strictEqual(getMonth(1), 13)
		})
	})

	describe('year', () => {
		it('should be a function', ()=> {
			isFunction(getYear)
		})
		it('should handle January', () => {
			strictEqual(getYear(2000, 1), 1999)
		})
	})

	describe('month calculation', () => {
		it('should be a function', () => {
			isFunction(monthCalc)
		})
		it('should return a number', () => {
			strictEqual(monthCalc(1),36)
			strictEqual(monthCalc(12),33)
			strictEqual(monthCalc(3),10)
		})
		it('return useage statement', () => {
			strictEqual(monthCalc(), "Useage: month must be between 1 and 12")
		})
	})

	describe('year calculation', () => {
		it('should be a function', () => {
			isFunction(yearCalc)
		})
		it('should return a number', () => {
			strictEqual(yearCalc(2000, 1),2483)
			strictEqual(yearCalc(1990, 3),2472)
			strictEqual(yearCalc(2014, 3),2502)

		})
	})

	describe('getDayOfWeek', () => {
		it('should be a function', () => {
			isFunction(getDayOfWeek)
		})
		it('should return a number', () => {
			strictEqual(getDayOfWeek(2016, 8, 1), 1)
			strictEqual(getDayOfWeek(2016, 8), 1)
		})
	})
})
	// ============









describe('march 2016', ()=>{
	it('should start on Tuesday', () => {
		strictEqual(weekOne(monthSlice(2016, 3)), "       1  2  3  4  5 ")
	})
	it('should have 31 days', ()=>{
		strictEqual(weekFive(monthSlice(2016, 3)), "27 28 29 30 31       ")

	})
	it('should have 5 weeks', ()=>{
		strictEqual(weekSix(monthSlice(2016, 3)), '         ')
	})
})

describe('sept 2016', ()=>{
	it('should start on Thursday', () => {
		strictEqual(weekOne(monthSlice(2016, 9)), "             1  2  3 ")

	})
	it('should have 30 days', ()=>{
		strictEqual(weekFive(monthSlice(2016, 9)), "25 26 27 28 29 30    ")

	})
	it('should have 5 weeks', ()=>{
		strictEqual(weekSix(monthSlice(2016, 9)), '            ')
	})
})

describe('feb 2016', ()=>{
	it('should start on Monday', () => {
		strictEqual(weekOne(monthSlice(2016, 2)), "    1  2  3  4  5  6 ")
	})
	it.skip('should have 29 days', ()=>{
		strictEqual(weekFive(monthSlice(2016, 2)), "28 29               ")
	})
	it('should have 5 weeks', ()=>{
		strictEqual(weekSix(monthSlice(2016, 2)), '   ')
	})
})

describe('feb 2017', ()=>{
	it('should start on Wednesday', () => {
		strictEqual(weekOne(monthSlice(2017, 2)), "          1  2  3  4 ")

	})
	it('should have 28 days', ()=>{
		strictEqual(weekFive(monthSlice(2017, 2)), '26 27 28             ')

	})
	it('should have 5 weeks', ()=>{
		strictEqual(weekSix(monthSlice(2017, 2)), '      ')

	})
})

describe('Feb 2015', ()=>{
	it('should start on Sunday', () => {
		strictEqual(weekOne(monthSlice(2015, 2)), " 1  2  3  4  5  6  7 ")

	})
	it('should have 28 days', ()=>{
		strictEqual(weekFour(monthSlice(2015, 2)), "22 23 24 25 26 27 28 ")

	})
	it('should have 4 weeks', ()=>{
		strictEqual(weekFive(monthSlice(2015, 2)), '                     ')
		strictEqual(weekSix(monthSlice(2015, 2)), '   ')

	})
})

describe('january 2016', ()=>{
	it('should start on Friday', () => {
		strictEqual(weekOne(monthSlice(2016, 1)), "                1  2 ")

	})
	it('should have 31 days', ()=>{
		strictEqual(weekSix(monthSlice(2016, 1)), '31             ')

	})
	it('should have 6 weeks', ()=>{
		strictEqual(weekSix(monthSlice(2016, 1)), '31             ')

	})
})

describe('April 2017', ()=>{
	it('should start on Saturday', () => {
		strictEqual(weekOne(monthSlice(2017, 4)), "                   1 ")

	})
	it('should have 30 days', ()=>{
		strictEqual(weekSix(monthSlice(2017, 4)), '30             ')

	})
	it('should have 6 weeks', ()=>{
		strictEqual(weekSix(monthSlice(2017, 4)), '30             ')

	})
})

describe('Feb 1900', ()=>{
	it('should start on Monday', () => {
		strictEqual(weekOne(monthSlice(1900, 2)), "             1  2  3 ")

	})
	it('should have 28 days', ()=>{
		strictEqual(weekFive(monthSlice(1900, 2)), "25 26 27 28          ")

	})
	it.skip('should be a non-leap century', () => {

	})
	it('should have 5 weeks', ()=>{
		strictEqual(weekSix(monthSlice(1900, 2)), '         ')

	})
})

describe('Feb 2000', ()=>{
	it('should start on Tuesday', () => {
		strictEqual(weekOne(monthSlice(2000, 2)), "       1  2  3  4  5 ")

	})
	it.skip('should have 29 days', ()=>{
		strictEqual(weekFive(monthSlice(2000, 2)), "27 28 29             ")

	})
	it.skip('should be a leap century', () => {

	})
	it('should have 5 weeks', ()=>{
		strictEqual(weekSix(monthSlice(2000, 2)), '      ')

	})
})


