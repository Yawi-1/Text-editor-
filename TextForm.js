import React, {useState} from 'react'

const TextForm=()=> {
    const[text,setText]=useState('');
     function convertUp() {
        let newText = text.toUpperCase();
        setText(newText);
     }
     function convertLo() {
      let newText = text.toLowerCase();
      setText(newText);
   }
    function clear() {
        setText('');
    }
    function copy() {
      var text = document.getElementById('tf');
      text.select();
      navigator.clipboard.writeText(text.value);
    }
      function extraSpace() {
        var newtext = text.split(/[ ]+/);
        setText(newtext.join(" "));
      }
      function paste() 
      {
        var text = document.getElementById('tf');

      }
  return (
   <> <div >
<div class="mb-3 container my-1">
    <h1 className='bg-black text-white rounded'>This will perform all the operations mentioned below.</h1>
  <textarea id="tf" placeholder="Enter your Text"class="form-control border-primary" value={text} onChang={(e)=>setText(e.target.value)}  rows="8"></textarea>
</div>
<button className="btn btn-success " onClick={convertUp}>ABC</button>
<button className="btn btn-success m-1 " onClick={convertLo}>abc</button>
<button className="btn btn-primary m-1 " onClick={copy}>Copy</button>
<button className="btn btn-primary m-1 " onClick={paste}>Paste</button>
<button className="btn btn-danger m-1 " onClick={extraSpace}><small>Extra Space</small></button>
<button className="btn btn-danger m-1 " onClick={clear}>Clear</button>

    </div>
    <div className="container">
        <h1 className=''>Your Text Summary</h1>
        <p>{text.split(' ').length} Words {text.length} Characters</p>
        <p>{0.008 *text.split(' ').length } Minutes Read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
  </>
  )
}
export default TextForm;