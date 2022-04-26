const check = function () {
  try {
    window.localStorage.setItem('test', 'test');
    window.localStorage.removeItem('test');
    return window.localStorage;
  } catch (e) {
    let setItem = function () {};
    let getItem, clearItem, clear;
    getItem = clearItem = clear = setItem;
    return {
      getItem, clearItem, clear, setItem
    };
  }
};

export default check();
