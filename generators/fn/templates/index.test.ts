/* eslint-env node, jest */
import <%= name %> from './<%= name %>'

describe('<%= name %> function', () => {
	it('returns undefined', () => {
		expect(<%= name %>()).toBeUndefined()
	})
})
