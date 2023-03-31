import React from 'react'
import  './Style.css'


function Upload() {
  return (
    <div>
        <div>
          <h1>Upload</h1>
        </div>
         <input class="select-file" type="file" name="file" id="file" />
          <div className="desc">
            <input class="text-input" type="text" placeholder="Image description"/>
          </div>
         <input class="button" type="submit" value="Upload" />

         
         
    </div>
  )
}

export default Upload