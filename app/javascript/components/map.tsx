import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import ReactFlow, { removeElements, addEdge, MiniMap, Controls, Background } from 'react-flow-renderer';
import userElements from './userelements';

const flowStyles = { height: 300 };

const Flow = () => {
  const [elements, setElements] = useState(userElements);
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

export default Flow
