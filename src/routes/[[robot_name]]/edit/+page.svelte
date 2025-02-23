<!-- only view the robot, do not edit it -->
<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  import { Canvas, T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';

  import { Grid, ThreeStage, urdf_viewer_state, UrdfParser, UrdfThree, type IUrdfJoint, type IUrdfLink } from 'urdf-viewer';
  import { WebGLRenderer } from 'three';
  import MonacoEditor from '$lib/components/MonacoEditor.svelte';
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import SmuiRobot from '$lib/components/SmuiRobot.svelte';
  
  import { Pane, Splitpanes } from 'svelte-splitpanes';

  let innerHeight = $state(0);
  let innerWidth = $state(0);
  let xmlText: string = $state('')

  const prefix = page.url.href + '/../..';
  const robot_name = page.params.robot_name;

  const filename = `turtlebot3_description/${robot_name}.xml`;
  const parser = new UrdfParser(`${prefix}/${filename}`, prefix);

  const onselectionchange = (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => {
    if (prev) {
      prev.highlight = false;
      prev = prev
    }
    if (next) {
      next.highlight = true;
      next = next
    }
  }

  const onchange = (joint: IUrdfJoint) => {
    xmlText = parser.getURDFXML();
  }

  onMount(async () => {
    let promise = parser.load();
    let code = await promise;
    urdf_viewer_state.edit = true;
    urdf_viewer_state.robot = parser.fromString(code);
    xmlText = parser.getURDFXML();
  });
</script>
<svelte:window
  bind:innerHeight
  bind:innerWidth />

<Splitpanes style={'width: ' + innerWidth + 'px; height: ' + innerHeight + 'px'}>
  <Pane size={15}>
    <div style:background-color="black" style:height={innerHeight + 'px'}>
      <SmuiRobot 
        robot={urdf_viewer_state.robot}
        {onselectionchange}
      ></SmuiRobot>
    </div>
  </Pane>
  <Pane size={15}>
    <div style:background-color="black" style:height={innerHeight + 'px'}>
      TODO: Inspector
    </div>
  </Pane>
  <Pane>
    <div style:background-color="black" style:height={innerHeight + 'px'}>
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
        <UrdfThree {onselectionchange} {onchange} />
      {/if}
    </Canvas>
    </div>
  </Pane>
  <Pane>
    <div style:background-color="black" style:height={innerHeight + 'px'}>
      <MonacoEditor bind:text={xmlText} />
    </div>
  </Pane>
</Splitpanes>

<style global>
  .splitpanes.default-theme .splitpanes__splitter {
    background-color: #4a4a4a !important;
  }
</style>