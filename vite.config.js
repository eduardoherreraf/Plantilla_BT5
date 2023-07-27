import htmlPurge from 'vite-plugin-purgecss'
import { createHtmlPlugin } from 'vite-plugin-html'

const path = require('path')

export default {
  root: path.resolve(__dirname, 'src'),
  plugins:[
    htmlPurge(),
    createHtmlPlugin({
      minify:true,
      removeComments:true,
      colapseWhitespaces:true
    })
  ],
  build: {
    outDir: '../dist',
    emptyOutDir:true
  },
  server: {
    port: 8080
  }
}