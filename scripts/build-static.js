const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '..');
const apiDir = path.join(rootDir, 'src', 'app', 'api');
const tempApiDir = path.join(rootDir, 'src', 'app', '_api_temp');

let renamed = false;
try {
  if (fs.existsSync(apiDir)) {
    fs.renameSync(apiDir, tempApiDir);
    renamed = true;
  }

  fs.copyFileSync(path.join(rootDir, 'node_modules/pdfjs-dist/build/pdf.worker.min.mjs'), path.join(rootDir, 'public/pdf.worker.min.mjs'));
  console.log('Building static export for GitHub Pages...');
  execSync('STATIC_EXPORT=true npx next build --webpack', {
    cwd: rootDir,
    stdio: 'inherit',
    env: { ...process.env, STATIC_EXPORT: 'true', NEXT_PUBLIC_STATIC_EXPORT: 'true' },
  });
  // Derive search metadata from actual exported public pages.
  const pages = [];
  const out = path.join(rootDir, 'out');
  const visit = dir => { for (const item of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, item.name);
    if (item.isDirectory()) visit(full);
    else if (item.name === 'index.html') {
      const route = path.relative(out, dir).split(path.sep).join('/');
      if (!/^(admin|auth|login|register|forgot-password|results|profile|404)(\/|$)/.test(route)) pages.push(route);
    }
  } };
  visit(out);
  const origin = 'https://satdevkumar021-glitch.github.io/examsathi/';
  const sitemap = '<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' + pages.sort().map(route => `<url><loc>${origin}${route ? route + '/' : ''}</loc></url>`).join('') + '</urlset>';
  fs.writeFileSync(path.join(out, 'sitemap.xml'), sitemap);
  fs.writeFileSync(path.join(rootDir, 'public/sitemap.xml'), sitemap);
  console.log('Static export build succeeded! Output in ./out');
} finally {
  if (renamed && fs.existsSync(tempApiDir)) {
    fs.renameSync(tempApiDir, apiDir);
    console.log('Restored src/app/api directory for dynamic backend.');
  }
}
