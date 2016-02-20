'use strict'

module.exports = function crossOSX() {
	if (process !== undefined) {
		return process.platform === 'darwin'
	}
	return navigator.userAgent.indexOf('Mac OS X') > -1
}
