import React, { useEffect, useState } from 'react'
import RegRow from './RegRow'
import ToolbarButton from './ToolBarButton'

const FoldableScratchPad = () => {
  const [foldState, setFoldState] = useState(false)

  const toggleFoldState = () => {
    setFoldState(!foldState)
    //   console.log('foldState', foldState)
  }
  return (
    <>
      {foldState ? (
        <div className='sticky bg-EEF2F6 shadow-inner-1 bottom-0 m-auto w-full left-0 justify-center'>
          <div className='max-w-screen-1440px m-auto  py-5 w-full'>
            <div className=' bg-white rounded-[28px]  m-auto grid gap-5 pt-5 p-14px justify-items-center'>
              <ToolbarButton className='max-w-10 ' onClick={toggleFoldState}>
                Close
              </ToolbarButton>
              <RegRow title='Scratch Pad 1'></RegRow>
              <RegRow title='Scratch Pad 2'></RegRow>
            </div>
          </div>
        </div>
      ) : (
        <div className='sticky grid bottom-0 m-auto w-full left-0 justify-center'>
          <div className=' pt-5'>
            <ToolbarButton
              className='max-w-10 justify-self-center '
              onClick={toggleFoldState}
            >
              Open
            </ToolbarButton>
          </div>
        </div>
      )}
    </>
  )
}
export default FoldableScratchPad
