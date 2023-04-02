import adapter from '@sveltejs/adapter-auto';
import seqPreprocessor from 'svelte-sequential-preprocessor'
import { vitePreprocess } from '@sveltejs/kit/vite';
import { preprocessThrelte } from '@threlte/preprocess';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: seqPreprocessor([vitePreprocess(), preprocessThrelte()]),
	kit: {
		adapter: adapter()
	}
};

export default config;
