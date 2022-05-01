/**
 * redux 初始化 store
 * @param reducer
 * @param initialState
 * @param middleware
 * @returns
 */
export function createStore(reducer, initialState, middleware) {
  if (initialState && typeof initialState === 'function') {
      middleware = initialState;
      initialState = undefined;
  }

  let currentState = initialState;

  const listeners = [];

  if (middleware && typeof middleware === 'function') {
      // 封装dispatch
      return middleware(createStore)(reducer, initialState);
  }

  const getState = () => {
      return currentState;
  }

  const dispatch = (action) => {
      currentState = reducer(currentState, action);

      listeners.forEach(listener => {
          listener();
      })
  }

  const subscribe = (listener) => {
      listeners.push(listener);
  }

  return {
      getState,
      dispatch,
      subscribe
  }
}


const actionTypes = {
  ADD: 'ADD',
  CHANGEINFO: 'CHANGEINFO',
}

const initState = {
  info: '初始化',
}

const initReducer = (state=initState, action) =>{
  switch(action.type) {
      case actionTypes.CHANGEINFO:
          return {
              ...state,
              info: action.preload.info || '',
          }
      default:
          return { ...state };
  }
}
