<script lang="ts">
  import List, { Item, Text, PrimaryText, SecondaryText, Graphic } from '@smui/list';
  import robot_urdf from '$lib/store/robot_urdf';
  import type { IUrdfJoint } from '$lib/models/IUrdfJoint';
  
  import selection from '$lib/store/selection';
  import { getChildJoints } from '$lib/UrdfParser';

  export let joint: IUrdfJoint;

  export let expanded = true;
  let childJoints: IUrdfJoint[] = [];

  const toggle = () => {
		expanded = !expanded;
    // TODO: only one action?
    selection.select(joint.child);
	}

  $: {
    if ($robot_urdf) {
      childJoints = getChildJoints($robot_urdf, joint.child);
    }
  }
</script>

<Item on:SMUI:action={toggle} activated={$selection == joint.child}>
  {#if childJoints.length > 0}
  <Graphic class="material-icons">{expanded ? 'folder_open' : 'folder'}</Graphic>
  {:else}
  <Graphic class="material-icons">circle</Graphic>
  {/if}
  <Text class="bigtext">
    <!-- Joint -->
    <PrimaryText>{joint.name}</PrimaryText>
    <!-- Links -->
    <SecondaryText>{joint.parent.name} -&gt; {joint.child.name}</SecondaryText>
  </Text>
</Item>


{#if childJoints.length > 0 && expanded}
  <Item wrapper>
    <List class="sub-list">
      {#each childJoints as childJoint}
        <svelte:self joint={childJoint} />
      {/each}
    </List>
  </Item>
{/if}