<!-- only view the robot, do not edit it -->
<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  import { Canvas, T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';

  import { Grid, ThreeStage, urdf_viewer_state, UrdfParser, UrdfThree, type IUrdfLink } from 'urdf-viewer';
  import { WebGLRenderer } from 'three';
  import MonacoEditor from '$lib/components/MonacoEditor.svelte';
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import SmuiRobot from '$lib/components/SmuiRobot.svelte';

  let innerHeight = 0;
  let innerWidth = 0;
  let xmlText: string = ''

  let prefix = page.url.href + '/../..';
  const robot_name = page.params.robot_name;

  const filename = `turtlebot3_description/${robot_name}.xml`;
  const parser = new UrdfParser(`${prefix}/${filename}`, prefix);

  let onselectionchange = (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => {
    if (prev) {
      prev.highlight = false;
      prev = prev
    }
    if (next) {
      next.highlight = true;
      next = next
    }
  }

  onMount(async () => {
    let promise = parser.load();
    let code = await promise;
    urdf_viewer_state.edit = true;
    urdf_viewer_state.robot = parser.fromString(code);
    xmlText = parser.getURDFXML() ;
  });
</script>
<svelte:window
  bind:innerHeight
  bind:innerWidth />
<main class="main-content">
  <div class="drawer-container">
    <Drawer>
      <Content>
        <SmuiRobot 
          robot={urdf_viewer_state.robot}
          {onselectionchange}
        ></SmuiRobot>
      </Content>
    </Drawer>

    <AppContent class="app-content">
    <div style:width={innerWidth /2 + 'px'} style:height={innerHeight + 'px'} style:left={innerWidth /2 + 'px'} style:position="fixed" style:top={0} style:background-color="gray">
      <MonacoEditor text={xmlText} />
    </div>
    <div style:width={innerWidth /2 - 260 + 'px'} style:height={innerHeight + 'px'} style:left={'260px'} style:top={0} style:position="fixed">
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
          <UrdfThree {onselectionchange} />
        {/if}
      </Canvas>
    </div>
  </AppContent>
</div>
</main>