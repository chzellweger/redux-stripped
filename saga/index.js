import * as actions from './actions/actions'

import store from './store'
import * as selectors from './selectors'

store.subscribe(() => {
  const { title, url: video, explanation } = selectors.getImageData(store)
  
  document.querySelector('#title').innerHTML = title
  document.querySelector('#video').src = video
  document.querySelector('#explanation').innerHTML = explanation
})

store.dispatch(actions.getImage())
