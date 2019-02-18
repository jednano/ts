import * as Generator from 'yeoman-generator'

export = class ModuleGenerator extends Generator {
	public options: {
		name?: string
	} = {}

	public constructor(args: string | string[], opts: {}) {
		super(args, opts)
		this.argument('name', { type: String, required: true })
	}

	public writing() {
		const name = (this.options && this.options.name) || ''
		;['index.ts', 'index.test.ts'].forEach(filename => {
			this.fs.copyTpl(
				this.templatePath(filename),
				this.destinationPath(`src/${filename.replace('index', name)}`),
				this.options,
			)
		})
	}
}
