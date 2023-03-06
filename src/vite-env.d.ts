/// <reference types="vite/client" />
/// <reference path="./styled.d.ts" />

interface ImportMetaEnv {
  readonly VITE_PUBLIC_URL: string
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
