import { Bokeh1Background } from 'https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/backgrounds/bokeh1.cdn.min.js'

const movingBackground = Bokeh1Background(document.getElementById('webgl-canvas'))
movingBackground.loadMap('https://cdn.jsdelivr.net/npm/threejs-components@0.0.2/build/assets/bokeh-particles2.png')
movingBackground.setColors([0x275DAD, 0x5B616A, 0xABA9C3])

document.body.addEventListener('click', () => {
  movingBackground.setColors([0xffffff * Math.random(), 0xffffff * Math.random(), 0xffffff * Math.random()])
})