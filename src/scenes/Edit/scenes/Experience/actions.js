export const DELETE_PROJECT_FAILURE = 'SCENES/EDIT/DELETE_PROJECT_FAILURE'
export const DELETE_PROJECT_REQUEST = 'SCENES/EDIT/DELETE_PROJECT_REQUEST'
export const DELETE_PROJECT_SUCCESS = 'SCENES/EDIT/DELETE_PROJECT_SUCCESS'

export const deleteProject = (address, id) => (dispatch, getState, { api }) => dispatch({
  types: [DELETE_PROJECT_REQUEST, DELETE_PROJECT_SUCCESS, DELETE_PROJECT_FAILURE],
  promise: api.projects.delete(address, id)
    .then(response => {
      console.log(response)
    })
})