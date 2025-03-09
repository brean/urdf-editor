import type { UrdfParser } from "urdf-viewer";

export const editor_state = $state<{
  tool: 'translate' | 'scale' | 'rotate',
  orbitControlsEnabled: boolean
  preview: any
}>({
  tool: 'translate',
  orbitControlsEnabled: true,
  preview: undefined
});