/*
  Lets plain node resolve the app's extensionless imports.

  Source files are written for Vite, which fills in ".js" itself. Node's ESM
  resolver does not, so a script that imports src/ directly needs this hook:

    node --import ./scripts/resolve-ext.mjs scripts/<script>.mjs
*/
import { register } from 'node:module'
import { existsSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'

export function resolve(specifier, context, next) {
  if (specifier.startsWith('.') && !/\.[a-z]+$/i.test(specifier)) {
    const base = new URL(specifier, context.parentURL)
    for (const ext of ['.js', '.jsx', '/index.js', '/index.jsx']) {
      if (existsSync(fileURLToPath(new URL(base.href + ext)))) return next(specifier + ext, context)
    }
  }
  return next(specifier, context)
}

register(pathToFileURL(fileURLToPath(import.meta.url)))
