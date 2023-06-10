import Form from "./form"
import Form2 from "./form2"
import Multiple from "./multipleview"
function App() {
  return (
    <>
    <div className="w-3000px flex flex-col flex-wrap content-center gap-y-[50px] mt-[50px]">
      <Form height="564px" width="577px"></Form>
      
      <Form2 height='564px' width="577px"></Form2>
      <Multiple> </Multiple>
      </div>
    </>
  )
}

export default App