# 3D Challenge

## Project Description
This project is a Code Challenge utilizing the following frameworks and libraries:

Vue.js v2.6.x
https://vuejs.org/
https://github.com/vuejs/vue

Three.js
https://threejs.org/
https://github.com/mrdoob/three.js/

## Commands

### start dev server

yarn dev --open

### build for production dist

yarn build

## Getting started

```bash
# 1. Clone the repository.
git clone https://github.com/mhanger/3D-Challenge.git my-new-project

# 2. Enter your newly-cloned folder.
cd my-new-project

# 3. Install dependencies. Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install
yarn

# 4. Replace this README's CI badge with a note about when you started
# and a link to a compare URL, so that you can always get an overview
# of new features added to the boilerplate since you cloned.
node _start.js

# 5. Delete the start script, as there can be only one beginning.
rm _start.js

# 6. Read the documentation linked below for "Setup and development".
```

## Demo of Project

https://challenge-3d.herokuapp.com

## Technical

based on Vue Enterprise Boilerplate
https://github.com/chrisvfritz/vue-enterprise-boilerplate

Structure of Three.js code based on
https://medium.com/@soffritti.pierfrancesco/how-to-organize-the-structure-of-a-three-js-project-77649f58fa3f
I am using the pattern of creating mixins with a SceneManager, Camera, Lights, etc. This improves the readibility and scaleability.

I chose to place the scss directly in the vue files rather than break out a separate stylesheet, partly due to time constraints, and partly because I prefer the simplicity of having the styling in the same place as the template.

The enterprise boilerplate has some built in patterns that are a bit different from the standard vuex structure.

There is an extra layer in /state/helpers.js which helps to organize the standard vuex mapState, mapGetters, mapActions a bit better, and makes calling them easier within the components.

I probably could have just used the standard vue cli for this project, but wanted to evaluate this boilerplate for large scale applications.

I would like to have created more interaction with the store rather than using eventBus to pass the button action around, but ran out of time.
Button action and swatch info utilize vuex store.

I used a separate and slightly out of date version of GLTFLoader in order to get the testing platform to work correctly.
I could use the newer ObjectLoader or with more time I could find the boilerplate setting needed to transpile the GLTFLoader.

Tests can be run with:

yarn test

## Documentation

The boilerplate includes a `docs` folder with more details on:

1.  [Setup and development](docs/development.md)
1.  [Architecture](docs/architecture.md)
1.  [Languages and technologies](docs/tech.md)
1.  [Routing, layouts, and views](docs/routing.md)
1.  [State management](docs/state.md)
1.  [Tests and mocking the API](docs/tests.md)
1.  [Linting and formatting](docs/linting.md)
1.  [Editor integration](docs/editors.md)
1.  [Building and deploying to production](docs/production.md)
1.  [Troubleshooting](docs/troubleshooting.md)

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
