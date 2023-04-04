<script lang="ts">
	import { T } from '@threlte/core'
  import type { Euler, Vector3 } from 'three';
  import { numberArrayToEuler, numberArrayToVector3 } from '../../helper';
  import type { IUrdfJoint } from '../../models/IUrdfJoint';
  import UrdfVisual from './UrdfVisual.svelte';

  export let joint: IUrdfJoint;
  let position: Vector3 = numberArrayToVector3(joint.origin_xyz);
  let euler: Euler = numberArrayToEuler(joint.origin_rpy);
</script>

{@html `<!-- Joint ${joint.name}  -->`}
<!-- <T.Group rotation={euler} position={position}> -->
  {#each joint.child.visual as visual}
    <UrdfVisual visual={visual} />  
  {/each}
<!-- </T.Group> -->