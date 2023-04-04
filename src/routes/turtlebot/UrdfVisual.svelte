<script lang="ts">
  import { Material, MeshLambertMaterial, Vector3 } from "three";
  import { T } from '@threlte/core';
  import type { IUrdfMesh } from "../../models/IUrdfMesh";
  import type { IUrdfVisual } from "../../models/IUrdfVisual";
  import UrdfStl from "./UrdfStl.svelte";
  import { numberArrayToColor } from "../../helper";

  export let visual:IUrdfVisual
  const pos = visual.origin_xyz || [0, 0, 0];
  const rot = visual.origin_rpy || [0, 0, 0];
  const color = numberArrayToColor(visual.color_rgba);
  let scale: number[] = [1, 1, 1];
  let geom: IUrdfMesh;
  
  switch (visual.type) {
    case 'mesh':
      geom = visual.geometry as IUrdfMesh
      scale = geom.scale;
      break;
  }
  
</script>

{#if visual.type === 'mesh'}
  {#if geom.type === 'stl'}
    <UrdfStl
      filename={geom.filename}
      color={color}
      scale={scale} />
  {:else}
    <!-- else content here -->
  {/if}
{/if}