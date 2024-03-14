import type { IToast } from "~/types/global.interface" 
export default function () {
  const { $event } = useNuxtApp()

  return (data: IToast) => {
    if (!data.time) {
      data.time = 2000
    }
    $event("toast-notification", data)
  }
}
