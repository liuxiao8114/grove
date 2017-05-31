import { TOGGLE_DROPDOWN, TOGGLE_ALL_DROPDOWN } from '../actions'

const dropdown = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_DROPDOWN: {
      return state.map(dropdown => {
        if(dropdown.id === action.id) {
          return Object.assign({}, dropdown, !dropdown.isDisplay)
        } else {
          return dropdown
        }
      })
    }

    case TOGGLE_ALL_DROPDOWN: {
      return state.map()
    }

    default:
      return state

  }

}
