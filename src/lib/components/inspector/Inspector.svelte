<script>
  import { urdf_viewer_state } from "urdf-viewer";
  import ToolSelect from "./ToolSelect.svelte";
  import List, { Item, Text } from "@smui/list";
  import TextEdit from "./TextEdit.svelte";
  import NumberInspector from "./NumberInspector.svelte";
  import Button from "@smui/button";

</script>
<ToolSelect />
<List class="inspector-list" nonInteractive>
  {#if urdf_viewer_state.selectedJoint}
    <Item><Text>Joint</Text></Item>
    <TextEdit element={urdf_viewer_state.selectedJoint} />
    <NumberInspector data={urdf_viewer_state.selectedJoint.origin_xyz} />
    <NumberInspector keys={['r', 'p', 'y']} data={urdf_viewer_state.selectedJoint.origin_rpy} />
  {/if}
  {#if urdf_viewer_state.selectedLink}
    <Item><Text>Link</Text></Item>
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
      urdf_viewer_state.selectedLink = urdf_viewer_state.selectedJoint.parent
      urdf_viewer_state.selectedJoint = undefined;
    }}
  >{urdf_viewer_state.selectedJoint.parent.name}</Button>
</Item><Item>
    <Button
    onclick={() => {
      urdf_viewer_state.selectedLink = urdf_viewer_state.selectedJoint.child
      urdf_viewer_state.selectedJoint = undefined;
    }}
  >{urdf_viewer_state.selectedJoint.child.name}</Button>
</Item>
{/if}
</List>