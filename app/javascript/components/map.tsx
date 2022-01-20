import React, { useState } from "react";
import ReactDOM from 'react-dom';
import ReactFlow, { removeElements } from 'react-flow-renderer';

const initialElements = [
  {
     id: '1',
     type: 'input',
     data: { label: 'Node 1' },
     position: { x: 5, y: 5 },
   },
   { id: '2', data: { label: 'straight' }, position: { x: 100, y: 100 } },
   { id: '3', data: { label: 'default' }, position: { x: 250, y: 150 } },
   { id: '4', data: { label: 'step' }, position: { x: 500, y: 200 } },
   { id: '5', data: { label: 'smoothstep' }, position: { x: 500, y: 200 } },
   { id: 'e1-2', source: '1', target: '2', type: 'straight' },
   { id: 'e1-3', source: '1', target: '3', type: 'default' },
   { id: 'e1-4', source: '1', target: '4', type: 'step' },
   { id: 'e1-5', source: '1', target: '5', type: 'smoothstep' },
];

const flowStyles = { height: 500 };

const Flow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));

  return (
    <ReactFlow
      elements={elements}
      style={flowStyles}
      onElementsRemove={onElementsRemove}
    />
  );
};

document.addEventListener('DOMContentLoaded', () => {
  const rootEl = document.getElementById('show')
  ReactDOM.render(<Flow />, rootEl)
})
