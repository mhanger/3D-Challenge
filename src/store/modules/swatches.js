export const namespaced = true

export const state = {
  swatches:  [
      {
        id: 1,
        hexcode: '#990000',
        name: 'Red',
        text: 'Red Sphere'
      },
      {
        id: 2,
        hexcode: '#339933',
        name: 'Green',
        text: 'Green Cube'
      },
      {
        id: 3,
        hexcode: '#3366cc',
        name: 'Blue',
        text: 'Blue Cube'
      },
      {
        id: 4,
        hexcode: '#cccccc',
        name: 'Image',
        text: "Assimilation Texture"
      },
      {
        id: 5,
        hexcode: '#dddddd',
        name: 'Random',
        text: "Random Cube"
      }
    ]
}

export const getters = {
  getAllSwatches: state => state.swatches,
}

export const mutations = {
  editColor: (state, id) => {
    state.colorId = id;
  }
}

export const actions = {
}
