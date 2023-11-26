import { writable } from 'svelte/store';
import type { IUrdfVisual } from '../models/IUrdfVisual';

const { subscribe, set } = writable<undefined | IUrdfVisual>(undefined);

const select = set;

const unselect = () => {
  set(undefined);
};

export default {
  subscribe,
  select,
  unselect
}