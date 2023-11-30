<script lang="ts">
  import List, { Item, Text, Graphic } from '@smui/list';
  import ThreeJoint from './ThreeJoint.svelte';
  import robot_urdf from '../store/robot_urdf';
  import { getRootJoints } from '../UrdfParser';


  export let expanded = true;

  const toggle = () => {
		expanded = !expanded;
	}
</script>

{#if $robot_urdf}
<List>
  <Item on:SMUI:action={toggle}>
    <Graphic class="material-icons">{expanded ? 'folder_open' : 'folder'}</Graphic>
    <Text>{$robot_urdf?.name}</Text>
  </Item>

  {#if expanded}
    <Item wrapper>
      <List class="sub-list">
      {#each getRootJoints($robot_urdf) as joint}
        <ThreeJoint joint={joint} />
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
{/if}