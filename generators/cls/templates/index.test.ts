/* eslint-env node, jest */
import <%= name %> from './<%= name %>'

describe('<%= name %> class', () => {
	it('has a name of <%= name %>', () => {
		expect(<%= name %>.name).toBe(<%= name %>)
	})
})
