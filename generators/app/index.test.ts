import path from 'path'
import assert from 'yeoman-assert'
import helpers from 'yeoman-test'

describe('my generator', () => {
	it('generates a project', async () => {
		expect.assertions(1)
		await helpers.run(path.join(__dirname, '../app'))
			.withArguments(['fooapp'])
			.withPrompts({

			})
		assert.file(['Foo.js', 'app/bar.ts'])
	});
})
