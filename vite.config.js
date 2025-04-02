import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
  theme : {
    extend :{
      screens : {
        sm :"576px",
        md:"768px",
        lg:"992px",
        xl:"1200px",
        "2xl" :"1400px"
      }
    }
  }
})
