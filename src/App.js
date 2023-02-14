import React from 'react';

import Page from "./Components/Page"
import FlippingPages from './Components/FlippingPage';


function App() {
  return (
    <div className="App">
      {/* reat-pageflip */}
   <Page/>
   {/* flipping-pages */}
   <hr></hr>
<FlippingPages/>
    </div>
  );
}

export default App;
