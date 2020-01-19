<template>
  <div class="block" style="height: 100%">
    <div>Text Trans Block</div>
    <textarea v-model="transText" placeholder="trans text" style="width: 90%; height: 90%" />
  </div>
</template>

<script>
export default {
  name: 'text-trans-block',
  computed: {
    transText: {
      get () {
        return this.$store.state.ndt.transText;
      },
      set (newTransText) {
        this.$store.dispatch('ndt/setTransText', newTransText);
      }
    }
  }
}
</script>

<style scoped>
</style>
