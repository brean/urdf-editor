import { writable } from 'svelte/store';
import type { IUrdfLink } from '../models/IUrdfLink';

const { subscribe, set } = writable<undefined | IUrdfLink>(undefined);

const select = set;

const unselect = () => {
  set(undefined);
};

export default {
  subscribe,
  select,
  unselect
}