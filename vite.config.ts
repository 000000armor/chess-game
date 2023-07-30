import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

const aliases = [
  'components',
  'store',
  'utils',
  'types',
  'templates',
  'assets',
  'entities'
].reduce(
  (acc, pathString) => ({
    ...acc,
    [`@${pathString}`]: path.resolve(__dirname, `./src/${pathString}`),
  }),
  {},
);

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      ...aliases,
      '@': path.resolve(__dirname, './src'),
    },
  },
});
