<template>
  <div class="toast-wrapper" v-if="isShow">
    <div
      v-if="['success', 'warning', 'failed'].includes(toast.type)"
      class="toast-content-wrapper"
      :class="toast.type"
    >
      <span class="message-wrapper">
        <strong class="capitalize">{{ toast.type }}!</strong>
        {{ toast.message }}
      </span>
      <div @click="handleClose" class="toast-icon-wrapper">
        <Icon name="gravity-ui:circle-xmark" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import type { IToast } from '~/types/global.interface';
const { $listen } = useNuxtApp();
const isShow = ref(false);
const toast = reactive({
  message: "",
  type: ""
})
let alive: string | number | undefined | NodeJS.Timeout
const handleClose = () => {
  isShow.value = false
  clearTimeout(alive)
}
$listen("toast-notification", (data: IToast) => {
  toast.message = data.message
  toast.type = data.type 
  isShow.value = true
  alive = setTimeout(() => {
    isShow.value = false
  }, data.time)
})

</script>

<style lang="scss" scoped>
.toast-wrapper {
  position: fixed;
  width: fit-content;
  margin: auto;
  max-width: 768px;
  right: 32px;
  z-index: 100;
  bottom: 16px;
  .toast-content-wrapper {
    padding: 4px 8px;
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 40px;
    color: white;
    font-size: $text-xs;
    &.success {
      background-color: #04AA6D;
    }
    &.warning {
      background-color: #ff9800;
    }
    &.failed {
      background-color: #f44336;
    }
    &.info {
      background-color: #17a2b8;
    }
    .message-wrapper {
      margin-right: 1.5rem;
      text-align: center;
      .capitalize {
        text-transform: capitalize;
      }
    }
    .toast-icon-wrapper {
      font-size: $text-lg;
      cursor: pointer;
      &:hover{
        color: #0253FA;
      }
    }
  }
}
</style>
