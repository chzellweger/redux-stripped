export const requestImage = () => ({
  type: 'REQUEST_IMAGE'
})

export const setImage = data => ({
  type: 'SET_IMAGE',
  data: {
    explanation: data.explanation,
    url: data.url,
    title: data.title
  }
})

export const catchError = error => ({
  type: 'ERROR',
  error
})

export const getImage = () => ({
  type: 'INITIALIZE_IMAGE_SAGA'
})
