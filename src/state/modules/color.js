export const state = {
  colorId: 0
}

export const getters = {
  getColor: state => state.colorId
}

export const mutations = {
  editColor: (state, id) => {
    state.colorId = id;
  }
}

export const actions = {
  changeColor({ state, commit, dispatch}, id = {}) {
    commit('editColor', id);
  }
}
