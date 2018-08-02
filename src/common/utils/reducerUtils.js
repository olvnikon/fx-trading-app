// @flow
type MappedReducer<S, P> = (state: S, payload: P) => S;
type Action = {| type: string, payload: any |};
// eslint-disable-next-line flowtype/require-exact-type
type ReducerMapping<TState> = { +[key: string]: MappedReducer<TState, any> };
type iterable = $ReadOnlyArray<any> | { +[key: string]: any };

export const createReducer = <TInitialState: iterable>(
  initialState: TInitialState,
  fnMap: ReducerMapping<TInitialState>,
): ((TInitialState, Action) => TInitialState) => (
    state: TInitialState = initialState,
    { type, payload }: Action,
  ): TInitialState => {
    const handler = fnMap[type];
    return handler ? handler(state, payload) : state;
  };

export const createConditionalSliceReducer = <TInitialState: iterable>(
  sliceName: string,
  fnMap: ReducerMapping<TInitialState>,
  initialState: TInitialState,
): ReducerMapping<TInitialState> => ({
    [sliceName]: (state: TInitialState = initialState, action: Action) => (fnMap[action.type]
      ? createReducer(initialState, fnMap)(state, action)
      : state),
  });
