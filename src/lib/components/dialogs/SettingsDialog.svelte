<script lang="ts">
  import Dialog, { Title, Content, Actions } from '@smui/dialog';
  import Button, { Label } from '@smui/button';
  import Switch from '@smui/switch';
  import FormField from '@smui/form-field';
  import { urdf_viewer_state } from 'urdf-viewer';
  import Slider from '@smui/slider';

  let {
    open = $bindable(false)
  }: {
    open: boolean
  } = $props();
</script>

<Dialog
  bind:open
  aria-labelledby="delete-title"
  aria-describedby="delete-content"
>
  <!-- Title cannot contain leading whitespace due to mdc-typography-baseline-top() -->
  <Title id="delete-title">Settings</Title>
  <Content id="delete-content">
    <FormField>
      <Switch bind:checked={urdf_viewer_state.visual} />
      {#snippet label()}
        Visual
      {/snippet}
    </FormField><br />

    <FormField>
      <Switch bind:checked={urdf_viewer_state.collision} />
      {#snippet label()}
      Collision
      {/snippet}
    </FormField><br />

    <FormField>
      <Switch bind:checked={urdf_viewer_state.linkNames} />
      {#snippet label()}
      Link Names
      {/snippet}
    </FormField><br />

    <FormField>
      <Switch bind:checked={urdf_viewer_state.jointNames} />
      {#snippet label()}
      Joint Names
      {/snippet}
    </FormField><br />

    <FormField align="end" style="display: flex;">
      <Slider
        style="flex-grow: 1;"
        bind:value={urdf_viewer_state.visualOpacity}
        min={0.1}
        max={1.0}
        step={0.1}
        discrete
      />
      {#snippet label()}
        Visual Opacity
      {/snippet}
    </FormField><br />

    <FormField align="end" style="display: flex;">
      <Slider
        style="flex-grow: 1;"
        bind:value={urdf_viewer_state.collisionOpacity}
        min={0.1}
        max={1.0}
        step={0.1}
        discrete
      />
      {#snippet label()}
        Collision Opacity
      {/snippet}
    </FormField><br />

    <input
      id="_urdf_jointcolor"
      bind:value={urdf_viewer_state.jointColor}
      type="color" />
    <label for="_urdf_jointcolor">Joint color</label><br />

    <input
      id="_urdf_linkcolor"
      bind:value={urdf_viewer_state.linkColor}
      type="color" />
    <label for="_urdf_linkcolor">Link color</label><br />
    
    <input
      id="_urdf_jointindicolor"
      bind:value={urdf_viewer_state.jointIndicatorColor}
      type="color" />
    <label for="_urdf_jointindicolor">Joint indicator color</label><br />

    <input
      id="_urdf_highlightcolor"
      bind:value={urdf_viewer_state.highlightColor}
      type="color" />
    <label for="_urdf_highlightcolor">Highlight color</label><br />

    <input
      id="_urdf_collisioncolor"
      bind:value={urdf_viewer_state.collisionColor}
      type="color" />
    <label for="_urdf_collisioncolor">Collision color</label><br />

    <input
      id="_urdf_bgcolor"
      bind:value={urdf_viewer_state.backgroundColor}
      type="color" />
    <label for="_urdf_bgcolor">Background color</label><br />

  </Content>
  <Actions>
    <Button>
      <Label>Close</Label>
    </Button>
  </Actions>
</Dialog>
