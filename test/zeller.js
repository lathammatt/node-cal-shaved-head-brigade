"use strict";

const {exec} = require('child_process');
const {assert: {isFunction, strictEqual}} = require('chai');
const {getDayOfWeek, getMonth, getYear} = require('../lib/zeller')

// describe ('zeller', () => {
// 	it('should be a function', () => {
// 		isFunction(getDayOfWeek)
// 	})
// 	it('should return day number', () => {
// 		const input = 30;
// 		const expected = new Date().getDay()+1
// 		strictEqual(getDayOfWeek(input), expected)
// 		})
// 	})


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

	describe('getDayOfWeek', () => {
		it('should be a function', () => {
			isFunction(getDayOfWeek)
		})
		it('should return day number', () => {
			strictEqual(getDayOfWeek(2), 1)
		})
	})
})

describe('march 2016', ()=>{
	it.skip('should be a function', ()=>{
		isFunction(zellerFormula)
	})
	it.skip('should start on Tuesday', () => {

	})
	it.skip('should have 31 days', ()=>{

	})
	it.skip('should have 5 weeks', ()=>{

	})
})




// March 2016
// Starts on tuesday
// 31 days
// 5 weeks

// Sept 2016
// Starts on thursday
// 30 days
// 5 weeks

// Feb 2016
// starts on monday
// 29 days
// 5 weeks

// Feb 2017
// starts on wednesday
// 28 days
// 5 weeks

// Feb 2015
// starts on sunday
// 28 days
// 4 weeks

// Jan 2016
// starts on friday
// 31 days
// 6 weeks

// Apr 2017
// starts on saturday
// 30 days
// 6 weeks

// Feb 2100
// starts on friday
// 28 days (non-leap century)
// 5 weeks

// Feb 2000
// starts on tuesday
// 29 days (leap century)
// 5 weeks

// node-cal 1753 // cal: year 1753 not in range 1753..9999
// node-cal 9999 // cal: year 999999 not in range 1753..9999
// node-cal 13 2016 // cal: month 13 not in range 1..12
