<template>
  <div style="height: 100%">
    <div class="block" style="position: absolute; top: 8px; left: 0px; right: 0px; height: 36px; margin: 0px 8px 0px 8px ">
      Naive Desktop Translator
    </div>
    <div style="position: absolute; top: 44px; bottom: 0px; left: 0px; right: 0px; margin: 8px">
      <div style="float: left; width: 40%; height: 100%">
        <image-block />
      </div>
      <div style="float: left; width: 30%; height: 100%">
        <div style="height: 100%; margin: 0px 8px">
          <text-ori-block />
        </div>
      </div>
      <div style="float: left; width: 30%; height: 100%">
        <text-trans-block />
      </div>
    </div>
  </div>
</template>

<script>
import ImageBlock from './ImageBlock'
import TextOriBlock from './TextOriBlock'
import TextTransBlock from './TextTransBlock'

export default {
  name: 'home-page',
  components: {
    ImageBlock,
    TextOriBlock,
    TextTransBlock
  }
}
</script>

<style>
.block {
  background: #ffffff; 
}
</style>
