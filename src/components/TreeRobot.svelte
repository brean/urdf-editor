<script lang="ts">
  import { Item, Text, Graphic } from '@smui/list';
  import type UrdfParser from '../UrdfParser';
  import TreeJoint from './TreeJoint.svelte';

  export let parser: UrdfParser;

  export let expanded = true;

  const toggle = () => {
		expanded = !expanded;
	}
</script>

<Item on:SMUI:action={toggle}>
  <Graphic class="material-icons">{expanded ? 'folder_open' : 'folder'}</Graphic>
  <Text>{parser.name}</Text>
</Item>

{#if expanded}
  {#each parser.getRootJoints() as joint}
    <TreeJoint joint={joint} parser={parser} />
  {/each}
{/if}
