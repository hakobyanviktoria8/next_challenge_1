import React from 'react'

function Contact() {
  return (
        <div className='border h-fit p-12'>
           <div className='flex justify-between text-gray-600 mb-8'>
                <div className='w=1/2'>
                    <h2 className='text-5xl mb-5'>Straight Bill of Lading<br/>
                        Commercial - Short Form
                    </h2>
                    <h4 className='text-2xl'>NOT NEGOTIABLE</h4>
                </div>
                <div className='w-1/2 flex justify-between'>
                    <div>
                        <h4  className='text-2xl'>
                            FreshPath Logistics<br/>
                            5712 59 Street NW<br/>
                            Edmonton, AB T6B 3L4
                        </h4>
                        <p>For Quotes please email</p>
                        <p>quotes@freshpath.ca</p>
                        <p>or call (780) 469-1900</p>
                    </div>
                    <div className='border flex justify-center items-center px-14 rounded-full text-2xl'>
                        <h2>LOGO</h2>
                    </div>
                </div>
            </div>
            
            {/* table */}
            <div className='border'>
                {/* 1row */}
                <div className='flex'>
                    <p className='w-1/2 p-3 border'>SHIPMENT DATE</p>
                    <p className='w-1/2 p-3 border'>BILL OF LADING NUMBER</p>
                </div>
                {/* 2row */}
                <form className='flex'>
                    {/* 1col */}
                    <div className='w-1/2 p-3 border'>
                        <div className='mb-3'>COSIGNEE</div>
                        <div>
                            <input className='border p-3 w-full' type="text" placeholder='COMPANY NAME' name="COMPANY_NAME"/>
                            <input className='border p-3 w-full' type="text" placeholder='STREET' name="STREET"/>
                            <input className='border p-3 w-full' type="text" placeholder='CITY' name="CITY"/>
                            <input className='border p-3 w-full' type="text" placeholder='PHONE NUMBER' name="PHONE_NUMBER"/>
                            <input className='border p-3 w-full' type="text" placeholder='CONTACT NAME' name="CONTACT_NAME"/>
                        </div>
                    </div>
                    {/* 2col */}
                    <div className='w-1/2 p-3 border'>
                        <div className='mb-3'>COSIGNEE</div>
                        <div>
                            <input className='border p-3 w-full' type="text" placeholder='COMPANY NAME' name="COMPANY_NAME"/>
                            <input className='border p-3 w-full' type="text" placeholder='STREET' name="STREET"/>
                            <input className='border p-3 w-full' type="text" placeholder='CITY' name="CITY"/>
                            <input className='border p-3 w-full' type="text" placeholder='PHONE NUMBER' name="PHONE_NUMBER"/>
                            <input className='border p-3 w-full' type="text" placeholder='CONTACT NAME' name="CONTACT_NAME"/>
                        </div>
                    </div>
                </form>
            </div>
            <table>
                <tr>
                    <td> </td>
                    <td> </td>
                </tr>
                <tr>

                </tr>
            </table>
        </div>
  )
}

export default Contact