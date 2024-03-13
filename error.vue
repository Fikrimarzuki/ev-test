<template>
  <div>
    <span>
      {{ error }}
    </span>
    <div>Error Page</div>
    <button @click="handleError">Clear errors</button>
  </div>
</template>
<script setup>
const props = defineProps({
  error: Object
})
const handleError = () => clearError({ redirect: '/' })
</script>
