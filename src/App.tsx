import { useState } from 'react'
// import reactLogo from './assets/react.svg';
// import viteLogo from '/vite.svg';
import './App.css'
import Toolbar from './Components/Toolbar'
import ToolbarButton from './Components/ToolBarButton'
import ReactSelect from './Components/ReactSelect'
import FormLabel from './Components/FormLabel'
import '@fontsource/open-sans' // Defaults to weight 400.
import InTableSelect from './Components/InTableSelect'
import RegRow from './Components/RegRow'
import FoldableScratchPad from './Components/FoldableScratchPad'

function App () {
  // const [count, setCount] = useState(0);

  return (
    <>
    <div className='font-body relative max-w-screen-1440px m-auto grid gap-5 py-5 pb-0'>
      <Toolbar></Toolbar>

      <div className='grid p-14px bg-white gap-4'>
        <div className='  '>
          <div className='bg-white flex justify-start'>
            <FormLabel>Type</FormLabel>

            <ReactSelect
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
              ]}
            />
            <FormLabel>Inverter</FormLabel>
            <ReactSelect
              options={[
                { value: 'chocolate', label: 'Chocolate' },
                { value: 'strawberry', label: 'Strawberry' },
                { value: 'vanilla', label: 'Vanilla' }
              ]}
            />
          </div>
        </div>
        <div className='bg-white flex justify-start'>
          <FormLabel>Version Name</FormLabel>
          <input
            type='text'
            className='p-14px bg-white border-F1F2F3 space-x-14px border rounded-md shadow-simple-1'
            placeholder='Choose Version No. or Name'
          ></input>
        </div>

        <div className='bg-white grid justify-start border border-teal-500 p-18px grid-cols-1'>
          <div className=' '>
            <div className='flex p-x-14px w-full gap-4'>
              <h3 className=''>Bank 1</h3>
              <div className='relative flex flex-grow items-center'>
                <div className='flex-grow border-t border-gray-200'></div>
                {/* <span className="flex-shrink mx-4 text-gray-400">---</span> */}
                <div className='flex-grow border-t border-gray-200'></div>
              </div>
            </div>
          </div>

          {/* reg 1 */}
          <RegRow title='Reg 1'></RegRow>
          <RegRow title='Reg 2'></RegRow>
          <RegRow title='Reg 3'></RegRow>
          <RegRow title='Reg 4'></RegRow>
          <RegRow title='Reg 5'></RegRow>
          <RegRow title='Reg 6'></RegRow>
          <RegRow title='Reg 7'></RegRow>
          <RegRow title='Reg 8'></RegRow>
        </div>

        <div className='bg-white grid justify-start border border-yellow-500 p-18px grid-cols-1'>
          <div className=' '>
            <div className='flex p-x-14px w-full gap-4'>
              <h3 className=''>Bank 2</h3>
              <div className='relative flex flex-grow items-center'>
                <div className='flex-grow border-t border-gray-200'></div>
                {/* <span className="flex-shrink mx-4 text-gray-400">---</span> */}
                <div className='flex-grow border-t border-gray-200'></div>
              </div>
            </div>
          </div>

          {/* reg 1 */}
          <RegRow title='Reg 1'></RegRow>
          <RegRow title='Reg 2'></RegRow>
          <RegRow title='Reg 3'></RegRow>
          <RegRow title='Reg 4'></RegRow>
          <RegRow title='Reg 5'></RegRow>
          <RegRow title='Reg 6'></RegRow>
          <RegRow title='Reg 7'></RegRow>
          <RegRow title='Reg 8'></RegRow>
        </div>
      </div>
      </div>
      <FoldableScratchPad></FoldableScratchPad>
    </>
  )
}

export default App
