<script lang="ts">
  import List, { Item, Text, Graphic } from '@smui/list';
  import type UrdfParser from '../UrdfParser';
  import ThreeJoint from './ThreeJoint.svelte';

  export let parser: UrdfParser;

  export let expanded = true;

  const toggle = () => {
		expanded = !expanded;
	}
</script>

<List>
  <Item on:SMUI:action={toggle}>
    <Graphic class="material-icons">{expanded ? 'folder_open' : 'folder'}</Graphic>
    <Text>{parser.name}</Text>
  </Item>

  {#if expanded}
    <Item wrapper>
      <List class="sub-list">
      {#each parser.getRootJoints() as joint}
        <ThreeJoint joint={joint} parser={parser} />
      {/each}
      </List>
    </Item>
  {/if}
</List>

<style>
  * :global(.sub-list) {
    padding-left: 10px;
  }
</style>