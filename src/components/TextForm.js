import React,{useState} from 'react'


// console.log(useState('Enter text here'))
export default function TextForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("converted to Uppercase","success");
    }
    const handleLoClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("converted to Lowercase","success");
    }
    const handleClearClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = "";
        setText(newText)
        props.showAlert("The text has been cleared","success");
    }

    const handleCopyClick = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = document.getElementById("myBox");
        newText.select();
        // newText.setSelectionRange(0,9999);
        navigator.clipboard.writeText(newText.value);
        props.showAlert("This text has been Copied","success");
        // setText(newText)
    }
    
    const handleExtraSpaces = ()=>{
        // console.log("Uppercase was clicked " + text);
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert(" Removed Extra Spaces","success");
    }

    const handleOnChange = (event)=>{
        // console.log("on change");
        setText(event.target.value); 
    }
    const [text,setText] = useState('');

  return (
    <>
    <div className="container"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h1>{props.heading}</h1>
      <div className="mb-3">
      {/* <label for="myBox" className="form-label"></label> */}
  <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
  
</div>
<button className="btn-btn-primary mx-2" onClick={handleUpClick}>Convert to upperCase</button>
<button className="btn-btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
<button className="btn-btn-primary mx-2" onClick={handleClearClick}>Clear</button>
<button className="btn-btn-primary mx-2" onClick={handleCopyClick}>copy Text</button>
<button className="btn-btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>

    </div>
    <div className="container my-3"  style={{color: props.mode==='dark'?'white':'#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
    </div>
    </>
  )
}
