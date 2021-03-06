import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css'
import App from './App';
import {GlobalStyles} from './global-style'
import { firebase } from './lib/firebase.prod.js'
import {FirebaseContext} from './context/firebase'

ReactDOM.render(<>
	<FirebaseContext.Provider value={{firebase}}>
		<GlobalStyles />
		<App />
	</FirebaseContext.Provider>
	
	</>, document.getElementById('root')
);
