import dotenv from 'dotenv';
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import sass from 'vite-plugin-sass';

// Load environment variables from .env
dotenv.config();

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
