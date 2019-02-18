import * as Generator from 'yeoman-generator'

interface NpmTsGeneratorAnswers extends Generator.Answers {
	appname: string
	description: string
	gitEmail: string
	gitName: string
	githubUsername: string
	keywords: string[]
	license: string
	npmPath: string
}

export = class NpmTsGenerator extends Generator {
	private answers?: NpmTsGeneratorAnswers

	public async prompting() {
		const githubUsername = await this.user.github.username()
		this.answers = (await this.prompt([
			{
				type: 'input',
				name: 'appname',
				message: 'project name',
				default: this.appname,
			},
			{
				type: 'input',
				name: 'description',
				message: 'description',
			},
			{
				type: 'input',
				name: 'keywords',
				message: 'keywords',
				suffix: ' comma separated',
				filter: keywords => keywords.split(/ *, */),
			},
			{
				type: 'input',
				name: 'license',
				message: 'license',
				default: 'MIT',
			},
			{
				type: 'input',
				name: 'githubUsername',
				message: 'GitHub username',
				default: githubUsername,
				store: true,
			},
			{
				type: 'input',
				name: 'gitName',
				message: 'Your name (public)',
				default: await this.user.git.name(),
				store: true,
			},
			{
				type: 'input',
				name: 'gitEmail',
				message: 'Your email (public)',
				default: await this.user.git.email(),
				store: true,
			},
			{
				type: 'input',
				name: 'npmPath',
				message: 'npm publish path',
				default: `@${githubUsername}/${this.appname}`,
			},
		])) as NpmTsGeneratorAnswers
	}

	public writing() {
		;[
			'.vscode',
			'src',
			'.editorconfig',
			'.eslintrc.json',
			'.gitignore',
			'.npmignore',
			'.travis.yml',
			'package.json',
			'README.md',
			'tsconfig.json',
		].forEach(filename => {
			this.fs.copyTpl(
				this.templatePath(filename),
				this.destinationPath(filename),
				this.answers || {},
			)
		})
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
}
