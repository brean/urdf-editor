import { writable } from 'svelte/store';
import type { IUrdfRobot } from '../models/IUrdfRobot';

const { subscribe, set, update } = writable<undefined | IUrdfRobot>(undefined);

const reset = () => {
  set(undefined);
};

export default {
  subscribe,
  set,
  update,
  reset
}