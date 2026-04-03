const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['node_modules/telegram/index.js'],
  bundle: true,
  platform: 'browser',
  outfile: 'dist/telegram.js',
  define: {
    'process.env.NODE_ENV': '"production"'
  }
}).catch(() => process.exit(1));
