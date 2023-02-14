import { FlippingPages } from 'flipping-pages';
import 'flipping-pages/dist/style.css';
import { useState } from 'react';

import './flippage.css'
import page1 from "../images/j1.png"
import page2 from "../images/j2.png"
import page3 from "../images/j3.png"
import page4 from "../images/j4.png"
import page5 from "../images/j5.png"







const FlippingPage = () => {
    const [selected, setSelected] = useState(0);

    const back = () => {
        setSelected(selected => Math.max(selected - 1, 0));
    };

    const next = () => {
        setSelected(selected => Math.min(selected + 1, 2));
    };

    return (
        <div>
            <h1>flipping pages plugin</h1>
            <div className="fpages">
                <FlippingPages
                    direction="right-to-left"
                    onSwipeEnd={setSelected}
                    selected={selected}
                
                >
                    <div className="fpage fpage1">
                        
                    <img className="passport" src={page1} />
                        </div>
                    <div className="fpage fpage2"><img src={page2} /></div>
                    <div className="fpage fpage3"><img src={page3} /></div>
                </FlippingPages>
            </div>
            <button onClick={back}>Back</button>
            <button onClick={next}>Next</button>
        </div>
    );
};

export default FlippingPage;