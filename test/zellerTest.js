"use strict";

const {exec} = require('child_process');
const {assert: {isFunction, strictEqual}} = require('chai');
const {getDayOfWeek, getMonth, getYear, monthCalc, yearCalc} = require('../lib/zeller')


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


