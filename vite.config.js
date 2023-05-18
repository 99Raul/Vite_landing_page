import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import { ViteWebfontDownload } from 'vite-plugin-webfont-dl';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		ViteWebfontDownload([
			'https://fonts.googleapis.com/css2?family=Reem+Kufi+Fun:wght@400;500;600&display=swap',
		]),
	],
});
