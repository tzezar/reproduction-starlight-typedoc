// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightTypeDoc, { typeDocSidebarGroup } from 'starlight-typedoc'

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			plugins: [
				// Generate the documentation.
				starlightTypeDoc({
					entryPoints: ['./fixtures/basics/src/index.ts'],
					tsconfig: './tsconfig.json',
					sidebar: {
						label: 'API (auto-generated)',
					},
				}),
			],
			sidebar: [
				{
					label: 'Guides',
					items: [
						{ label: 'Example Guide', slug: 'guides/example' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				typeDocSidebarGroup,
			],
		}),
	],
});
