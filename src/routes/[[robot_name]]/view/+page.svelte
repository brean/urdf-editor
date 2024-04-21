<!-- only view the robot, do not edit it -->
<script lang="ts">
  import { page } from '$app/stores';

  import { onMount } from 'svelte';

  import { Canvas, T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import UrdfThree from '$lib/components/UrdfThree.svelte';
  import ThreeStage from '$lib/components/ThreeStage.svelte';

  import { UrdfParser } from '$lib/UrdfParser';

  import robot_urdf from '$lib/store/robot_urdf';
  import { AppContent } from '@smui/drawer';
  import Grid from '$lib/components/Grid.svelte';

  let innerHeight = 0;
  let innerWidth = 0;

  let prefix = $page.url.href + '/../..';
  const robot_name = $page.params.robot_name;

  const filename = `turtlebot3_description/${robot_name}.xml`;
  const parser = new UrdfParser(`${prefix}/${filename}`, prefix);

  onMount(async () => {
    let promise = parser.load();
    let code = await promise;
    robot_urdf.set(parser.fromString(code));
  });
</script>
<svelte:window
  bind:innerHeight={innerHeight}
  bind:innerWidth={innerWidth} />

<AppContent class="app-content">
  <main class="main-content">
    <Canvas shadows size={{height: innerHeight, width: innerWidth}}
  rendererParameters={{logarithmicDepthBuffer: true}}>

  <T.PointLight color="white" intensity={.2} position={[0, 5, 0]} />
  <T.PointLight color="blue" intensity={0.5} position={[5, 5, 0]} />
  <T.PointLight color="yellow" intensity={0.5} position={[-5, -5, 0]} />

  <T.PerspectiveCamera makeDefault let:ref={camera}
    position={[.6, .6, .6]} fov={25}>
    <OrbitControls enableZoom={true} />
  </T.PerspectiveCamera>

  <ThreeStage preset_name="soft" />
  <Grid />

  {#if $robot_urdf}
    <UrdfThree />
  {/if}
</Canvas>
  </main>
</AppContent>