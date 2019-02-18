/// <reference types="inquirer" />
/// <reference types="node" />
import * as Generator from 'yeoman-generator';
interface NpmTsGeneratorAnswers extends Generator.Answers {
    appname: string;
    description: string;
    gitEmail: string;
    gitName: string;
    githubUsername: string;
    keywords: string[];
    license: string;
    npmPath: string;
}
declare const _default: {
    new (args: string | string[], options: {}): {
        answers?: NpmTsGeneratorAnswers | undefined;
        prompting(): Promise<void>;
        writing(): void;
        install(): void;
        env: {
            error(...e: Error[]): void;
        };
        args: {};
        resolved: string;
        description: string;
        appname: string;
        config: Generator.Storage;
        fs: Generator.MemFsEditor;
        options: {
            [name: string]: any;
        };
        log(message?: string | undefined, context?: any): void;
        argument(name: string, config: Generator.ArgumentConfig): any;
        composeWith(namespace: string, options: {
            [name: string]: any;
        }, settings?: {
            local: string;
            link: "strong" | "weak";
        } | undefined): any;
        destinationPath(...path: string[]): string;
        destinationRoot(rootPath?: string | undefined): string;
        determineAppname(): string;
        option(name: string, config: Generator.OptionConfig): any;
        prompt(questions: Generator.Questions): Promise<import("inquirer").Answers>;
        registerTransformStream(stream: {} | {}[]): any;
        rootGeneratorName(): string;
        rootGeneratorVersion(): string;
        run(cb?: ((err: any) => void) | undefined): any;
        sourceRoot(rootPath?: string | undefined): string;
        templatePath(...path: string[]): string;
        argumentsHelp(): string;
        desc(description: string): any;
        help(): string;
        optionsHelp(): string;
        usage(): string;
        spawnCommand(command: string, args: string[], opt?: {} | undefined): any;
        spawnCommandSync(command: string, args: string[], opt?: {} | undefined): any;
        bowerInstall(component?: string | string[] | undefined, options?: object | undefined, spawnOptions?: object | undefined): void;
        installDependencies(options?: Generator.InstallOptions | undefined): void;
        npmInstall(pkgs?: string | string[] | undefined, options?: object | undefined, spawnOptions?: object | undefined): void;
        scheduleInstallTask(installer: string, paths?: string | string[] | undefined, options?: object | undefined, spawnOptions?: object | undefined): void;
        yarnInstall(pkgs?: string | string[] | undefined, options?: object | undefined, spawnOptions?: object | undefined): void;
        readonly user: {
            readonly git: {
                email(): string;
                name(): string;
            };
            readonly github: {
                username(): Promise<string>;
            };
        };
        addListener(event: string | symbol, listener: (...args: any[]) => void): any;
        on(event: string | symbol, listener: (...args: any[]) => void): any;
        once(event: string | symbol, listener: (...args: any[]) => void): any;
        prependListener(event: string | symbol, listener: (...args: any[]) => void): any;
        prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): any;
        removeListener(event: string | symbol, listener: (...args: any[]) => void): any;
        off(event: string | symbol, listener: (...args: any[]) => void): any;
        removeAllListeners(event?: string | symbol | undefined): any;
        setMaxListeners(n: number): any;
        getMaxListeners(): number;
        listeners(event: string | symbol): Function[];
        rawListeners(event: string | symbol): Function[];
        emit(event: string | symbol, ...args: any[]): boolean;
        eventNames(): (string | symbol)[];
        listenerCount(type: string | symbol): number;
    };
    Storage: typeof Generator.Storage;
    listenerCount(emitter: import("events").EventEmitter, event: string | symbol): number;
    defaultMaxListeners: number;
    EventEmitter: typeof import("events").EventEmitter;
};
export = _default;
