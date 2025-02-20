<script lang="ts">
  import List, { Item, Text, Graphic } from '@smui/list';
  import type { IUrdfLink, IUrdfRobot } from 'urdf-viewer';
  import { getRootJoints } from 'urdf-viewer';
  import SmuiJoint from './SmuiJoint.svelte';

  interface Props {
    robot: IUrdfRobot | undefined
    onselectionchange?: (prev: IUrdfLink | undefined, next: IUrdfLink | undefined) => void
  }
  
  let {
    robot = $bindable(undefined),
    onselectionchange = undefined
  }: Props = $props();
  
</script>
{#if robot}
<List class="robot-list">
  <Item>
    <Graphic>🤖</Graphic>
    <Text>{robot.name}</Text>
  </Item>

  {#each getRootJoints(robot) as joint}
  <SmuiJoint {onselectionchange} {joint} />
  {/each}
</List>
{/if}

<style>
  * :global(.robot-list) {
    max-width: 250px;
  }
  * :global(.sub-list) {
    padding-left: 10px;
  }
</style>