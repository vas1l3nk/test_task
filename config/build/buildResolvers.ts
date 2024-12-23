import {ResolveOptions} from 'webpack';
import path from 'path';
import {BuildOptions} from './types/build';

export function buildResolvers(options: BuildOptions): ResolveOptions {
    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [options.paths.src, 'node_modules'],
        mainFiles: ['index'],
        alias: {
            '@': path.resolve(options.paths.src),
        },
    };
}
