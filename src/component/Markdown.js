import React from 'react'

export default function Markdown({text,setText}) {


    return (
    <>
      <textarea onChange={(e)=>setText(e.target.value)} style={{width:'100%', height:'400px', padding:'10px'}} value={text}></textarea>

      <img src="https://st2.depositphotos.com/1688079/5466/i/600/depositphotos_54665347-stock-photo-refresh-rotate-icon-glossy-green.jpg" width='40' onClick={()=>setText('')} alt="" style={{position:'absolute', bottom:'20px', right:'30px', cursor:'pointer'}}/>
      </>
    )
}

