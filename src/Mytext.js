import React, {useState} from 'react'
  
  export default function MyText(props) {
    const fun=()=>{
       let newtext=text.toUpperCase();
       setText(newtext);
       
    }
    const fun2=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const fun3=()=>{
       setText("");
    }
   const setarea=(e)=>{
        setText(e.target.value);
    }
    const [text,setText]=useState("enter text");
    return (
<div>
  <div className="container my-4 "style={{color:props.mode==='dark'?'white':'black'}} >
    <textarea className="mx-6 my-12" value={text} style={{backgroundColor:props.mode=='light'?'white':'#1a2430',color:props.mode==='dark'?'white':'black'}}  onChange={setarea} name="textarea" id="text" cols="70" rows="10"></textarea>
   </div>
   <div className="btn mx-5">
      <button type="button" className="btn btn-primary mx-4" onClick={fun} >ToUpperCase</button>
      <button type="button" className="btn btn-primary mx-4" onClick={fun2} >TolowerCase</button>
      <button type="button" className="btn btn-primary mx-4" onClick={fun3} >Clear</button>
   </div>
   <div className='word-count mx-5 my-4'>
   <p style={{color:props.mode==='dark'?'white':'black'}} >words{text.split(" ").length-1} Character {text.length}</p>  
   </div>
   <div className="preview mx-5 my-2">
    <p style={{color:props.mode==='dark'?'white':'black'}}>{text}</p>
   </div>

</div>
    );
  }
