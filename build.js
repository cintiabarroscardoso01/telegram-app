require('esbuild').build({
  entryPoints: ['src/index.js'],
  bundle: true,
  platform: 'node', // 👈 ESSENCIAL
  outfile: 'dist/bundle.js',
}).catch(() => process.exit(1));
