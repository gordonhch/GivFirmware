import React from 'react'
import ToolbarButton from './ToolBarButton'

const Toolbar = () => {
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
      <div className='bg-white p-18px flex justify-start' >
        <h2>Type</h2>
        <select className='p-2 px-14px min-w-120px bg-white border-F1F2F3 border rounded-md shadow-simple-1'>
          <option>Option 1</option>
          <option>Option 2</option>
          <option>Option 3</option>
        </select>
      </div>
    </>
  )
}
export default Toolbar
