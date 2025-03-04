<script lang="ts">
  import List, { Item, PrimaryText, SecondaryText, Text } from "@smui/list";
  import { type IUrdfJoint, type IUrdfLink, getChildJoints, urdf_viewer_state } from "urdf-viewer";
  import SmuiJoint from './SmuiJoint.svelte'

  interface Props {
    joint: IUrdfJoint
    onselectionchange?: (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => void
  }
  
  let {
    joint = $bindable(),
    onselectionchange = undefined
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
    if (onselectionchange) {
      onselectionchange(urdf_viewer_state.selectedLink, link)
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
        <SmuiJoint joint={childJoint} {onselectionchange} />
      {/each}
    </List>
  </Item>
{/if}