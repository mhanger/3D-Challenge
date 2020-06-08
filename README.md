# 3D Challenge

## Project Description
This project is a Code Challenge utilizing the following frameworks and libraries:

Vue.js v2.6.x
https://vuejs.org/
https://github.com/vuejs/vue

Three.js
https://threejs.org/
https://github.com/mrdoob/three.js/

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# 1. Clone the repository.
git clone https://github.com/mhanger/3D-Challenge.git my-new-project

# 2. Enter your newly-cloned folder.
cd my-new-project

# 3. Install dependencies. Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install
yarn

## Technical

based on Vue CLI tool

Structure of Three.js code based on
https://medium.com/@soffritti.pierfrancesco/how-to-organize-the-structure-of-a-three-js-project-77649f58fa3f
I am using the pattern of creating mixins with a SceneManager, Camera, Lights, etc. This improves the readibility and scaleability.

I chose to place the scss directly in the vue files rather than break out a separate stylesheet, partly due to time constraints, and partly because I prefer the simplicity of having the styling in the same place as the template.

I used a watch with the store rather than using eventBus to pass the button action around.
Button action and swatch info utilize vuex store.

## Extant websites
http://2015.usopen.com/en_US/players/bios/34046.html
I did the players section as well as worked on the main scoreboard.
New features included a live shots and stats section.  I worked with the back-end team on json schemas and coded all the front-end interactions and styling.

https://parts.ford.com/en.html
I was the lead architect for this i18n and RWD project.  Build in AngularJS with IBM WebSphere Commerce.

https://www.thenorthface.com/shop/mens-jackets-vests-vests
Redesign of thenorthface.com for 2018 Christmas season.

## LinkedIn Profile

https://www.linkedin.com/in/marc-hanger/

****