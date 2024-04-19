import React from 'react'
import InTableSelect from './InTableSelect'
import TextareaAutosize from 'react-textarea-autosize';


interface RegRowProps {
    title: string;
}

const RegRow: React.FC<RegRowProps> = (props) => {
    return (
        <>
            <div className="reg-row grid grid-cols-10 ">
                <div className="border row-span-2 grid">
                    <h4 className='bg-white w-full px-2 content-center'>{props.title}</h4>
                </div>
                <div className="border row-span-2 grid">
                    <input type='text' placeholder='Address' className='bg-white w-full px-2'></input>
                </div>
                <div className="border row-span-2 col-span-2 grid ">
                    <InTableSelect placeholder='Type' className='bg-white w-full px-2'
                        options={[
                            { value: 'numeric', label: 'Numeric' },
                            { value: 'multiplication/division', label: 'Multiplication / Division' },
                            { value: 'suffix/prefix', label: 'Suffix/Prefix' },
                            { value: 'enum', label: 'Enum' },
                            { value: 'ascii', label: 'ASCII' },
                            { value: 'time', label: 'Time' },
                            { value: 'single-set', label: 'Single Set' },
                            { value: 'toggle', label: 'Toggle' },
                            { value: 'bit-field', label: 'Bit Field' },
                            { value: 'complex', label: 'Complex' },
                        ]} >
                    </InTableSelect>
                    <InTableSelect placeholder='To/From' className='bg-white w-full px-2'
                        options={[
                            { value: 'to-inverter-value', label: 'To Inverter Value' },
                            { value: 'from-inverter-value', label: 'From Inverter Value' },
                        ]} >
                    </InTableSelect>
                </div>

                <div className="col-span-6 grid grid-cols-2 grid-rows-1 content-stretch">
                    <div className="border grid">
                        <TextareaAutosize placeholder='Description' className='bg-white w-full p-2 focus-visible:red' />

                    </div>
                    <div className="border grid">
                        <TextareaAutosize placeholder='Notes' className='bg-white w-full p-2 focus-visible:red' />
                    </div>
                </div>
                <div className="col-span-6 grid grid-cols-4">
                    <div className="border ">
                        <input type='text' placeholder='Perm' className='bg-white w-full p-2 focus-visible:red'></input>
                    </div>
                    <div className="border ">
                        <input type='text' placeholder='Validation' className='bg-white w-full p-2 focus-visible:red'></input>
                    </div>
                    <div className="border ">
                        <input type='text' placeholder='Parsing' className='bg-white w-full p-2 focus-visible:red'></input>
                    </div>
                    <div className="border ">
                        <input type='text' placeholder='Relation' className='bg-white w-full p-2 focus-visible:red'></input>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RegRow