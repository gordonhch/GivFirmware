import React, { SetStateAction, useState } from 'react'
import ToolbarButton from './ToolBarButton'
// import Select from 'react-select';



const Toolbar = () => {

  // const [animal, setAnimal] = useState(null);
  // const handleChange = () => {
  //   console.log("value:");
  //   // setAnimal(value);
  // };


  return (
    <>
      <div className='p-18px bg-white border-F1F2F3 space-x-14px border rounded-md shadow-simple-1'>
        <div className='flex justify-between p-18px space-x-14px  border-F1F2F3 border rounded-md shadow-simple-1'>
          <div className='space-x-14px'>
            <ToolbarButton>File...</ToolbarButton>
          </div>
          <div className='space-x-14px'>
            <ToolbarButton>Previous Bank</ToolbarButton>
            <ToolbarButton>Next Bank</ToolbarButton>
            <ToolbarButton>Compare With...</ToolbarButton>
          </div>
        </div>
      


      
      </div>
    </>
  )
}
export default Toolbar
