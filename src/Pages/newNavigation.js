// import { Route } from "@react-navigation/native";
// import { NavigationState } from "@react-navigation/native";

const router = {
    type: 'tab',
  
    getInitialState({ routeNames, routeParamList }) {
      const index =
        options.initialRouteName === undefined
          ? 0
          : routeNames.indexOf(options.initialRouteName);
  
      return {
        stale: false,
        type: 'tab',
        key: shortid(),
        index,
        routeNames,
        routes: routeNames.map(name => ({
          name,
          key: name,
          params: routeParamList[name],
        })),
      };
    },
  
    getRehydratedState(partialState, { routeNames, routeParamList }) {
      const state = partialState;
  
      if (state.stale === false) {
        return state;
      }
  
      const routes = state.routes
        .filter(route => routeNames.includes(route.name))
        .map(
          route =>
            ({
              ...route,
              key: route.key || `${route.name}-${shortid()}`,
              params:
                routeParamList[route.name] !== undefined
                  ? {
                      ...routeParamList[route.name],
                      ...route.params,
                    }
                  : route.params,
            })
        );
  
      return {
        stale: false,
        type: 'tab',
        key: shortid(),
        index:
          typeof state.index === 'number' && state.index < routes.length
            ? state.index
            : 0,
        routeNames,
        routes,
      };
    },
  
    getStateForRouteNamesChange(state, { routeNames }) {
      const routes = state.routes.filter(route =>
        routeNames.includes(route.name)
      );
  
      return {
        ...state,
        routeNames,
        routes,
        index: Math.min(state.index, routes.length - 1),
      };
    },
  
    getStateForRouteFocus(state, key) {
      const index = state.routes.findIndex(r => r.key === key);
  
      if (index === -1 || index === state.index) {
        return state;
      }
  
      return { ...state, index };
    },
  
    getStateForAction(state, action) {
      switch (action.type) {
        case 'NAVIGATE': {
          const index = state.routes.findIndex(
            route => route.name === action.payload.name
          );
  
          if (index === -1) {
            return null;
          }
  
          return { ...state, index };
        }
  
        default:
          return BaseRouter.getStateForAction(state, action);
      }
    },
  
    shouldActionChangeFocus() {
      return false;
    },
  };
  
  const SimpleRouter = () => router;
  
  export default SimpleRouter;