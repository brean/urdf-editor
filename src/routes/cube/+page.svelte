<script lang="ts">
	import { Canvas, OrbitControls, T } from '@threlte/core'

</script>

<div>
	<Canvas>

		<T.Mesh>
			<T.BoxGeometry />
			<T.MeshStandardMaterial>
				<T.Color args={['#ff0000']} attach="color" />
			</T.MeshStandardMaterial>
		</T.Mesh>

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