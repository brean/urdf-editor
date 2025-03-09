<script lang="ts">
  import { urdf_viewer_state } from 'urdf-viewer';
  import Button, { Group, Icon, Label } from '@smui/button';
  import Textfield from '@smui/textfield';
  import { editor_state } from '$lib/state/editor.svelte';

  const tools: {name: 'scale' | 'translate' | 'rotate', icon: string}[] = [
    { name: 'translate', icon: 'north_west' },
    { name: 'rotate', icon: 'sync' },
    { name: 'scale', icon: 'zoom_out_map' }
  ];

  const scaleLabel = {
    'translate': 'snap to grid in meter',
    'rotate': 'rotate in degree Euler angles',
    'scale': 'snap to next size in meter'
  }


  let snapValue = $state(
    urdf_viewer_state.tool == 'translate' ? urdf_viewer_state.translationSnap : 
    (urdf_viewer_state.tool == 'scale' ? urdf_viewer_state.scaleSnap : 
    urdf_viewer_state.rotationSnap
    ));

</script>
<Group style="width: 100%">
  <Button
    class="material-icons"
    variant={'outlined'}
    style="width: 25%"
      onclick={() => {
        urdf_viewer_state.selectedJoint = undefined;
        urdf_viewer_state.selectedLink = undefined;
        editor_state.preview = undefined;
      }}>
        pan_tool_alt
    </Button>
  {#each tools as _tool}
    <Button
      class="material-icons"
      variant={_tool.name == urdf_viewer_state.tool ? 'raised' : 'outlined'}
      style="width: 25%"
      onclick={() => {
        urdf_viewer_state.tool = _tool.name;
        editor_state.preview = undefined;
      }}>
        {_tool.icon}
    </Button>
  {/each}
</Group>

<div style="margin: 10px">
<Textfield
  label={urdf_viewer_state.tool ? scaleLabel[urdf_viewer_state.tool] : ''}
  oninput={() => {
    let value = Number(snapValue);
    if (isNaN(value)) {
      value = 1
    }
    switch (urdf_viewer_state.tool) {
      case 'translate':
        urdf_viewer_state.translationSnap = value;
        return;
      case 'scale':
        urdf_viewer_state.scaleSnap = value;
        return;
      case 'rotate':
        urdf_viewer_state.rotationSnap = value;
        return;
    }
  }}
  style="width: 100%;"
  bind:value={snapValue}
  variant="outlined" />

</div>