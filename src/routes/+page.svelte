<script lang="ts">
  import { page } from '$app/stores';

  import { onMount } from 'svelte';
  import type monaco from 'monaco-editor';
  import editorWorker from 'monaco-editor/esm/vs/editor/editor.worker?worker';

  import TopAppBar, { Row, Title, Section } from '@smui/top-app-bar';
  import Drawer, { AppContent, Content } from '@smui/drawer';
  import IconButton from '@smui/icon-button';
  import Fab, { Icon } from '@smui/fab';
  import Menu from '@smui/menu';
  import List, {
    Item,
    Separator,
    Text,
    Graphic,
  } from '@smui/list';

  import { Canvas, T } from '@threlte/core';
  import { OrbitControls } from '@threlte/extras';
  import UrdfThree from '../components/UrdfThree.svelte';
  import ThreeStage from '../components/ThreeStage.svelte';
  
  import Grid from '../components/Grid.svelte';

  import UrdfParser from '../UrdfParser';
  import type { IUrdfRobot } from '../models/IUrdfRobot';
  import TreeRobot from '../components/TreeRobot.svelte';
  import robot_urdf from '../store/robot_urdf';

  let prefix = $page.url.href;

  const filename = '/turtlebot3_description/turtlebot3_burger.xml';
  const parser = new UrdfParser(`${prefix}/${filename}`, prefix);

  let innerHeight = 0;
  let innerWidth = 0;
  const drawerWidth = 256;

  let Monaco;
  let divEl: HTMLDivElement;
  let editor: monaco.editor.IStandaloneCodeEditor;

  let menu: Menu;

  onMount(async () => {
    let promise = parser.load();
    let code = await promise;
    robot_urdf.set(parser.fromString(code));

    // @ts-ignore
    self.MonacoEnvironment = {
      getWorker: function (_moduleId: any) {
        return new editorWorker();
      }
    };

    Monaco = await import('monaco-editor');
    editor = Monaco.editor.create(divEl, {
      value: parser.getURDFXML(),
      language: 'xml',
      theme: 'vs-dark',
      minimap: { enabled: false },
      automaticLayout: true,
      scrollBeyondLastLine: false
    });

    // editor.getModel()?.onDidChangeContent(() => {
    //   let txt = editor.getValue();
    //   robot = parser.fromString(txt);
    // });

    return () => {
      editor.dispose();
    };
  });

</script>

<svelte:window
  bind:innerHeight={innerHeight}
  bind:innerWidth={innerWidth} />

<AppContent class="app-content">
  <main class="main-content">
    <TopAppBar
      dense
      variant="static"
      color={'secondary'}
    >
      <Row>
        <Section>
          {#if $robot_urdf}
          <Title>{$robot_urdf.name}</Title>
          {:else}
          <Title>Unnamed Robot</Title>
          {/if}
        </Section>

        <Section align="end" toolbar>
          <!-- TODO: show menu to switch between transform control modes ('translate' | 'rotate' | 'scale';), open_with, cached,zoom_out_map  -->
          <IconButton class="material-icons" aria-label="Download">
            open_with
          </IconButton>
          <!-- TODO: open and add new URDF -->
          <IconButton class="material-icons" aria-label="Download">
            folder
          </IconButton>
          <!-- TODO: settings dialog, configure mesh path -->
          <IconButton class="material-icons" aria-label="Download">
            settings
          </IconButton>
          <!-- TODO: download URDF -->
          <IconButton class="material-icons" aria-label="Download">
            file_download
          </IconButton>
        </Section>
      </Row>
    </TopAppBar>

    <div class="drawer-container">
      <Drawer>
        <Content>
          {#if $robot_urdf}
            {@html `<!-- ${filename} -->`}  
            <TreeRobot parser={parser} />
          {/if}
        </Content>
      </Drawer>
      <div style="position: relative; left: 0;">
      <Canvas shadows size={{height: innerHeight-50, width: (innerWidth/2)-(drawerWidth)-2}}
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
          <UrdfThree parser={parser} />
        {/if}
      </Canvas>
      </div>

      <div style="position: absolute; width: 50%; float: right; top: 4px; right: 60px;">
        <div class="flexy">
          <Fab on:click={() => menu.setOpen(true)}>
            <Icon class="material-icons">add</Icon>
          </Fab>
        </div>
        <Menu
          style={'max-height: 200px'}
          anchorCorner={"BOTTOM_LEFT"}
          bind:this={menu}
        >
          <List>
            <Item>
              <Graphic class="material-icons">square</Graphic>
              <Text>
                Box
              </Text>
            </Item>
            <Item>
              <Graphic class="material-icons">circle</Graphic>
              <Text>
                Cylinder
              </Text>
            </Item>
            <Separator />
            <Item>
              <Graphic class="material-icons">settings_suggest</Graphic>
              <Text>
                Mesh
              </Text>
            </Item>
          </List>
        </Menu>
      </div>
      <div bind:this={divEl} class="me" />
    </div>

  </main>
</AppContent>

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