import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'İlker Kaan İpçioğlu Blog',

			customCss: [
				'./src/styles/global.css',
			],
			sidebar: [
				{
					label: 'Notlar',
					autogenerate: { directory: 'notlar' },
				},
			],
		}),
	],
	vite: {
		plugins: [tailwindcss()]
	}
});
