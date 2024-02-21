import React from 'react'; //import React library
import {SenatorTable} from './SenatorTable';

/* Your code goes here */
function App({ senatorsList }) {
    return (
      <div className="container">
        <h1>US Senators (Jan 2022)</h1>
        <SenatorTable senatorsList={senatorsList} />
      </div>
    );
  }

export {App};