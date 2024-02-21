import React from 'react'; //import React library

/* Your code goes here */
function TableHeader({ columnNames }) {
    return (
      <thead>
        <tr>
          {columnNames.map((name, index) => <th key={index}>{name}</th>)}
        </tr>
      </thead>
    );
  }

export {TableHeader};