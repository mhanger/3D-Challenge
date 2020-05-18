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
    margin-left: auto;
    margin-right: auto;
    padding: 10px 20px 20px;
    position: fixed;
    text-align: middle;
    width: 100%;

    > div {
        display: flex;
        justify-content: center;
    }

    p {
      display: flex;
      flex-basis: 100%;
      justify-content: center;
      padding: 0;
      margin: 0 0 10px 0;
      margin-block-start: 0;
    }
  }

  @media only screen and (max-width: 1250px) {
    .swatches-container {
      display: block;
      margin-top: -5px;
      position: static;
      white-space: nowrap;
    }
  }

  .clearfix::after {
    content: "";
    clear: both;
    display: table;
  }

</style>
