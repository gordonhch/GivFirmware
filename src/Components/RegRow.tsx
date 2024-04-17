import React from 'react'
import InTableSelect from './InTableSelect'


interface RegRowProps {
    title: string;
}

const RegRow: React.FC<RegRowProps> = (props) => {
    return (
        <>
            <div className="reg-row grid grid-cols-9 grid-rows-2">
                <div className="border row-span-2"><h4>{props.title}</h4></div>
                <div className="border row-span-2">
                    <input type='text' placeholder='Address' className='bg-white w-full px-2'></input>
                </div>
                <div className="border row-span-2">
                    <InTableSelect placeholder='Type'
                        options={[
                            { value: 'numeric', label: 'Numeric' },
                            { value: 'multiplication/division', label: 'Multiplication/Division' },
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
                    <InTableSelect placeholder='To/From'
                        options={[
                            { value: 'to-inverter-value', label: 'To Inverter Value' },
                            { value: 'from-inverter-value', label: 'From Inverter Value' },
                        ]} >
                    </InTableSelect>
                </div>
                {/* <div className="border col-span-3">
                    <InTableSelect placeholder='description'
                        options={[
                            { value: 'chocolate', label: 'Chocolate' },
                            { value: 'strawberry', label: 'Strawberry' },
                            { value: 'vanilla', label: 'Vanilla' },
                        ]} >
                    </InTableSelect>

                </div> */}
                <div className="border col-span-3">
                    <input type='textarea' placeholder='Description' className='bg-white w-full px-2'></input>
                </div>
                <div className="border col-span-3">
                    <input type='textarea' placeholder='Notes' className='bg-white w-full px-2'></input>
                </div>
                <div className="col-span-6 grid grid-cols-4">
                    <div className="border ">
                        <input type='text' placeholder='Perm' className='bg-white w-full  px-2'></input>
                    </div>
                    <div className="border ">
                        <input type='text' placeholder='Validation' className='bg-white w-full px-2'></input>
                    </div>
                    <div className="border ">
                        <input type='text' placeholder='Parsing' className='bg-white w-full px-2'></input>
                    </div>
                    <div className="border ">
                        <input type='text' placeholder='Relation' className='bg-white w-full px-2'></input>
                    </div>
                </div>
            </div>
        </>
    )
}
export default RegRow