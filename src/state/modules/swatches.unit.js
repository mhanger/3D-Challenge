import * as swatchesModule from './swatches'

describe('@state/modules/users', () => {
  it('exports a valid Vuex module', () => {
    expect(swatchesModule).toBeAVuexModule()
  })
})

const validSwatchExample = {
  id: 1,
  hexcode: '#990000',
  rgb: '153, 0, 0',
  name: 'Red',
  text: 'Red Sphere'
}
