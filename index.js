'use strict'

module.exports = function crossOSX() {
	if (typeof window !== 'undefined') {
		return navigator.userAgent.indexOf('Mac OS X') > -1
	}
	return process.platform === 'darwin'
}
