<script lang="ts">
  import { T, type AsyncWritable, useLoader } from '@threlte/core';
  import { Color, Mesh } from 'three';
  import { ColladaLoader, type Collada } from 'three/examples/jsm/loaders/ColladaLoader';

  export let filename: string;
  // use pink as fallback color
  export let color: Color = new Color('pink');
  export let scale: number[] = [1, 1, 1];
  export let rotation: number[] = [0, 0, 0];
  export let position: number[] = [0, 0, 0];
  export let onclick: () => void;

  let sceneScale: number[] = [1, 1, 1];
  let scenePosition: number[] = [0, 0, 0];
  let sceneRotation: number[] = [0, 0, 0];
  let sceneUp: number[] = [0, 0, 0];

  let daeScreen: any;

  const loader = useLoader(ColladaLoader);

  let objs: Mesh[] = [];

  let dae: AsyncWritable<Collada> = loader.load(filename);
  dae.subscribe((d: Collada | undefined) => {
    if (!d) {
      return;
    }
    let scene = d.scene
    sceneUp = scene.up.toArray();
    sceneScale = scene.scale.toArray();
    scenePosition = scene.position.toArray();
    sceneRotation = scene.rotation ? scene.rotation.toArray() : sceneRotation;
    sceneUp = scene.up.toArray();
    
    sceneUp[0] *= Math.PI / 2;
    sceneUp[1] *= Math.PI / 2;
    sceneUp[2] *= Math.PI / 2;
    
    console.log(d)
    let _objs: Mesh[] = []
    d.scene.traverse((obj) => {
      if (obj.type === 'Mesh') {
        _objs.push(obj as Mesh);
      }
    })
    objs = _objs;
  });

</script>

{#if objs.length > 0}
  {@html `<!-- include dae: ${filename} ${scale} -->`}
  <T.Group scale={scale} position={position} rotation={rotation} >
    <T.Group rotation={sceneUp}>
      <T.Group scale={sceneScale} position={scenePosition} rotation={sceneRotation}>
        {#each objs as child}
        <T.Mesh castShadow receiveShadow
          geometry={child.geometry}
          scale={child.scale ? child.scale.toArray() : [1, 1, 1]}
          position={child.position ? child.position.toArray() : [0, 0, 0]}
          material={child.material}
          on:click={onclick} >
        </T.Mesh>
        {/each}
      </T.Group>
    </T.Group>
  </T.Group>
{/if}

