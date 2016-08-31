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
		it.skip('should allow a range of 1-12', () => {

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
	it.skip('should be a non-leap century', () =. {

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
	it.skip('should be a leap century', () =. {

	})
	it.skip('should have 5 weeks', ()=>{

	})
})


