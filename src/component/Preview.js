import React from 'react'
import marked from 'marked'

export default function Preview({text}) {

const html =marked(text)

    return (
      
        <div className='bg-dark border text-white' style={{height:'400px', padding:'10px'}} dangerouslySetInnerHTML={{__html:html}}>
        
        </div>
     
    )
}
