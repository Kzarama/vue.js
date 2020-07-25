<template class="flex content-center">
  <button
    @click="buttonclick"
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold
  hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent
  rounded"
  >
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'PxButton',

  methods: {
    buttonclick() {
      this.$emit('click')
    }
  }
}
</script>
