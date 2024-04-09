<script lang="ts">
  import { T, useLoader, useThrelte } from '@threlte/core';
  import { createEventDispatcher } from 'svelte'
  import { BufferGeometry, Color, type NormalBufferAttributes } from 'three';
  import { STLLoader } from 'three/examples/jsm/loaders/STLLoader';

  export let filename: string;
  // use pink as fallback color
  export let color: Color = new Color('pink');
  export let scale: number[] = [1, 1, 1];
  export let rotation: number[] = [1, 1, 1];
  export let position: number[] = [1, 1, 1];
  export let onclick: () => void;

  const dispatch = createEventDispatcher<{
    load: BufferGeometry
    unload: undefined
    error: string
  }>();

  const { invalidate } = useThrelte();

  const loader = useLoader(STLLoader);

  let stl;
  $: {
    stl = loader.load(filename)
  }
</script>

{#if $stl}
  {@html `<!-- include stl: ${filename} ${scale} -->`}
  <T.Mesh castShadow receiveShadow geometry={$stl} scale={scale}
    on:click={onclick}
    position={position} rotation={rotation}>
		<T.MeshLambertMaterial color={color} />
	</T.Mesh>
{/if}

