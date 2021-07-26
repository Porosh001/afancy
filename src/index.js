// import components from './components';
import fnc from './fnc';

const install = (Vue) => {
  // Vue.use(components);
  Vue.prototype.$fnc = fnc;
}

export default install;
