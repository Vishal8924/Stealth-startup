interface prop{
    height:string;
    width:string;
}

function Form2({height,width}:prop){

    return(
        <div className="h-[564px] w-[577px] box-sizing  border rounded border-#e6e6e6 flex flex-col justify-center  flex-wrap content-center  font-['Poppins']">

        <div className='h-[500px] w-[513px] flex flex-col justify-between'>
        <form className="h-[364px] w-[100%] flex flex-col space-y-[24px] text-[#212121]">

            <div className="w-[100%] h-[28px] flex justify-between "><span className="w-[124px] text-[20px] ">Create a job</span> <span className="text-[16px] font-medium h-[24px]">Step 2</span></div>

            
            
            <div className='w-[100%] flex flex-row justify-between'>

            <div className="w-[244.5px] flex flex-col space-y-[4px]">
                <label className=" text-[14px] h-[20px] font-medium">Experience</label>
                <input className="w-[100%] h-[36px] border-2 border-#e6e6e6 rounded px-[12px] py-[8px] text-[14px] font-normal" placeholder="Minimum"></input>
            </div>

            <div className="w-[244.5px] flex flex-col space-y-[4px]">
                <label className=" text-[14px] h-[20px] font-medium"></label>
                <input className="w-[100%] h-[36px] border-2 border-#e6e6e6 rounded px-[12px] py-[8px] text-[14px] font-normal" placeholder="Maximum"></input>
            </div>
            </div>

            <div className='w-[100%] flex flex-row justify-between'>

            <div className="w-[244.5px] flex flex-col space-y-[4px]">
                <label className=" text-[14px] h-[20px] font-medium">Salary</label>
                <input className="w-[100%] h-[36px] border-2 border-#e6e6e6 rounded px-[12px] py-[8px] text-[14px] font-normal" placeholder="Minimum"></input>
            </div>

            <div className="w-[244.5px] flex flex-col space-y-[4px]">
                <label className=" text-[14px] h-[20px] font-medium"></label>
                <input className="w-[100%] h-[36px] border-2 border-#e6e6e6 rounded px-[12px] py-[8px] text-[14px] font-normal" placeholder="Maximum"></input>
            </div>
            </div>

            <div className="flex flex-col space-y-[4px]">
            <label className=" text-[14px] h-[20px] font-medium">Total employee</label>
            <input className="w-[100%] h-[36px] border-2 border-#e6e6e6 rounded px-[12px] py-[8px] text-[14px] font-normal" placeholder="ex. 100"></input>
            </div>

            <div className=' flex flex-col space-y-[4px]'>
                <label className="h-[20px] w-[100%] text-14px font-medium">Apply type</label>
                <div className="h-[36px] w-[100%]  flex flex-wrap justify-start space-around content-center">
                    <div className="h-[20px] flex space-x-[16px]">
                        <div className="h-[20px] text-14px flex space-x-[4px]">
                            <input type='radio'></input>
                            <label className='text-[14px] text-[#7a7a7a]'>Quick apply</label>
                        </div>
                        <div className="h-[20px] text-14px flex space-x-[4px]">
                            <input type='radio'></input>
                            <label className='text-[14px] text-[#7a7a7a]'>External apply</label>
                        </div>
                    </div>
                </div>

                </div>

        </form>
        <div className="w-[513px] h-[40px] flex justify-end">
                <button className="h-[40px] w-[68px] bg-[#1597E4] text-[16px] text-[#fafafa] leadi ng-[150%] font-medium justify-center border shadow-sm rounded-[6px]">Save</button>
            </div>
        </div>
        </div>
        
        
        )
}

export default Form2