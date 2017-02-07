export const addNote = ({ dispatch}) => {
  dispatch('ADD_NOTE')
}
export const editNote = ({ dispatch }, e) => {
  dispatch('EDIT_NOTE', e.target.value)
}
