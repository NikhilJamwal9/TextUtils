import React ,{useState}from 'react'




function TextForm(props) {


const[text,setText]= useState("Enter text here");

const handleUpClick=()=>{
let newText = text.toUpperCase();
setText(newText)

}

const handleOnChange=(event)=>{
console.log("on change");
 setText(event.target.value);
  }


  const handleClear=()=>{

let text = (" ");
setText(text);

  }
 


  return (
   <>
  <div className='container ' style={{color:props.mode === 'dark'? 'white':'black'}}>
    <h1>{props.heading}</h1>

<div className="mb-3 ">
 
  <textarea className="form-control"  value={text} onChange={handleOnChange} style={{backgroundColor : props.mode === 'dark'? 'grey': 'white'}} id="myBox" rows="8"></textarea>
</div>
 <button className="btn btn-primary " onClick={handleUpClick}>convert to uppercase</button>

 <button className="btn btn-primary mx-2"  onClick={handleClear}>Clear</button>

</div>

<div className="container my-3">
<h2>Text Summary  </h2>
<p>{text.split(" ").length}  words and  {text.length}  characters</p>
<p> {0.008 *text.split("").length } minutes read</p>
<h3>Preview</h3>
<p>{text.length >0 ?text:"Enter something to preview here"}</p>
</div>
</>

  )
}

export default TextForm;


