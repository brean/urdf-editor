<!-- only view the robot, do not edit it -->
<script lang="ts">
  import { page } from '$app/state';
  import { onMount } from 'svelte';

  import { Canvas, T } from '@threlte/core';
  import { Gizmo, OrbitControls, Grid } from '@threlte/extras';

  import { ThreeStage, urdf_viewer_state, UrdfParser, UrdfThree } from 'urdf-viewer';
  import { WebGLRenderer } from 'three';
  import MonacoEditor from '$lib/components/MonacoEditor.svelte';
  import SmuiRobot from '$lib/components/SmuiRobot.svelte';
  
  import { Pane, Splitpanes } from 'svelte-splitpanes';
  import Inspector from '$lib/components/inspector/Inspector.svelte';
  import DeleteDialog from '$lib/components/dialogs/DeleteDialog.svelte';
  import SettingsDialog from '$lib/components/dialogs/SettingsDialog.svelte';
  import Fab, { Icon as FabIcon } from '@smui/fab';

  let innerHeight = $state(0);
  let innerWidth = $state(0);
  let xmlText: string = $state('')
  let confirmDelete = $state(false);
  let settingsDialog = $state(false);

  const prefix = page.url.href + '/../..';
  const robot_name = page.params.robot_name;

  const filename = `turtlebot3_description/${robot_name}.xml`;
  const parser = new UrdfParser(`${prefix}/${filename}`, prefix);

  const resetRobot = (e: any) => {
    parser.fromString(
      '<?xml version="1.0" ?>\n<robot name="my robot">\n</robot>')
    xmlText = parser.getURDFXML();
    parser.reset()
    urdf_viewer_state.robot = parser.robot;
    urdf_viewer_state.selectedJoint = undefined;
    urdf_viewer_state.selectedLink = undefined;
  }

  const ondatachange = (e: any) => {
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
      ></SmuiRobot>
    </div>
  </Pane>
  <Pane size={15}>
    <div style:background-color="black" style:height={innerHeight + 'px'}>
      <Inspector />
    </div>
  </Pane>
  <Pane>
    <div style:background-color={urdf_viewer_state.backgroundColor} style:height={innerHeight + 'px'}>
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

<DeleteDialog
  bind:open={confirmDelete}
  ondatachange={resetRobot} />
<SettingsDialog
  bind:open={settingsDialog} />

<div class="fab-button">
  <Fab color={"primary"} onclick={() => {confirmDelete = true;}}>
    <FabIcon class="material-icons">delete</FabIcon>
  </Fab>
  <Fab onclick={() => {settingsDialog = true;}}>
    <FabIcon class="material-icons">settings</FabIcon>
  </Fab>
</div>

<style global>
  .splitpanes.default-theme .splitpanes__splitter {
    background-color: #4a4a4a !important;
  }

  .fab-button {
		position: absolute;
		right: 20px;
		bottom: 20px;
		z-index: 1000;
	}
</style>