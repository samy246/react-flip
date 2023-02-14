import React from 'react';
import './Page.css'
import HTMLFlipBook from 'react-pageflip';
import page1 from "../images/j1.png"
import page2 from "../images/j2.png"
import page3 from "../images/j3.png"
import page4 from "../images/j4.png"
import page5 from "../images/j5.png"
import page6 from "../images/j6.png"
import page7 from "../images/j7.png"
import page8 from "../images/j8.png"
import page9 from "../images/j9.png"
import page10 from "../images/j10.png"
import page11 from "../images/j11.png"

const Page=()=>{
    return(
      <>
      <h1>react-pageflip plugin</h1>
      <div id='flippage'>

    
        <HTMLFlipBook width={400} height={520} showCover={true} >
        <div id="1" ref="1" className="demoPage">
          <img className="passport" src={page1} />
        </div>
        <div className="demoPage">
          <img src={page2} />
        </div>
        <div className="demoPage">
        <img src={page3} />
        </div>
        <div className="demoPage">
        <img src={page4} />
        </div>


        <div className="demoPage">
        <img src={page5} />
        </div>


        <div className="demoPage">
        <img src={page5} />
        </div>

        <div className="demoPage">
        <img src={page6} />
        </div>

        <div className="demoPage">
        <img src={page7} />
        </div>

        <div className="demoPage">
        <img src={page8} />
        </div>


        <div className="demoPage">
        <img src={page9} />
        </div>

        <div className="demoPage">
        <img src={page10} />
        </div>

        <div className="demoPage">
        <img src={page11} />
        </div>
     
      </HTMLFlipBook>
      </div>
      </>
    )
}

export default Page