  import { defineConfig } from 'vite'
  import react from '@vitejs/plugin-react'
  import tailwindcss from "@tailwindcss/vite"
  import path from 'path'
  import tsconfigPaths from "vite-tsconfig-paths" 

  export default defineConfig({
    plugins: [react(), tailwindcss(), tsconfigPaths()],
    resolve:  {
      alias: {
        "@": path.resolve(__dirname, './src')
      }
    },
    build: {
      sourcemap: false
    },
    optimizeDeps: {
      include: ['tslib']
    },
    server: {
      proxy: {
      '/graphql': {
          target: 'http://localhost:3000', 
          changeOrigin: true,            
          secure: false,                  
        },
      }
    }
  })
