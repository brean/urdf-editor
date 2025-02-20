<script lang="ts">
  import loader from '@monaco-editor/loader';
  import { onDestroy, onMount } from 'svelte';
  import type * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';

  let monaco: typeof Monaco;
  let editor = $state();
  let editorContainer: HTMLElement;

  interface Props {
      text: string
  }
  let {
      text = $bindable('')
  }: Props = $props();

  onMount(async () => {
    // Remove the next two lines to load the monaco editor from a CDN
    // see https://www.npmjs.com/package/@monaco-editor/loader#config
    const monacoEditor = await import('monaco-editor');
    loader.config({ 
      monaco: monacoEditor.default,
    });

    monaco = await loader.init();
    // Your monaco instance is ready, let's display some code!
    editor = monaco.editor.create(
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
    if (!monaco) {
      return
    }
    monaco.editor.getModels().forEach(
      (model) => model.dispose());
  });

  $effect(() => {
    if (!editor) {
      console.log('monaco not loaded')
      return
    }
    editor.setValue(text);
  })
</script>

<div class="container" bind:this={editorContainer} ></div>


<style>
  .container {
    width: 100%;
    height: 100%;
  }
</style>