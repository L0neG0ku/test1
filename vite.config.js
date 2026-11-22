import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tracking from './scripts/tracking-plugin.js'

/* The blog is static HTML in public/blog/. Vercel serves /blog/<slug>/ from
   its index.html, but the Vite dev server would hand those URLs to the React
   app instead, which shows the 404 page. Mirror Vercel locally. */
function blogInDev() {
  return {
    name: 'kribble-blog-dev',
    configureServer(server) {
      server.middlewares.use((req, _res, next) => {
        const [path, query = ''] = req.url.split('?')
        if (path === '/blog' || (path.startsWith('/blog/') && !/\.[a-z0-9]+$/i.test(path))) {
          req.url = path.replace(/\/?$/, '/index.html') + (query ? `?${query}` : '')
        }
        next()
      })
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tracking(), blogInDev()],
})
