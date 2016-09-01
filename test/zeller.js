"use strict";

const {exec} = require('child_process');
const {assert: {isFunction, strictEqual, isArray}} = require('chai');
const {getDayOfWeek, getMonth, getYear, monthName, weekStart, monthCalc, yearCalc, monthBuild, monthDays, monthSlice} = require('../lib/zeller')

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
		it.skip('should allow a range of 1-12', () => {

		})
	})

	describe('monthtitle', () => {
		it('should be a function', () => {
			isFunction(monthName)
		})
		it('should display desired month', () => {
			strictEqual(monthName(2000,1), '    January 2000\nSu Mo Tu We Th Fr Sa' )
		})
		it('should display desired year', () => {
			strictEqual(monthName(1990,6), '    June 1990\nSu Mo Tu We Th Fr Sa' )
		})
		it('should display days of the week', () => {
			strictEqual(monthName(2014,12), '    December 2014\nSu Mo Tu We Th Fr Sa' )
		})
	})

	describe('year', () => {
		it('should be a function', ()=> {
			isFunction(getYear)
		})
		it('should handle January', () => {
			strictEqual(getYear(2000, 1), 1999)
		})
		it.skip('should allow a range of 1753-9999', ()=>{

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

	describe('days in month', () => {
		it('should be a function', () => {
			isFunction(monthDays)
		})
		it('should return a number', () => {
			strictEqual(monthDays(1), 31)
			strictEqual(monthDays(2), 28)
			strictEqual(monthDays(9), 30)
		})
	})

	describe('start of week', () => {
		it('should be a function', () => {
			isFunction(weekStart)
		})
		it('should return an array', () => {
			let expected = ["   ", "   ", "   "]
			isArray(weekStart(3), expected)
		})
	})

	describe('building the month', () => {
		it('should be a function', () => {
			isFunction(monthBuild)
		})
		it('should return an array', () => {
			let expected = ["   ", "   ", "   ", "   ", " 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", " 7 ", " 8 ", " 9 ", "10 ", "11 ", "12 ", "13 ", "14 ", "15 ", "16 ", "17 ", "18 ", "19 ", "20 ", "21 ", "22 ", "23 ", "24 ", "25 ", "26 ", "27 ", "28 ", "29 ", "30 "]
			let expected2 = ["   ", "   ", "   ", "   ", " 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", " 7 ", " 8 ", " 9 ", "10 ", "11 ", "12 ", "13 ", "14 ", "15 ", "16 ", "17 ", "18 ", "19 ", "20 ", "21 ", "22 ", "23 ", "24 ", "25 ", "26 ", "27 ", "28 ", "29 ", "30 ", "31 "]
			let expected3 = ["   ", "   ", "   ", "   ", " 1 ", " 2 ", " 3 ", " 4 ", " 5 ", " 6 ", " 7 ", " 8 ", " 9 ", "10 ", "11 ", "12 ", "13 ", "14 ", "15 ", "16 ", "17 ", "18 ", "19 ", "20 ", "21 ", "22 ", "23 ", "24 ", "25 ", "26 ", "27 ", "28 "]
			isArray(monthBuild(2016, 9, 1), expected)
			isArray(monthBuild(2016, 12, 1), expected2)
			isArray(monthBuild(2015, 2), expected3)
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

describe('sept 2016', ()=>{
	it.skip('should be a function', ()=>{
		isFunction(zellerFormula)
	})
	it.skip('should start on Thursday', () => {

	})
	it.skip('should have 30 days', ()=>{

	})
	it.skip('should have 5 weeks', ()=>{

	})
})

describe('feb 2016', ()=>{
	it.skip('should be a function', ()=>{
		isFunction(zellerFormula)
	})
	it.skip('should start on Monday', () => {

	})
	it.skip('should have 29 days', ()=>{

	})
	it.skip('should have 5 weeks', ()=>{

	})
})

describe('feb 2017', ()=>{
	it.skip('should be a function', ()=>{
		isFunction(zellerFormula)
	})
	it.skip('should start on Wednesday', () => {

	})
	it.skip('should have 28 days', ()=>{

	})
	it.skip('should have 4 weeks', ()=>{

	})
})

describe('Feb 2015', ()=>{
	it.skip('should be a function', ()=>{
		isFunction(zellerFormula)
	})
	it.skip('should start on Sunday', () => {

	})
	it.skip('should have 28 days', ()=>{

	})
	it.skip('should have 4 weeks', ()=>{

	})
})

describe('january 2016', ()=>{
	it.skip('should be a function', ()=>{
		isFunction(zellerFormula)
	})
	it.skip('should start on Friday', () => {

	})
	it.skip('should have 31 days', ()=>{

	})
	it.skip('should have 6 weeks', ()=>{

	})
})

describe('April 2017', ()=>{
	it.skip('should be a function', ()=>{
		isFunction(zellerFormula)
	})
	it.skip('should start on Saturday', () => {

	})
	it.skip('should have 30 days', ()=>{

	})
	it.skip('should have 6 weeks', ()=>{

	})
})

describe('Feb 2100', ()=>{
	it.skip('should be a function', ()=>{
		isFunction(zellerFormula)
	})
	it.skip('should start on Friday', () => {

	})
	it.skip('should have 28 days', ()=>{

	})
	it.skip('should be a non-leap century', () => {

	})
	it.skip('should have 5 weeks', ()=>{

	})
})

describe('Feb 2000', ()=>{
	it.skip('should be a function', ()=>{
		isFunction(zellerFormula)
	})
	it.skip('should start on Tuesday', () => {

	})
	it.skip('should have 29 days', ()=>{

	})
	it.skip('should be a leap century', () => {

	})
	it.skip('should have 5 weeks', ()=>{

	})
})


