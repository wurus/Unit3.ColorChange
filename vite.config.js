import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({ server: {
  watch:{
    usePolling: true,
  },
},
  plugins: [react({
    // Add this line
    include: "**/*.jsx",
    server: { hmr: true },
  })],
})

