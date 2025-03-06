<script lang="ts">
  import { urdf_viewer_state } from "urdf-viewer";
  import ToolSelect from "./ToolSelect.svelte";
  import List, { Item, Label, Text, Meta } from "@smui/list";
  import TextEdit from "./TextEdit.svelte";
  import NumberInspector from "./NumberInspector.svelte";
  import Button, { Icon } from "@smui/button";
  import IconButton from "@smui/icon-button";

  interface Props {
    ondatachange?: (e: any) => void
  }

  let {
    ondatachange = undefined
  }: Props = $props();
  let open = $state(false);

  function deleteSelectedJoint() {
    // we should also delete the connected child link?!
    const joint = urdf_viewer_state.selectedJoint;
    if (!joint) {
      return joint;
    }
    joint.elem.parentElement?.removeChild(
      joint.elem
    )
    ondatachange(undefined);

    urdf_viewer_state.selectedJoint = undefined;
    // TODO: reload xml from parser
  }
</script>
<ToolSelect />



<List class="inspector-list" nonInteractive>
  <Item>
    <Button
      onclick={() => {
        open = !open;
      }}
      style="width: 100%; text-transform: none;"
      variant={"outlined"}>
    <Icon class="material-icons">add</Icon>
    <Label>Add Joint</Label>
    <!-- create a new joint where this link is the parent -->
  </Button>
  </Item>
  {#if urdf_viewer_state.robot && !urdf_viewer_state.selectedJoint && !urdf_viewer_state.selectedLink}
    <Item><Text>Robot</Text></Item>
    <TextEdit
      element={urdf_viewer_state.robot}
      oninput={() => {
        if (!urdf_viewer_state.robot || !urdf_viewer_state.robot.elem) {
          return;
        }
        urdf_viewer_state.robot.elem.setAttribute(
          'name', urdf_viewer_state.robot.name);
        if (ondatachange) {
          ondatachange()
        };
      }} />
  {/if}
  {#if urdf_viewer_state.selectedJoint}
    <Item>
      <Text>Joint</Text>
      <Meta>
        <IconButton
          onclick={deleteSelectedJoint}
          class="material-icons">delete</IconButton>
      </Meta>
    </Item>
    <TextEdit element={urdf_viewer_state.selectedJoint} />
    <NumberInspector data={urdf_viewer_state.selectedJoint.origin_xyz} />
    <NumberInspector keys={['r', 'p', 'y']} data={urdf_viewer_state.selectedJoint.origin_rpy} />
  {/if}
  {#if urdf_viewer_state.selectedLink}
    <Item>
      <Text>Link</Text>
    </Item>
    <TextEdit element={urdf_viewer_state.selectedLink} />
    {#if urdf_viewer_state.selectedLink.visual}
      <Item><Text>Visuals</Text></Item>
      {#each urdf_viewer_state.selectedLink.visual as visual}
        <Item><Text>{visual.type}</Text></Item>
        <NumberInspector data={visual.origin_xyz} />
        <NumberInspector keys={['r', 'p', 'y']} data={visual.origin_rpy} />
      {/each}
  {/if}
  {#if urdf_viewer_state.selectedLink.collision}
    <Item><Text>Collisions</Text></Item>
    {#each urdf_viewer_state.selectedLink.collision as visual}
      <Item><Text>{visual.type}</Text></Item>
      <NumberInspector data={visual.origin_xyz} />
      <NumberInspector keys={['r', 'p', 'y']} data={visual.origin_rpy} />
    {/each}
  
  {/if}
{/if}

{#if urdf_viewer_state.selectedJoint}
<Item>
  <Button
    onclick={() => {
      if (urdf_viewer_state.selectedJoint) {
        urdf_viewer_state.selectedLink = urdf_viewer_state.selectedJoint.parent;
      }
      urdf_viewer_state.selectedJoint = undefined;
    }}
  >{urdf_viewer_state.selectedJoint.parent.name}</Button>
</Item>
<Item>
  <Button
    onclick={() => {
      if (urdf_viewer_state.selectedJoint) {
        urdf_viewer_state.selectedLink = urdf_viewer_state.selectedJoint.child;
      }
      urdf_viewer_state.selectedJoint = undefined;
    }}
  >{urdf_viewer_state.selectedJoint.child.name}</Button>
</Item>
{/if}
</List>