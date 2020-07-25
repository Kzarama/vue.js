<template class="flex content-center">
  <button
    @click="buttonclick"
    class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-2 border border-blue-500 hover:border-transparent rounded"
  >
    <beat-loader :loading="isLoading" :color="'#4DA8D7'" :size="8" />
    <p v-show="!isLoading">
      <slot></slot>
    </p>
  </button>
</template>

<script>
export default {
  name: 'PxButton',

  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  },

  methods: {
    buttonclick() {
      this.$emit('click')
    }
  }
}
</script>
