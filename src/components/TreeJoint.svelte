<script lang="ts">
  import { Item, Text, Graphic } from '@smui/list';
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
  <Text >{joint.name}</Text>
</Item>

<!-- links -->
<!--Item>
  <Text>{joint.parent.name} -&gt; {joint.child.name}</Text>
</Item-->

{#if expanded}
  {#each childJoints as childJoint}
    <svelte:self joint={childJoint} parser={parser} />
  {/each}
{/if}
