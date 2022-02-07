import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Flow from './map';

document.addEventListener('DOMContentLoaded', () => {
  const map = document.getElementById('karte')
  if (map) {
    console.log('ok, div karte gefunden')
  }
  ReactDOM.render(
  <Flow />, map)
})
