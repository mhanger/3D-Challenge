import { mapState, mapGetters, mapActions } from 'vuex'

export const authComputed = {
  ...mapState('auth', {
    currentUser: (state) => state.currentUser,
  }),
  ...mapGetters('auth', ['loggedIn']),
}

export const swatchesComputed = {
  ...mapState('swatches', {
    swatches: (state) => state.swatches,
  }),
}

export const colorComputed = {
  ...mapState('color', {
   color: (state) => state.colorId,
  }),
  ...mapGetters('color', ['getColor'])
}

export const authMethods = mapActions('auth', ['logIn', 'logOut'])
export const colorMethods = mapActions('color', ['changeColor', 'updateSceneTest'])
