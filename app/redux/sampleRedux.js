const types = {
  FIRST_SAMPLE_ACTION: 'FIRST_SAMPLE_ACTION',
}

export const actionCreators = {
  firstSampleAction: (sampleItem) => {
    return {type: types.FIRST_SAMPLE_ACTION, payload: sampleItem}
  },
}

const initialState = {
  sampleItem: null,
}

export const reducer = (state = initialState, action) => {
  const {type, payload} = action

  switch(type) {
    case types.FIRST_SAMPLE_ACTION: {
      return {
        ...state,
        sampleItem: payload,
      }
    }
    default: {
      return state
    }
  }
}
