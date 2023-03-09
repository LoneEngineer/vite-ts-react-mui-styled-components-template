/// <reference types="vite/client" />
/// <reference path="./styled.d.ts" />

interface ImportMetaEnv {
  readonly VITE_API_URL: string
  readonly VITE_DEBUG_I18N: string
  readonly VITE_APP_VERSION: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
