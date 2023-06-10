interface prop {
  height: string;
  width: string;
}

function Form({ height, width }: prop) {
  return (
    <div className="h-[564px] w-[577px] box-sizing  border rounded border-#e6e6e6 flex flex-col justify-center  flex-wrap content-center  font-['Poppins']">

      <div className="h-[500px] w-[513px] flex flex-col justify-between">
        <div
          className="w-[513px] h-[364px] bg-white text-#212121 
            flex flex-col space-y-[24px] "
        >
          <div className="w=1 h-[28px] flex justify-between ">
            <span className="w-[124px] text-[20px] ">Create a job</span>{" "}
            <span className="text-[16px] font-medium h-[24px]">Step 1</span>
          </div>

          <form className="flex flex-col space-y-[24px]">
            <div className="flex flex-col space-y-[4px]">
              <label className=" text-[14px] h-[20px] font-medium">
                Job title<span className="text-[#d86161]">*</span>
              </label>
              <input
                className="w-[100%] h-[36px] border-2 border-#e6e6e6 rounded px-[12px] py-[8px] text-[14px] font-normal"
                placeholder="ex. UX UI Designer"
              ></input>
            </div>

            <div className="flex flex-col space-y-[4px]">
              <label className=" text-[14px] h-[20px] font-medium">
                Company name<span className="text-[#d86161]">*</span>
              </label>
              <input
                className="w-[100%] h-[36px] border-2 border-#e6e6e6 rounded px-[12px] py-[8px] text-[14px] font-normal"
                placeholder="ex. Google"
              ></input>
            </div>

            <div className="flex flex-col space-y-[4px]">
              <label className=" text-[14px] h-[20px] font-medium">
                Industry<span className="text-[#d86161]">*</span>
              </label>
              <input
                className="w-[100%] h-[36px] border-2 border-#e6e6e6 rounded px-[12px] py-[8px] text-[14px] font-normal"
                placeholder="ex. Information Technology"
              ></input>
            </div>

            <div className="w-[100%] flex flex-row justify-between">
              <div className="w-[244.5px] flex flex-col space-y-[4px]">
                <label className=" text-[14px] h-[20px] font-medium">
                  Location
                </label>
                <input
                  className="w-[100%] h-[36px] border-2 border-#e6e6e6 rounded px-[12px] py-[8px] text-[14px] font-normal"
                  placeholder="ex. Chennai"
                ></input>
              </div>

              <div className="w-[244.5px] flex flex-col space-y-[4px]">
                <label className=" text-[14px] h-[20px] font-medium">
                  Remote type
                </label>
                <input
                  className="w-[100%] h-[36px] border-2 border-#e6e6e6 rounded px-[12px] py-[8px] text-[14px] font-normal"
                  placeholder="ex. In-office"
                ></input>
              </div>
            </div>
          </form>
        </div>

        <div className="w-[513px] h-[40px] flex justify-end">
          <button className="h-[40px] w-[68px] bg-[#1597E4] text-[16px] text-[#fafafa] leading-[150%] font-medium justify-center border shadow-sm rounded-[6px]">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default Form;
