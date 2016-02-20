import test from 'ava'
import osx from './'

test('main', t => {
	if (process.env.CIRCLECI) {
		t.false(osx())
	} else {
		t.true(osx())
	}
})
