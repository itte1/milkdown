/* Copyright 2021, Milkdown by Mirone. */
import typescript from '@rollup/plugin-typescript';
import path from 'path';
import { defineConfig } from 'vite';

const resolvePath = (str: string) => path.resolve(__dirname, str);

export default defineConfig({
    root: 'app',
    build: {
        sourcemap: true,
        lib: {
            entry: resolvePath('src/index.ts'),
            name: 'milkdown_transformer',
            fileName: (format) => `index.${format}.js`,
        },
        rollupOptions: {
            external: ['@milkdown/core'],
            output: {
                dir: resolvePath('lib'),
                // Provide global variables to use in the UMD build
                // for externalized deps
                globals: {
                    '@milkdown/core': 'milkdown_core',
                },
            },
            plugins: [typescript()],
        },
    },
});
