import React from 'react'
import {html2canvas} from 'html2canvas'
import { jsPDF } from 'jspdf'

const DownloadPage = (rootElementId,downloadFileName) => {
    const downloasFileDocument = () =>{
        const input = document.getElementById(rootElementId)
        html2canvas(input).then((canvas)=>{
            const imgData = canvas.toDataURL("image/png")
            const pdf =  new jsPDF("p", "pt", "a4")
            pdf.addImage(imgData, "JPEG", 10, 50)
            pdf.save(`${downloadFileName}`)
        })
    }
  return (
    <div>
    <p>orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard 
    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
    It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was
     popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
    and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
    <button onClick={downloasFileDocument}>Download Page</button>
    </div>
  )
}

export default DownloadPage

