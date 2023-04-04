<script lang="ts">
	import { T } from '@threlte/core'
  import { Quaternion, Vector3 } from 'three';
  import UrdfParser from '../UrdfParser';
  import UrdfJoint from './UrdfJoint.svelte';

  export let filename: string;
  export let position: number[] = [0, 0, 0];
  export let quaternion: number[] | undefined = undefined;

  const parser = new UrdfParser(filename);
  const promise = parser.load()
  
  // the axis in Three are different from urdf
  if (!quaternion) {
    const quat = new Quaternion();
    quat.setFromAxisAngle(new Vector3(-1, 0, 0), Math.PI * 0.5);
    quaternion = [quat.x, quat.y, quat.z, quat.w];
  }

</script>

{#await promise}
  <!-- Loading {filename} -->
{:then elem}
  {@html `<!-- ${filename} -->`}
  <T.Group position={position} quaternion={quaternion}>
    {#each parser.getRootJoints() as joint}
      <UrdfJoint 
        joint={joint}
        parser={parser}
      />
    {/each}
  </T.Group>
{/await}