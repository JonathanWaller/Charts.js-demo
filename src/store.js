import { createStore } from 'redux';

import foodReducer from './components/ducks/foodReducer';

const store = createStore( foodReducer );

export default store;