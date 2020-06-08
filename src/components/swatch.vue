<template>
  <div class="color-tile" :style="tileColor" @click="updateColor">
   <span>{{swatch.text}}</span>
   </div>
</template>

<script>

  import { mapActions } from 'vuex'

  export default {
    name: 'Swatch',
    props: {
      swatch: {
      type: Object,
      required: true
      }
    },

    computed: {
      tileColor() {
        return {
          backgroundColor: this.swatch.hexcode
        }
      }
    },
    methods: {
      ...mapActions('scenes', ['changeScene']),
      updateColor() {
        this.changeScene({id: this.swatch.id, color: this.swatch.hexcode});
      }
    }
  }
</script>

<style lang="scss">


// GRADIENTS
.color-tile {
  background: linear-gradient(135deg, rgba(255, 255, 255, 0.1) 19%, rgba(0, 0, 0, 0.23) 100%);
  cursor: pointer;
  display: flex;
  float: left;
  height: 85px;
  margin-left: 20px;
  padding: 5px;
  width: 85px;
  white-space: normal;

  span {
     font-size: 13px;
  }

  &:hover {
    filter: brightness(1.1);
  }

  &:first-of-type {
    margin-left: 0;
    border-radius: 50%;

    span {
      color: #ccc;
    }
  }

  &:last-of-type {
    background-color: #c73e1d;
    background-image: linear-gradient(315deg, #c73e1d 0%, #a23b72 37%, #2e86ab 100%);

    span {
      color: #9999cc;
    }
  }

  span {
    margin: auto;
    user-select: none;
  }
}

@media only screen and (max-width: 1024px) {
  .color-tile {
    height: 90px;
    margin-left: 10px;
    padding: 4px;
    width: 90px;

    &:first-of-type {
      margin-left: 0;
    }
  }
}

</style>
