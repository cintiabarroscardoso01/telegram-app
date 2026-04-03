import { build } from 'esbuild';

build({
  entryPoints: ['node_modules/telegram/index.js'],
  bundle: true,
  platform: 'browser',
  outfile: 'dist/telegram.js',
  define: {
    'process.env.NODE_ENV': '"production"'
  },
  loader: {
    '.js': 'jsx'
  }
}).catch(() => process.exit(1));
