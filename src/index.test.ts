/* eslint-env node, jest */
import index from '.'

describe('index', () => {
	it('exports a default object', () => {
		expect(index).toEqual({})
	})
})
