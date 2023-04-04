<script lang="ts">
	import { Canvas, OrbitControls, T } from '@threlte/core'
  import Urdf from './Urdf.svelte';

</script>

<div>
	<Canvas>

		<T.DirectionalLight position.y={5} position.x={3} />

		<T.PerspectiveCamera makeDefault let:ref={camera}
			position={[1, 1, 1]}>
      <OrbitControls />
		</T.PerspectiveCamera>

		<Urdf filename="/turtlebot3_description/turtlebot3_burger.xml" />

	</Canvas>
</div>

<style>
	div {
		height: 480px;
		width: 640px;
	}
</style>