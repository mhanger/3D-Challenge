export const namespaced = true

export const state = {
  userAction: {
    id: 0,
    color: '#3366cc'
  }
}

export const getters = {
  getAction: state => state.userAction
}

export const mutations = {
  EDIT_ACTION: (state, action) => {
    state.userAction.id = action.id,
    state.userAction.color = action.color
  }
}

export const actions = {
  changeScene({ commit }, {id, color}) {

    if (id === 5) {
      color = '#' + Math.floor(Math.random()*16777215).toString(16);
      if (color.length < 7) {
        color +='0'
      }
    }
    commit('EDIT_ACTION', {id: id, color: color})
  }
}
