import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  { files: ['src/app/layout.tsx'], rules: { '@next/next/no-page-custom-font': 'off' } }, // App Router root layout loads fonts for every route; pages/_document guidance does not apply.
  { rules: { '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }] } }, // Compatibility APIs deliberately retain unused argument names.

  { files: ["scripts/*.js"], rules: { "@typescript-eslint/no-require-imports": "off" } }, // Node CommonJS entry points.
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "public/ocr/**", // Generated third-party OCR runtime; source is audited through npm.
    "build/**",
    "next-env.d.ts",
    "public/pdf.worker.min.mjs", // Vendored PDF.js worker; lint source package, not its minified build.
  ]),
]);

export default eslintConfig;
