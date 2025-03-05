<!-- only view the robot, do not edit it -->
<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  import { Canvas, T } from '@threlte/core';
  import { Gizmo, OrbitControls, Grid } from '@threlte/extras';

  import { ThreeStage, urdf_viewer_state, UrdfParser, UrdfThree, type IUrdfJoint, type IUrdfLink } from 'urdf-viewer';
  import { WebGLRenderer } from 'three';
  import MonacoEditor from '$lib/components/MonacoEditor.svelte';
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import SmuiRobot from '$lib/components/SmuiRobot.svelte';
  
  import { Pane, Splitpanes } from 'svelte-splitpanes';
  import Inspector from '$lib/components/inspector/Inspector.svelte';

  let innerHeight = $state(0);
  let innerWidth = $state(0);
  let xmlText: string = $state('')

  const prefix = page.url.href + '/../..';
  const robot_name = page.params.robot_name;

  const filename = `turtlebot3_description/${robot_name}.xml`;
  const parser = new UrdfParser(`${prefix}/${filename}`, prefix);

  const ondatachange = (e: any) => {
    xmlText = parser.getURDFXML();
    console.log(xmlText);
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
      ></SmuiRobot>
    </div>
  </Pane>
  <Pane size={15}>
    <div style:background-color="black" style:height={innerHeight + 'px'}>
      <Inspector />
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
        <UrdfThree {ondatachange} />
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