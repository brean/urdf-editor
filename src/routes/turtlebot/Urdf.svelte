<script lang="ts">
	import { T } from '@threlte/core'
  import { Quaternion, Vector3 } from 'three';
  import UrdfParser from '../../UrdfParser';

  export let filename: string;
  export let position: Vector3 = new Vector3(0, -1, 0);
  export let quaternion: Quaternion;

  const parser = new UrdfParser(filename);
  const promise = parser.load()
  
  if (!quaternion) {
    quaternion = new Quaternion();
    // the axis in Three are different from urdf
    quaternion.setFromAxisAngle(new Vector3(-1, 0, 0), Math.PI * 0.5);
  }

</script>

{#await promise}
{:then elem}
  <T.Group quaternion={quaternion} position={position}>
    {#each parser.getRootJoints(elem) as joint}
      {joint.name}
    {/each}
  </T.Group>
{/await}