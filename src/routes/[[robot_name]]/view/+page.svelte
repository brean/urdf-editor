<!-- only view the robot, do not edit it -->
<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  import { Canvas, T } from '@threlte/core';
  import { OrbitControls, Grid, Gizmo } from '@threlte/extras';

  import { ThreeStage, urdf_viewer_state, UrdfParser, UrdfThree, type IUrdfLink } from 'urdf-viewer';
  import { WebGLRenderer } from 'three';

  let innerHeight = $state(0);
  let innerWidth = $state(0);

  let prefix = page.url.href + '/../..';
  const robot_name = page.params.robot_name;

  const filename = `turtlebot3_description/${robot_name}.xml`;
  const parser = new UrdfParser(`${prefix}/${filename}`, prefix);

  onMount(async () => {
    let promise = parser.load();
    let code = await promise;
    urdf_viewer_state.robot = parser.fromString(code);
  });

  $effect(() => {
  })

</script>
<svelte:window
  bind:innerHeight
  bind:innerWidth />
<main class="main-content">
  <div style:width={innerWidth + 'px'} style:height={innerHeight + 'px'}>
    <Canvas
    createRenderer={(canvas) => {
      return new WebGLRenderer({
        canvas,
        alpha: true,
        powerPreference: 'high-performance',
        logarithmicDepthBuffer: true
      })}}
      shadows>

      <T.Group rotation={[-Math.PI/2, 0, 0]}>
        <T.HemisphereLight
          skycolor={0xB1E1FF}
          groundColor={0xB97A20}
          intensity={.2}
        ></T.HemisphereLight>

        <Grid cellSize={0.1} />
      </T.Group>


      <T.PerspectiveCamera
        makeDefault
        up={[0, 0, 1]}
        forward={[1, 0, 0]}
        eulerOrder={"XZY"}
        position={[.6, .6, .6]} fov={25}>
        <OrbitControls
          enableZoom>
          <Gizmo />
        </OrbitControls>
      </T.PerspectiveCamera>
  
      <ThreeStage preset_name="soft" />

      {#if urdf_viewer_state.robot}
        <UrdfThree />
      {/if}
    </Canvas>
  </div>
</main>