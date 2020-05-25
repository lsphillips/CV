# The CV of Luke S. Phillips

[![Built using Travis](https://img.shields.io/travis/lsphillips/CV/master.svg?maxAge=900)](https://travis-ci.org/lsphillips/CV)

The source code for the CV of Luke S. Phillips, which can be viewed here: https://www.lsphillips.com/

## Development

Node.js is required because NPM scripts are used to facilitate the build process.

### Building

To build a deployable artifact:

```
npm run build
```

This will create an `artifact` directory containing the CV.

### Developing

To setup a seamless development environment:

```
npm run develop
```

This will perform a build and watch all source files for changes where the artifact will be rebuilt when such a change occurs.

### Publishing

To publish a build:

```
npm run publish
```

This will perform a build and push the resulting artifact to the `gh-pages` branch of this repository.
