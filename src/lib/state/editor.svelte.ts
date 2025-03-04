export const editor_state = $state<{
  tool: 'translate' | 'scale' | 'rotate',
  orbitControlsEnabled: boolean
  translationSnap: number,
  scaleSnap: number,
  rotationSnap: number
  preview: any
}>({
  tool: 'translate',
  orbitControlsEnabled: true,
  translationSnap: 0.1,
  scaleSnap: 0.1,
  rotationSnap: 10,
  preview: undefined
});