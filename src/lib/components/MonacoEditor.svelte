<script lang="ts">
	import loader from '@monaco-editor/loader';
	import { onDestroy, onMount } from 'svelte';
	import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

	let editor: Monaco.editor.IStandaloneCodeEditor | undefined = undefined;
	let monaco: typeof Monaco;
	let editorContainer: HTMLElement;

    let { text = $bindable('') } = $props();

	onMount(async () => {
		// Remove the next two lines to load the monaco editor from a CDN
		// see https://www.npmjs.com/package/@monaco-editor/loader#config
		const monacoEditor = await import('monaco-editor');
		loader.config({ 
            monaco: monacoEditor.default,
         });

		monaco = await loader.init();
		// Your monaco instance is ready, let's display some code!
		const editor = monaco.editor.create(
            editorContainer,
            {
                value: text,
                language: 'xml',
                theme: 'vs-dark',
                minimap: { enabled: false },
                automaticLayout: true,
                scrollBeyondLastLine: false
            });
	});

	onDestroy(() => {
		monaco?.editor.getModels().forEach((model) => model.dispose());
        if (!editor) {
            return
        }
        editor.dispose();
	});

    $effect(() => {
        if (!editor) {
            return
        }
        editor.value = text;
    })
</script>

<div class="container" bind:this={editorContainer} ></div>


<style>
	.container {
		width: 100%;
		height: 100%;
	}
</style>