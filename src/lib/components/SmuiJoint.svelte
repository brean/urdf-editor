<script lang="ts">
  import List, { Item, PrimaryText, SecondaryText, Text } from "@smui/list";
  import { type IUrdfJoint, type IUrdfLink, getChildJoints, urdf_viewer_state } from "urdf-viewer";
  import SmuiJoint from './SmuiJoint.svelte'

  interface Props {
    joint: IUrdfJoint
  }
  
  let {
    joint = $bindable(),
  }: Props = $props();
  let childJoints: IUrdfJoint[] = $state([]);

  $effect(() => {
    if (urdf_viewer_state.robot) {
      childJoints = getChildJoints(urdf_viewer_state.robot, joint?.child)
    }
  });
</script>

<Item onSMUIAction={() => {
    const link = joint?.child;
    if (!link) {
      return
    }
    urdf_viewer_state.selectedJoint = joint
    urdf_viewer_state.selectedLink = undefined
  }}
  selected={
    urdf_viewer_state.selectedJoint == joint || 
    urdf_viewer_state.selectedLink == joint.child
  }>
  <Text class="bigtext">
    <!-- Joint -->
    <PrimaryText>{joint.name}</PrimaryText>
    <!-- Links -->
    <SecondaryText>{joint.parent.name} -&gt; {joint.child.name}</SecondaryText>
  </Text>
</Item>


{#if childJoints.length > 0}
  <Item wrapper>
    <List class="sub-list">
      {#each childJoints as childJoint}
        <SmuiJoint joint={childJoint} />
      {/each}
    </List>
  </Item>
{/if}