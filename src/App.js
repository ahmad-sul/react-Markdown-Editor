
import React, {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Badge} from 'react-bootstrap'
import Markdown from './component/Markdown'
import Preview from './component/Preview'

function App() {
  const[text,setText] = useState('')

  return (
    <div className="container">
     <div className='jumbotron'>
       <h1 className='text-center'> <Badge variant="secondary">Markdown Editor</Badge></h1>
     </div>

<div className="row justify-content-center mt-5" style={{position:'relative'}}>
<div className="col-md-5 text-center"> <h2 className=''> <Badge variant="success">Markdown </Badge></h2>
<Markdown text={text} setText={setText}/>
</div>
<div className="col-md-5 text-center" > <h2 className=''> <Badge variant="warning">Preview</Badge></h2>
<Preview text={text} />
</div>
</div>

    </div>
  );
}


export default App;