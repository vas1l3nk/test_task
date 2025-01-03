import {buildWebpackConfig} from './config/build/buildWebpackConfig';
import {BuildEnv, BuildPaths} from './config/build/types/build';
import path from 'path';

export default (env: BuildEnv) => {
    const paths: BuildPaths = {
        build: path.resolve(__dirname, 'dist'),
        entry: path.resolve(__dirname, 'src', 'index.tsx'),
        html: path.resolve(__dirname, 'public', 'index.html'),
        src: path.resolve(__dirname, 'src'),
    };

    const mode = env.mode ?? 'development';
    const isDev = mode === 'development';
    const PORT = env.port ?? 3000;

    return buildWebpackConfig({
        isDev,
        port: PORT,
        paths,
        mode,
    });
};
