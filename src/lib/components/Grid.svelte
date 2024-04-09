<script lang="ts">
  import { useThrelte } from "@threlte/core";
  import { onDestroy } from "svelte";
  import { GridHelper } from "three";

  export let size: number = 10;
  export let divisions: number = 10;
  export let position: number[] = [0, 0, 0];

  const { scene, invalidate } = useThrelte();


  const gridHelper = new GridHelper(size, divisions);
	gridHelper.position.x = position[0];
  gridHelper.position.y = position[1];
  gridHelper.position.z = position[2];
	scene.add(gridHelper)
	onDestroy(() => {
		scene.remove(gridHelper)
	})
</script>
