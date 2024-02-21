import React from 'react';
import ReactDOM from 'react-dom/client';

//render the App component here!
import {App} from './components/App';
import senatorsData from './data/senators.json';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App senatorsList={senatorsData} />);