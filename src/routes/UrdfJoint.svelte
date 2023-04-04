<script lang="ts">
	import { T } from '@threlte/core'
  import type { IUrdfJoint } from '../models/IUrdfJoint';
  import type UrdfParser from '../UrdfParser';
  import UrdfVisual from './UrdfVisual.svelte';

  export let joint: IUrdfJoint;
  export let parser: UrdfParser;
</script>

{@html `<!-- Joint ${joint.name} -->`}
<T.Group rotation={joint.origin_rpy} position={joint.origin_xyz}>
  {#each joint.child.visual as visual}
    <UrdfVisual visual={visual} />
    {#each parser.getChildJoints(joint.child) as child}
      <svelte:self joint={child} parser={parser} />
    {/each}
  {/each}
</T.Group>