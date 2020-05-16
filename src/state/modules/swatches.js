
export const state = {
  swatches:  [
      {
        id: 1,
        hexcode: '#990000',
        rgb: '153, 0, 0',
        name: 'Red',
        text: 'Red Sphere'
      },
      {
        id: 2,
        hexcode: '#339933',
        rgb: '51, 153, 51',
        name: 'Green',
        text: 'Green Cube'
      },
      {
        id: 3,
        hexcode: '#3366cc',
        rgb: '51, 102, 153',
        name: 'Blue',
        text: 'Blue Cube'
      },
      {
        id: 4,
        hexcode: '#cccccc',
        rgb: '204, 204, 204',
        name: 'Image',
        text: "Assimilation Texture"
      },
      {
        id: 5,
        hexcode: '#dddddd',
        rgb: '204, 204, 204',
        name: 'Random',
        text: "Random Cube"
      }
    ],
    colorId: 1
}

export const getters = {
  getAllSwatches: state => state.swatches
}

export const mutations = {
  setColor(state, color) {
    state.color.colorId = color;
  },

  editColor(state, color) {
    const index = state.swatches.findIndex(s => s.id === color.id);
    state.color.colorId = state.swatches[index].hexcode;
  }
}

export const actions = {
}
