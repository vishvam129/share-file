import React from 'react'
import './App.css'
import { useRef, useState, useEffect } from 'react'
import uploadFile from './services/api'
const App = () => {
  const fileInput = useRef(null)
  const onupload = () => {
    fileInput.current.click();
  }
  const [file, setFile] = useState("")
  const onFileChange = (e) => {
    setFile(e.target.files[0])
  }
  console.log(file)
  useEffect(() => {
    const getimg = async () => {
      if (file) {
        const formData = new FormData()
        formData.append('name', file.name)
        formData.append("file", file)

        await uploadFile(formData)
      }
    }
    getimg()
  }, [file])
  return (
    <div className='wapper0'>
      <div className='wapper'>
        <h1>Share File</h1>
        <p>Upload and share the download link</p>
        <button className='btn' onClick={onupload}>Upload</button>
        <input type='file' ref={fileInput}
          style={{ display: 'none' }}
          onChange={onFileChange} />
      </div>
    </div>
  )
}

export default App