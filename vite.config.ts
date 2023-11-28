import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import Inspect from 'vite-plugin-inspect'
import Icons from "unplugin-icons/vite"
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Inspect(),
    AutoImport({
      resolvers: [
        IconsResolver({
          extension: 'jsx',
        }),
      ],
      dts: true,
    }),
    Icons({
      compiler: 'jsx',
      jsx: 'react',
    }),
  ],
})
