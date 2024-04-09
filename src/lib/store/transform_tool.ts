import { writable } from 'svelte/store';

const { subscribe, set, update } = writable<'scale' | 'translate' | 'rotate'>('translate');

export default {
  subscribe,
  set,
  update
}