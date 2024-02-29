import { writable } from "svelte/store";

function createShowModal() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    show: () => set(true),
    hide: () => set(false),
    toggle: () => update((value) => !value),
  };
}

function createShowModalAccept() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    show: () => set(true),
    hide: () => set(false),
    toggle: () => update((value) => !value),
  };
}

export const showModal = createShowModal();
export const showModalAccept = createShowModalAccept();
