<!-- only view the robot, do not edit it -->
<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  import { Canvas, T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';

  import { AppContent } from '@smui/drawer';
  import { Grid, ThreeStage, urdf_viewer_state, UrdfParser, UrdfThree } from 'urdf-viewer';
  import { WebGLRenderer } from 'three';

  let innerHeight = 0;
  let innerWidth = 0;

  let prefix = page.url.href + '/../..';
  const robot_name = page.params.robot_name;

  const filename = `turtlebot3_description/${robot_name}.xml`;
  const parser = new UrdfParser(`${prefix}/${filename}`, prefix);

  onMount(async () => {
    let promise = parser.load();
    let code = await promise;
    urdf_viewer_state.robot = parser.fromString(code);
  });
</script>
<svelte:window
  bind:innerHeight
  bind:innerWidth />
<main class="main-content">
  <div style:width={innerWidth - 250 + 'px'} style:height={innerHeight + 'px'}>
    <Canvas
    createRenderer={(canvas) => {
      return new WebGLRenderer({
        canvas,
        alpha: true,
        powerPreference: 'high-performance',
        logarithmicDepthBuffer: true
      })}}
      shadows>

      <T.PointLight color="white" intensity={.2} position={[0, 5, 0]} />
      <T.PointLight color="blue" intensity={0.5} position={[5, 5, 0]} />
      <T.PointLight color="yellow" intensity={0.5} position={[-5, -5, 0]} />

      <T.PerspectiveCamera
        makeDefault
        position={[.6, .6, .6]} fov={25}>
        <OrbitControls enableZoom={true} />
      </T.PerspectiveCamera>
  
      <ThreeStage preset_name="soft" />
      <Grid />

      {#if urdf_viewer_state.robot}
        <UrdfThree></UrdfThree>
      {/if}
    </Canvas>
  </div>
</main>