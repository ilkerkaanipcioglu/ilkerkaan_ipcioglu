// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'İlker Kaan İpçioğlu Blog',

			sidebar: [
				{
					label: 'Notlar',
					autogenerate: { directory: 'notlar' },
				},
			],
		}),
	],
});
