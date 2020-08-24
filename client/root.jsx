import React, { useState, useEffect, createContext } from 'react';
import ReactDOM from 'react-dom';

function MyComponent() {
  const [prodID, changeProdID] = useState(1);
  const [shoppingCart, setShoppingCart] = useState(2);
  useEffect(() => {
    window.product_id = prodID;
    window.setProductid = changeProdID.bind(this);
    window.shoppingCart = shoppingCart;
    window.setShoppingCart = setShoppingCart.bind(this);

    const scriptHF = document.createElement("script");
    scriptHF.src = `http://ec2-18-191-153-215.us-east-2.compute.amazonaws.com/bundle.js`;
    scriptHF.async = true;

    const scriptPV = document.createElement("script");
    scriptPV.src =`http://ec2-18-191-90-13.us-east-2.compute.amazonaws.com:7770/bundle.js`;
    scriptPV.async = true;

    const scriptAI = document.createElement("script");
    scriptAI.src = `http://ec2-18-191-7-97.us-east-2.compute.amazonaws.com:1701/bundle.js`;
    scriptAI.async = true;

    const scriptRec = document.createElement("script");
    scriptRec.src = `http://ec2-18-222-181-197.us-east-2.compute.amazonaws.com:4040/bundle.js`;
    scriptRec.async = true;

    const scriptRev = document.createElement("script");
    scriptRev.src = `http://ec2-52-14-146-214.us-east-2.compute.amazonaws.com:8080/bundle.js`;
    scriptRev.async = true;

    document.body.appendChild(scriptHF);
    document.body.appendChild(scriptPV);
    document.body.appendChild(scriptAI);
    document.body.appendChild(scriptRec);
    document.body.appendChild(scriptRev);
  });

  return (
    <div>
      <div id="header" />
      <div id="photo-view" />
      <div id="about" />
      <div id="rec" />
      <div id="Review" />
      <div id="footer" />
    </div>
  );
}

ReactDOM.render(<MyComponent />, document.getElementById('root'));
