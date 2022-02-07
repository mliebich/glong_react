import React from 'react';

const initialElements = props => ([{
    id: '1',
    type: 'output',
    data: {
      label: (
        <>
          Welcome to <strong>React Flow!</strong>
        </>
      ),
    },
    position: { x: 250, y: 50 },
  }]);

export default initialElements
