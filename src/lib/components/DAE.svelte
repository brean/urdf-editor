<script lang="ts">
  import { T, type AsyncWritable, useLoader, useThrelte } from '@threlte/core';
  import { createEventDispatcher, onMount } from 'svelte'
  import { BoxGeometry, Color } from 'three';
  import { ColladaLoader, type Collada } from 'three/examples/jsm/loaders/ColladaLoader';

  export let filename: string;
  // use pink as fallback color
  export let color: Color = new Color('pink');
  export let scale: number[] = [1, 1, 1];
  export let rotation: number[] = [0, 0, 0];
  export let position: number[] = [0, 0, 0];
  export let onclick: () => void;

  const loader = useLoader(ColladaLoader);

  let dae: AsyncWritable<Collada>;
  $: {
    dae = loader.load(filename)
  }
</script>

{#if $dae && $dae.scene.children}
  {@html `<!-- include dae: ${filename} ${scale} -->`}
  
  {#each Object.values($dae.scene.children) as child}
  {@html `<!-- include dae_geom: ${Object.keys(child)} -->`}
  <T.Mesh castShadow receiveShadow scale={scale}
    on:click={onclick}
    position={position} rotation={rotation}>
		<T.MeshLambertMaterial color={color} />
    <T.BoxGeometry></T.BoxGeometry>
	</T.Mesh>
  {/each}
{/if}

