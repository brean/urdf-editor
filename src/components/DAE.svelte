<script lang="ts">
  import { T, useLoader, useThrelte } from '@threlte/core';
  import { createEventDispatcher } from 'svelte'
  import { BufferGeometry, Color } from 'three';
  import { ColladaLoader, type Collada } from 'three/examples/jsm/loaders/ColladaLoader';

  export let filename: string;
  // use pink as fallback color
  export let color: Color = new Color('pink');
  export let scale: number[] = [1, 1, 1];
  export let rotation: number[] = [1, 1, 1];
  export let position: number[] = [1, 1, 1];


  const dispatch = createEventDispatcher<{
    load: Collada
    unload: undefined
    error: string
  }>();

  const { invalidate } = useThrelte();

  const loader = useLoader(ColladaLoader, () => new ColladaLoader());

  let geometry: BufferGeometry | undefined = undefined;
  const onLoad = (collada: Collada) => {
    if (geometry) {
      dispatch('unload');
    }
    // TODO: show collada-scene
    // geometry = collada.scene.children[0];
    invalidate('Collada: model loaded');
    dispatch('load', collada);
  }

  const onError = (e: ErrorEvent) => {
    console.error(e);
    dispatch('error');
  }


  $: loader.load(filename, onLoad, undefined, onError)
</script>

{#if geometry}
  {@html `<!-- include stl: ${filename} ${scale} -->`}
  <T.Mesh castShadow receiveShadow geometry={geometry} scale={scale}
    position={position} rotation={rotation}>
		<T.MeshLambertMaterial color={color} />
	</T.Mesh>
{/if}

