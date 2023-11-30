<script lang="ts">
  import AutoAdjust from '@smui/top-app-bar/src/AutoAdjust.svelte';

	import { T } from '@threlte/core'
  import type { IUrdfJoint } from '../models/IUrdfJoint';
  import type UrdfParser from '../UrdfParser';
  import UrdfVisual from './UrdfVisual.svelte';
  import { TransformControls } from '@threlte/extras';

  import selection from '../store/selection';
  import transform_tool from '../store/transform_tool';


  export let joint: IUrdfJoint;
  export let parser: UrdfParser;
</script>

{@html `<!-- Joint ${joint.name} -->`}
<T.Group rotation={joint.origin_rpy} position={joint.origin_xyz}>
  {#each joint.child.visual as visual}
    {#if $selection == joint.child}
    <TransformControls mode={$transform_tool}>
      <UrdfVisual visual={visual} link={joint.child} />
    </TransformControls>
    {:else}
    <UrdfVisual visual={visual} link={joint.child} />
    {/if}
    {#each parser.getChildJoints(joint.child) as child}
      <svelte:self joint={child} parser={parser} />
    {/each}
  {/each}
</T.Group>