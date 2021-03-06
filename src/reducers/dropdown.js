import { TOGGLE_DROPDOWN, SELECTED_DROPDOWN, TOGGLE_ALL_DROPDOWN } from '../actions'

const dropdown = (state = {}, action) => {
  switch (action.type) {
    case SELECTED_DROPDOWN: {
      return Object.assign({}, state, {
        selectedDropdown: state.entities.dropdown[action.id]
      })
    }

    case TOGGLE_DROPDOWN: {
      return Object.assign({}, state, {
        isModalDisplay: true,
        dropdowns: state.dropdowns.map(dropdown => {
          if(dropdown.id === action.id) {
            return Object.assign({}, dropdown, !dropdown.isDisplay)
          } else {
            return dropdown
          }
        })
      })
    }
    
    case TOGGLE_ALL_DROPDOWN: {
      return Object.assign({}, state, {
        isModalDisplay: false,
        dropdowns: state.dropdowns.map(dropdown => {
          return dropdown.isDisplay = false
        })
      })
    }
    default:
      return state
  }
}
