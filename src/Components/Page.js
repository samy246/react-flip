import React, { useState } from 'react';
import './Page.css'
import HTMLFlipBook from 'react-pageflip';
import { pdfjs, Document, Page as ReactPdfPage } from "react-pdf";
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


import samplePDF from "../images/menu.pdf"
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;


const width = 400;
const height = 550;



const Pdf = React.forwardRef(({ pageNumber }, ref) => {
  
  // console.log("pageNumber",pageNumber);
  // console.log("ref",ref);
//   const onDocumentLoadSuccess=(pdf)=>  {
//     console.log('Document',pdf);
//     setNumPages(pdf?.numPages);
// }
  return (
    
    <div ref={ref}>
      <ReactPdfPage pageNumber={pageNumber} width={width} />
   
    </div>
  );
});
const Page=()=>{
  const [ numPages, setNumPages ] = useState(null);
    return(
      <>
      <h1>react-pageflip plugin</h1>
      {/* <div id='flippage'> */}

      <Document file={samplePDF} onLoadSuccess={({numPages})=>setNumPages(numPages)}>
        <HTMLFlipBook width={width} height={height} showCover={true} >

{
Array.apply(null, Array(numPages))
.map((x, i)=>i+1)
.map(page => <Pdf pageNumber={page}/>)
}


















{/* {
console.log(Pdf)
}

{
  // [...Array(30)].map((i,index)=>{
  //   console.log("i",index);
  //   // <Pdf key={i} pageNumber={index+1}></Pdf>
  // })
} */}

        {/* <div id="1"  className="demoPage"> */}
        {/* <Pdf pageNumber={1} />
        <Pdf pageNumber={2} />
        <Pdf pageNumber={3} />
        <Pdf pageNumber={4} />
        <Pdf pageNumber={5} />
        <Pdf pageNumber={6} />
        <Pdf pageNumber={7} />
        <Pdf pageNumber={8} />
        <Pdf pageNumber={9} />
        <Pdf pageNumber={10} />
        <Pdf pageNumber={11} /> */}
          {/* <img className="passport" src={page1} /> */}
        {/* </div> */}
        {/* <div className="demoPage">
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
        </div> */}
     
      </HTMLFlipBook>
      </Document>
      {/* </div> */}
      </>
    )
}

export default Page