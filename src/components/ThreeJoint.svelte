<script lang="ts">
  import List, { Item, Text, PrimaryText, SecondaryText, Graphic } from '@smui/list';
  import type { IUrdfJoint } from '../models/IUrdfJoint';
  import type UrdfParser from '../UrdfParser';

  export let parser: UrdfParser;
  export let joint: IUrdfJoint;

  export let expanded = true;
  const childJoints = parser.getChildJoints(joint.child);

  const toggle = () => {
		expanded = !expanded;
	}
</script>

<Item on:SMUI:action={toggle}>
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
        <svelte:self joint={childJoint} parser={parser} />
      {/each}
    </List>
  </Item>
{/if}