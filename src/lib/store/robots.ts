// all predefined robot URDFs
import { writable } from 'svelte/store';
import type { IUrdfRobot } from '$lib/models/IUrdfRobot';

const { subscribe, set, update } = writable<{name: string, data: IUrdfRobot}[]>([]);

export default {
  subscribe,
  set,
  update
}