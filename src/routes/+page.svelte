<script lang="ts">
	import { Canvas, OrbitControls, T } from '@threlte/core'
  import Urdf from './Urdf.svelte';

</script>

<div>
	<Canvas shadows
		rendererParameters={{logarithmicDepthBuffer: true}}>

		<T.PointLight color="white" intensity={.5} position={[0, 5, 0]} />
		<!-- T.PointLight color="blue" intensity={0.5} position={[5, 5, 0]} />
		<T.PointLight color="yellow" intensity={0.5} position={[-5, -5, 0]} /-->

		<T.PerspectiveCamera makeDefault let:ref={camera}
			position={[.5, .5, .5]} fov={25}

			 >
      <OrbitControls enableZoom={true} />
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