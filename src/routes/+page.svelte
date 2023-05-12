<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';

  import { Canvas, OrbitControls, T } from '@threlte/core'
  import UrdfThree from '../components/UrdfThree.svelte';
  import ThreeStage from '../components/ThreeStage.svelte';
  import Grid from '../components/Grid.svelte';
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import List, { Item, Text } from '@smui/list';

  import UrdfParser from '../UrdfParser';
  import type { IUrdfRobot } from '../models/IUrdfRobot';
  import TreeRobot from '../components/TreeRobot.svelte';

  let prefix = $page.url.href;

  const filename = '/turtlebot3_description/turtlebot3_burger.xml';
  const parser = new UrdfParser(`${prefix}/${filename}`, prefix);
  let promise: Promise<IUrdfRobot> | undefined;
  onMount(() => {
    promise = parser.load()
  })

  let innerHeight = 0;
  let innerWidth = 0;
  const drawerWidth = 256;
</script>

<svelte:window
  bind:innerHeight={innerHeight}
  bind:innerWidth={innerWidth} />

<div class="drawer-container">
  <Drawer>
    <Content>
      <List>
        <!-- TODO: load urdf -->
        {#await promise}
          {@html `<!-- loading ${filename} -->`}
        {:then elem}
          {@html `<!-- ${filename} -->`}
          <TreeRobot parser={parser} />
        {/await}
      </List>
    </Content>
  </Drawer>

  <AppContent class="app-content">
    <main class="main-content">
      <Canvas shadows size={{height: innerHeight-2, width: innerWidth-drawerWidth-2}}
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

        {#await promise}
          {@html `<!-- loading ${filename} -->`}
        {:then elem}
          {@html `<!-- ${filename} -->`}
          <UrdfThree parser={parser} />
        {/await}
      </Canvas>
    </main>
  </AppContent>
</div>

<style>
  /* These classes are only needed because the
    drawer is in a container on the page. */
  .drawer-container {
    position: relative;
    display: flex;
    height: 100%;
    max-width: 100%;
    border: 1px solid
      var(--mdc-theme-text-hint-on-background, rgba(0, 0, 0, 0.1));
    overflow: hidden;
    z-index: 0;
  }

  * :global(.app-content) {
    flex: auto;
    overflow: auto;
    position: relative;
    flex-grow: 1;
  }

  .main-content {
    overflow: hidden;
    height: 100%;
    width: 100%;
    box-sizing: border-box;
  }
</style>
<!-- TODO: drawer -->