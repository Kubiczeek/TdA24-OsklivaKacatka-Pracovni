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

function createShowModalDecline() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    show: () => set(true),
    hide: () => set(false),
    toggle: () => update((value) => !value),
  };
}

function createShowModalMessage() {
  const { subscribe, set, update } = writable(false);

  return {
    subscribe,
    show: () => set(true),
    hide: () => set(false),
    toggle: () => update((value) => !value),
  };
}

function createModalData() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    set: (data) => set(data),
    update: (data) => update(data),
  };
}

function createModalData2() {
  const { subscribe, set, update } = writable({});

  return {
    subscribe,
    set: (data) => set(data),
    update: (data) => update(data),
  };
}

export const showModal = createShowModal();
export const showModalAccept = createShowModalAccept();
export const showModalDecline = createShowModalDecline();
export const showModalMessage = createShowModalMessage();
export const modalData = createModalData();
export const modalData2 = createModalData2();
