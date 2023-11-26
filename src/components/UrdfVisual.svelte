<script lang="ts">
  import type { IUrdfMesh } from "../models/IUrdfMesh";
  import type { IUrdfVisual } from "../models/IUrdfVisual";
  import { numberArrayToColor } from "../helper";
  import DAE from "./DAE.svelte";
  import STL from "./STL.svelte";
  import { T } from "@threlte/core";
  import { interactivity } from "@threlte/extras";
  import selection from "../store/selection";

  export let visual:IUrdfVisual
  const position = visual.origin_xyz || [0, 0, 0];
  const rotation = visual.origin_rpy || [0, 0, 0];
  const color = numberArrayToColor(visual.color_rgba);
  let scale: number[] = [1, 1, 1];
  let geom: IUrdfMesh;
  
  switch (visual.type) {
    case 'mesh':
      geom = visual.geometry as IUrdfMesh
      scale = geom.scale;
      break;
  }

  const onClick = () => {
    selection.select(visual)
  }

  interactivity();  
</script>

{#if visual.type === 'mesh'}
  {#if geom.type === 'stl'}
    <STL
      onclick={onClick}
      filename={geom.filename}
      position={position}
      rotation={rotation}
      color={color}
      scale={scale} />
  {:else if geom.type === 'dae'}
    <DAE
      onclick={onClick}
      filename={geom.filename}
      position={position}
      rotation={rotation}
      color={color}
      scale={scale} />
  {/if}
{:else}
	<T.Mesh castShadow receiveShadow
      scale={scale}
      on:click={onClick}
      position={position}
      rotation={rotation}>
    {#if visual.type === 'cylinder'}
		  <T.CylinderGeometry />
    {:else if visual.type === 'box'}
      <T.BoxGeometry />
    {/if}
		<T.MeshBasicMaterial color={color} />
	</T.Mesh>
{/if}