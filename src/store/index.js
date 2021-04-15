import { createStore } from "vuex";
import * as R from 'ramda';

export default createStore({
  state: {
    counter: 0,
  },
  mutations: {
    add(state, ...args) {
      let plus = R.head(args);
      if (!plus) plus = 0;
      state.counter += plus;
    }
  },
  getters: {
    concatCount: state => {
      return R.concat('Hello ', R.toString(state.counter));
    }
  }
});
