"use strict";

const {assert: {isFunction, strictEqual}} = require('chai');
const {monthName} = require('../lib/monthTitle')

	describe('monthtitle', () => {
		it('should be a function', () => {
			isFunction(monthName)
		})
		it('should display desired month', () => {
			strictEqual(monthName(2000,1), '    January 2000    ' )
		})
		it('should display desired year', () => {
			strictEqual(monthName(1990,6), '     June 1990     ')
		})
	})
