import {defineConfig} from 'vite'
import VuePlugin from '@vitejs/plugin-vue'
import plugin, { Mode } from 'vite-plugin-markdown'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VuePlugin(),
    plugin({ mode: [Mode.HTML, Mode.TOC, Mode.VUE] })],
})
