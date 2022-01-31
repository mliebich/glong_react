
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import ReactFlow, {
  removeElements,
  addEdge,
  MiniMap,
  Controls,
  Background,
} from 'react-flow-renderer';

import initialElements from './initial';

const onLoad = (reactFlowInstance) => {
  console.log('flow loaded:', reactFlowInstance);
  reactFlowInstance.fitView();
};

const OverviewFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) =>
    setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  return (
    <ReactFlow
      style={{ height: 800 }}
      elements={elements}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
      onLoad={onLoad}
      snapToGrid={true}
      snapGrid={[15, 15]}
    >
      <MiniMap
        nodeStrokeColor={(n) => {
          if (n.style?.background) return n.style.background;
          if (n.type === 'input') return '#0041d0';
          if (n.type === 'output') return '#ff0072';
          if (n.type === 'default') return '#1a192b';

          return '#eee';
        }}
        nodeColor={(n) => {
          if (n.style?.background) return n.style.background;

          return '#fff';
        }}
        nodeBorderRadius={2}
      />
      <Controls />
      <Background color="#aaa" gap={16} />
    </ReactFlow>
  );
};


document.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('map')
  const data = JSON.parse(container.getAttribute('data'))
  console.log(data)
  ReactDOM.render(<OverviewFlow />, container)
})
