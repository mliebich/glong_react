import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactFlow, { removeElements, addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';
import initialElements from './initial';

const flowStyles = { height: 300 };

const Flow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
    console.log(flowStyles);

  return (
    <ReactFlow
      elements={elements}
      style={flowStyles}
      onElementsRemove={onElementsRemove}
    />
  );
};

export default Flow
