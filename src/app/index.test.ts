/* eslint-env node, jest */
import { join } from 'path'
import * as assert from 'yeoman-assert'
import * as helpers from 'yeoman-test'

describe('npmts generator', () => {
	it('generates a project', async () => {
		expect.assertions(1)
		await helpers
			.run(join(__dirname, '../app'))
			.withArguments(['fooapp'])
			.withPrompts({})
		assert.file(['Foo.js', 'app/bar.ts'])
	})
})
