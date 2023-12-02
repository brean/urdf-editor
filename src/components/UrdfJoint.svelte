<script lang="ts">
  import AutoAdjust from '@smui/top-app-bar/src/AutoAdjust.svelte';

	import { T } from '@threlte/core'
  import type { IUrdfJoint } from '../models/IUrdfJoint';
  import UrdfVisual from './UrdfVisual.svelte';
  import { TransformControls } from '@threlte/extras';
  import robot_urdf from '../store/robot_urdf';
  import selection from '../store/selection';
  import transform_tool from '../store/transform_tool';
  import { getChildJoints } from '../UrdfParser';


  export let joint: IUrdfJoint;
</script>

{@html `<!-- Joint ${joint.name} -->`}
{#if $robot_urdf}
  <T.Group rotation={joint.origin_rpy} position={joint.origin_xyz}>
    {#each joint.child.visual as visual}
      {#if $selection == joint.child}
      <TransformControls mode={$transform_tool}>
        <UrdfVisual visual={visual} link={joint.child} />
      </TransformControls>
      {:else}
      <UrdfVisual visual={visual} link={joint.child} />
      {/if}
      {#each getChildJoints($robot_urdf, joint.child) as child}
        <svelte:self joint={child} />
      {/each}
    {/each}
  </T.Group>
{/if}