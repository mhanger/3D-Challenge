<template>
  <div class="swatches-container clearfix">
    <p>Actions</p>
    <div>
      <Swatch v-for="swatch in swatches"
      :key="swatch.id"
      :swatch="swatch"
      >
      </Swatch>
     </div>
  </div>
</template>

<script>
  import Swatch from '@components/swatch.vue';

  export default {

  name: "SwatchesWrapper",
  components: {
      Swatch
    },
    props: {
      swatches: Array
    }
  }
</script>

<style lang="scss" scoped>
  @import '@design';

  .swatches-container {
    background-color: rgba(255, 255, 255, 1);
    border: 1px solid #fff;
    bottom: 0;
    left: 50%;
    margin-left: auto;
    margin-right: auto;
    padding: 20px;
    position: fixed;
    text-align: middle;
    transform: translateX(-50%);
    p {
      display: flex;
      flex-basis: 100%;
      justify-content: center;
      margin-block-start: 0;
    }
  }

  @media only screen and (max-width: 1250px) {
    .swatches-container {
      bottom: 0;
      display: block;
      left: 0;
      margin-top: -4px;
      position: static;
      text-align: center;
      transform: none;
      width: 100%;
      white-space: nowrap;

      > div {
        display: flex;
        justify-content: center;
      }
    }
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

</style>
