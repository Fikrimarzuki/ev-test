import mitt from "mitt";
import type { IToast } from "~/types/global.interface";

type ApplicationEvents = {
  'toast-notification': IToast
};

export default defineNuxtPlugin(() => {
  const emitter = mitt<ApplicationEvents>()
  return {
    provide: {
      event: emitter.emit,
      listen: emitter.on,
      unlisten: emitter.off
    }
  }
})