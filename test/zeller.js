"use strict";

const {exec} = require('child_process');
const {assert: {isFunction, strictEqual}} = require('chai');
const {getDayOfWeek} = require('../lib/zeller')

describe ('zeller', () => {
	it('should be a function', () => {
		isFunction(getDayOfWeek)
	})
	it('should return day number', () => {
		const input = 30;
		const expected = new Date().getDay()+1
		strictEqual(getDayOfWeek(input), expected)
		})
	})
