<script lang="ts">
  import { T } from "@threlte/core";
  import { ContactShadows } from "@threlte/extras";

  // based on 
  // https://github.com/pmndrs/drei/blob/master/src/core/Stage.tsx
  export let intensity: number = 0.5;
  export let radius: number = 1.0;
  export let shadows: boolean = true;
  export let preset_name: 'rembrandt' | 'portrait' | 'upfront' | 'soft' = 'rembrandt';
  export let shadowBias: number = -0.0001;
  export let normalBias: number = 0;
  export let shadowSize: number = 256;
  export let height: number = 1.0;
  export let shadowOffset: number = 1.0;

  const presets = {
    rembrandt: {
      main: [1, 2, 1],
      fill: [-2, -0.5, -2],
    },
    portrait: {
      main: [-1, 2, 0.5],
      fill: [-1, 0.5, -1.5],
    },
    upfront: {
      main: [0, 2, 1],
      fill: [-1, 0.5, -1.5],
    },
    soft: {
      main: [-2, 4, 4],
      fill: [-1, 0.5, -1.5],
    },
  }
  const config = presets[preset_name];

</script>

<T.AmbientLight intensity={intensity / 3} />
<T.SpotLight
  penumbra={1}
  position={[
    config.main[0] * radius,
    config.main[1] * radius,
    config.main[2] * radius]}
  intensity={intensity * 2}
  castShadow={shadows}
  shadow-bias={shadowBias}
  shadow-normalBias={normalBias}
  shadow-mapSize={shadowSize}
/>
<T.PointLight 
  position={[
    config.fill[0] * radius,
    config.fill[1] * radius,
    config.fill[2] * radius]}
  intensity={intensity}
/>

<T.Group position={[0, -height / 2 - shadowOffset / 2, 0]}>
  {#if shadows}
    <ContactShadows 
      scale={radius * 4} far={radius} blur={2} />
  {/if}
</T.Group>