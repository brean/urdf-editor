<script lang="ts">
	import { Canvas, OrbitControls, T } from '@threlte/core'
  import Urdf from './Urdf.svelte';

</script>

<div>
	<Canvas>

		<Urdf filename="/turtlebot3_description/turtlebot3_burger.xml" />

		<T.DirectionalLight position.y={5} position.x={3} />

		<T.PerspectiveCamera makeDefault let:ref={camera} position.y={10} position.x={10}>
      <OrbitControls />
		</T.PerspectiveCamera>

	</Canvas>
</div>

<style>
	div {
		height: 480px;
		width: 640px;
	}
</style>