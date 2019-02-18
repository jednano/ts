import Generator, { Answers } from 'yeoman-generator'

interface FooGeneratorAnswers extends Answers {
	description: string;
	github: string;
	keywords: string;
	npmpath: string;
}

export = class FooGenerator extends Generator {
	private answers: FooGeneratorAnswers
	public options: {
		appname: string;
	}

	constructor(args: string | string[], opts: {}) {
		super(args, opts)
		this.argument('appname', { type: String , required: true })
		this.log(this.options.appname)
	}

	public async prompting() {
		this.answers = await this.prompt([
			{
				type: 'input',
				name: 'description',
				message: 'Please enter a project description.',
			},
			{
				type: 'input',
				name: 'keywords',
				message: 'Please enter one or more project keywords.',
			},
			{
				type: 'input',
				name: 'github',
				message: 'What is your GitHub username?',
				default: await this.user.github.username(),
				store: true,
			},
			{
				type: 'input',
				name: 'npmpath',
				message: 'What will your npm publish path to be?',
				default: this.appname,
			},
		]) as any

		this.log('description', this.answers.description)
		this.log('keywords', this.answers.keywords)
		// this.log('GitHub username', this.answers.github)
		this.log('npm path', this.answers.npmpath)
	}

	public writing() {
		// await this.user.github.username();
		this.fs.copyTpl(
			this.templatePath('_package.json'),
			this.destinationPath('package.json'),
			this.answers,
		)
		// this.fs.copyTpl(
		// 	this.templatePath('_README.md'),
		// 	this.destinationPath('README.md'),
		// 	this.answers,
		// )
	}

	public install() {
		this.npmInstall(
			[
				'@jedmao/tsconfig',
				'@types/jest',
				'@types/node',
				'@typescript-eslint/eslint-plugin',
				'@typescript-eslint/parser',
				'eslint',
				'eslint-config-prettier',
				'husky',
				'jest',
				'jest-watch-typeahead',
				'lint-staged',
				'prettier',
				'rimraf',
				'ts-jest',
				'typescript',
			],
			{
				'save-dev': true,
			},
		)
	}

	public method1() {
		this.log('method 1 just ran')
	}

	public method2() {
		this.log('method 2 just ran')
	}
}
