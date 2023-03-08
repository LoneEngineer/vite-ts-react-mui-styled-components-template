import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import macrosPlugin from 'vite-plugin-babel-macros'
import dts from 'vite-plugin-dts'
import tsconfigPaths from 'vite-tsconfig-paths'

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
    tsconfigPaths(),
    macrosPlugin(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  server: {
    port: 3001,
  },
})
