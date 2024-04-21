<script lang="ts">
  import { T } from "@threlte/core";
  import type { IUrdfJoint } from "../models/IUrdfJoint";
  import UrdfVisual from "./UrdfVisual.svelte";
  import { TransformControls } from "@threlte/extras";
  import robot_urdf from "$lib/store/robot_urdf";
  import selection from "$lib/store/selection";
  import transform_tool from "$lib/store/transform_tool";
  import { getChildJoints } from "$lib/UrdfParser";

  export let joint: IUrdfJoint;
  export let selectable: boolean;
</script>

{@html `<!-- Joint ${joint.name} -->`}
{#if $robot_urdf}
  <T.Group rotation={joint.origin_rpy} position={joint.origin_xyz}>
    {#each joint.child.visual as visual}
      {#if selectable && $selection == joint.child}
        <TransformControls mode={$transform_tool}>
          <UrdfVisual {visual} link={joint.child} />
        </TransformControls>
      {:else}
        <UrdfVisual {visual} link={joint.child} />
      {/if}
      {#each getChildJoints($robot_urdf, joint.child) as child}
        <svelte:self joint={child} {selectable} />
      {/each}
    {/each}
  </T.Group>
{/if}
