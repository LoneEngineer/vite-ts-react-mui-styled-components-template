import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from "vite-plugin-babel-macros"
import * as path from 'path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['babel-plugin-styled-components', { ssr: false, pure: true, displayName: true, fileName: false }]
        ]
      }
    }),
    macrosPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  server: {
    port: 3001,
  },
  resolve: {
    alias: [
      { find: '@components', replacement: path.resolve(__dirname, 'src/components') }
    ]
  }
})
