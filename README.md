### usage

```shell
yarn install
# OR
npm install

npm start
```

### about

this is just an experiment in reimplementing the app from http://jilles.me/react-redux-and-react-redux/ in a similar fashion but without react and redux.

The [`/lib`](https://github.com/allouis/vanilla-react-redux-app/tree/master/lib) folder should eventually be split into their own modules.

The implementation of the store is inferior to redux in that it only allows one subscriber and doesn't have any `combineReducers` helpers or useful errors, it was hacked together quickly. I do however favour the API over redux but that is just preference.

The `bindComponent` module I suppose is the equivalent of `react-redux` in that it wires up the store with a component.

This isn't supposed to be a replacment for react and redux, just an experiment in using small modules.

Watch this space for updates :)
