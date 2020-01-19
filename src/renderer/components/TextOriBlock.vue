<template>
  <div class="block" style="height: 100%">
    <div>Text Ori Block</div>
    <textarea v-model="oriText" placeholder="ori text" style="width: 90%; height: 90%" />
    <button @click="sendGoogleTransRequest" >Send Google Translate Request</button>
  </div>
</template>

<script>
const translate = require('google-translate-api');

export default {
  name: 'text-ori-block',
  methods: {
    sendGoogleTransRequest: function () {
      console.log(this.$store.state.ndt.oriText);
      let that = this;
      translate(that.$store.state.ndt.oriText, {to: 'zh-cn'}).then(res => {
        console.log(res.text);
        that.$store.dispatch('ndt/setTransText', res.text);
      }).catch(err => {
        console.error(err);
      });
    }
  },
  computed: {
    oriText: {
      get () {
        return this.$store.state.ndt.oriText;
      },
      set (newOriText) {
        this.$store.dispatch('ndt/setOriText', newOriText);
      }
    }
  }
}
</script>

<style scoped>
</style>
