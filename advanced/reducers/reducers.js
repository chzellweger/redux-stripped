import { combineReducers } from 'redux'

import { counter } from './counter'
import { bigCounter } from './bigCounter'

const app = combineReducers({counter, bigCounter})

export default app