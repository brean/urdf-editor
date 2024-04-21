<!-- a visual URDF element -->
<script lang="ts">
  import type { IUrdfMesh } from "../models/IUrdfMesh";
  import type { IUrdfVisual } from "$lib/models/IUrdfVisual";
  import { numberArrayToColor } from "$lib/helper";
  import DAE from "./DAE.svelte";
  import STL from "./STL.svelte";
  import { T } from "@threlte/core";
  import { interactivity } from "@threlte/extras";
  import selection from "$lib/store/selection";
    import type { IUrdfLink } from "$lib/models/IUrdfLink";
  import type { IUrdfCylinder } from "$lib/models/IUrdfCylinder";
  import type { IUrdfBox } from "$lib/models/IUrdfBox";

  export let visual:IUrdfVisual;
  export let link: IUrdfLink;
  let cylinder: IUrdfCylinder;
  let box: IUrdfBox;

  const position = visual.origin_xyz || [0, 0, 0];
  const rotation = visual.origin_rpy || [0, 0, 0];
  const color = numberArrayToColor(visual.color_rgba);
  let scale: number[] = [1, 1, 1];
  let mesh: IUrdfMesh;
  
  switch (visual.type) {
    case 'mesh':
      mesh = visual.geometry as IUrdfMesh
      scale = mesh.scale;
      break;
    case 'box':
      box = visual.geometry as IUrdfBox
      break
    case 'cylinder':
      cylinder = visual.geometry as IUrdfCylinder;
      break
  }

  const onClick = () => {
    selection.select(link)
  }

  interactivity();  
</script>

{#if visual.type === 'mesh' && mesh}
  {#if mesh.type === 'stl'}
    <STL
      onclick={onClick}
      filename={mesh.filename}
      position={position}
      rotation={rotation}
      color={color}
      scale={scale} />
  {:else if mesh.type === 'dae'}
    <DAE
      onclick={onClick}
      filename={mesh.filename}
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
      <!-- cylinder are rotated 90° in Three compared to urdf -->
		  <T.CylinderGeometry 
        args={[cylinder.radius, cylinder.radius, cylinder.length]}  
       />
    {:else if visual.type === 'box'}
      <T.BoxGeometry />
    {/if}
		<T.MeshBasicMaterial color={color} />
	</T.Mesh>
{/if}