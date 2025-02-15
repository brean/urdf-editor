export const editor_state = $state<{
  tool: 'translate' | 'scale' | 'rotate',
  orbitControlsEnabled: boolean
}>({
  tool: 'translate',
  orbitControlsEnabled: true
});