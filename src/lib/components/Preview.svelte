<script lang="ts">
  import { mousePos } from "$lib/utils";
  import { useThrelte } from "@threlte/core";
  import { interactivity } from "@threlte/extras";
  import { urdf_viewer_state, UrdfJoint, type IUrdfJoint } from "urdf-viewer";

  const { camera } = useThrelte()

  interface Props {
    preview: IUrdfJoint
  }

  let {
    preview
  }: Props = $props();

  interactivity({
    compute: (event) => {
      if (!preview) {
        return;
      }
      let snap = urdf_viewer_state.translationSnap;
      // Make the preview follow the mouse
      const pos = mousePos(event, $camera);
      const posArr: [x: number, y: number] = [
        Math.ceil(pos.x / snap) * snap, 
        Math.ceil(pos.y / snap) * snap];
      preview.origin_xyz = [...posArr, 0];
    }
  })
</script>

<UrdfJoint 
  joint={preview}
/>
