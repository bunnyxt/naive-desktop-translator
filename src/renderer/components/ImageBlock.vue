<template>
  <div class="block" style="height: 100%">
    <div>Image Block</div>
    <img :src="'file://'+this.$store.state.ndt.imageFilePath" width="100%" />
    <input type="file" @change="changeImageFile">
    <button @click="sendOcrSpaceRequest" >Send Ocr Space Request</button>
  </div>
</template>

<script>
const ocrSpaceApi = require('ocr-space-api')

export default {
  name: 'image-block',
  methods: {
    changeImageFile: function (e) {
      let imageFile = e.target.files[0];
      this.$store.dispatch('ndt/setImageFilePath', imageFile ? imageFile.path : undefined);
    },
    sendOcrSpaceRequest: function () {
      let options = {
        apikey: this.$store.state.ndt.ocrSpaceApiKey,
        language: this.$store.state.ndt.oriLang,
        imageFormat: 'image/png',
        isOverlayRequired: true
      };

      const imageFilePath = this.$store.state.ndt.imageFilePath;

      let that = this;
      ocrSpaceApi.parseImageFromLocalFile(imageFilePath, options)
        .then(function (parsedResult) {
          console.log('parsedText: \n', parsedResult.parsedText);
          that.$store.dispatch('ndt/setOriText', parsedResult.parsedText);
          console.log('ocrParsedResult: \n', parsedResult.ocrParsedResult);
        }).catch(function (err) {
          console.log('ERROR:', err);
        });
    }
  }
}
</script>

<style scoped>
</style>
