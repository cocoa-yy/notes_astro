// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: '晕晕的笔记',
			social: {
				github: 'https://github.com/cocoa-yy',
			},
			sidebar: [
				{
					label: '欢迎',slug: 'guides/welcome'
				},
				{
					label: '前沿技术分享',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: '前沿技术【第一期】', slug: 'share/前沿分享会资料第一期' },
					],
				},
				{
					label: '参考资料',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
