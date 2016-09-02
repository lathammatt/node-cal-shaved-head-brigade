"use strict";

const {assert: {isFunction, strictEqual}} = require('chai');
const {daysOfWeek} = require('../lib/daysTitle')


	describe('days of week', () => {
		it('should be a function', () => {
			isFunction(daysOfWeek)
		})
		it('should display days of the week', () => {
			strictEqual(daysOfWeek(), 'Su Mo Tu We Th Fr Sa')
		})
	})
