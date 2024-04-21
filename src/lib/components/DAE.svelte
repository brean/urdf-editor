<script lang="ts">
  import { T, useLoader, useThrelte } from '@threlte/core';
  import { createEventDispatcher } from 'svelte'
  import { Color } from 'three';
  import { ColladaLoader, type Collada } from 'three/examples/jsm/loaders/ColladaLoader';

  export let filename: string;
  // use pink as fallback color
  export let color: Color = new Color('pink');
  export let scale: number[] = [1, 1, 1];
  export let rotation: number[] = [1, 1, 1];
  export let position: number[] = [1, 1, 1];
  export let onclick: () => void;

  const dispatch = createEventDispatcher<{
    load: Collada
    unload: undefined
    error: string
  }>();

  const { invalidate } = useThrelte();

  const loader = useLoader(ColladaLoader);

  let dae;
  $: {
    dae = loader.load(filename)
  }
</script>

{#if $dae}
  {@html `<!-- include stl: ${filename} ${scale} -->`}
  <T.Mesh castShadow receiveShadow geometry={$dae} scale={scale}
    on:click={onclick}
    position={position} rotation={rotation}>
		<T.MeshLambertMaterial color={color} />
	</T.Mesh>
{/if}

