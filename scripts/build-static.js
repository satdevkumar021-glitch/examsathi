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

  console.log('Building static export for GitHub Pages...');
  execSync('STATIC_EXPORT=true npx next build --webpack', {
    cwd: rootDir,
    stdio: 'inherit',
    env: { ...process.env, STATIC_EXPORT: 'true' },
  });
  console.log('Static export build succeeded! Output in ./out');
} finally {
  if (renamed && fs.existsSync(tempApiDir)) {
    fs.renameSync(tempApiDir, apiDir);
    console.log('Restored src/app/api directory for dynamic backend.');
  }
}
