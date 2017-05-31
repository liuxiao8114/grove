const dropdown = (dropdowns, action) => {
  if(action.type !== '') return dropdowns
  return dropdowns.map(dropdwon => {
    if(dropdown.id === action.id) {
      return Object.assign({}, dropdown, !dropdown.isDisplay)
    } else {
      return dropdown
    }
  })
}
