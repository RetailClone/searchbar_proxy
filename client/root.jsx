import React, { useState, useEffect, createContext } from 'react';
import ReactDOM from 'react-dom';

console.log(window.location.hostname)

function MyComponent() {
  const [prodID, changeProdID] = useState(1);
  useEffect(() => {
    console.log('ReRan!')
    window.product_id = prodID;
    window.setProductid = changeProdID.bind(this);

    const scriptHF = document.createElement("script");
    scriptHF.src = `http://${window.location.hostname}:8008/bundle.js`;
    scriptHF.async = true;

    const scriptPV = document.createElement("script");
    scriptPV.src =`http://${window.location.hostname}:7770/bundle.js`;
    scriptPV.async = true;

    const scriptAI = document.createElement("script");
    scriptAI.src = `http://${window.location.hostname}:1701/bundle.js`;
    scriptAI.async = true;

    document.body.appendChild(scriptHF);
    document.body.appendChild(scriptPV);
    document.body.appendChild(scriptAI);
    console.log('End of effect')
  });

  return (
    <div>
      <div id="header" />
      <div id="photo-view" />
      <div id='about' />
      <div id="footer" />
      <div id="test" speach="Oh what a rogue and peasant slave am I!" />
    </div>
  );
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
