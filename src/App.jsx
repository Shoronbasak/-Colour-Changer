import { useState } from "react"

function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      {/* onClick here exepects that you are going to give an function to it , and here we are giving an function reference , but here the thing is we can't pass parameter now inside it (which is an syntax issue not an issue related to js or react) 
      so we are calling an function inside an function using arrow function , so that the attribute part and the function part both gets resolved*/}
      {/* why two curly braces were used in style part. coz one to show that it is a js statement + the second one for the object. style is an object. */}
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 "><div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
        <button onClick={() => setColor("red")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={() => setColor("Blue")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}}>Blue</button>
        <button onClick={() => setColor("green")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"green"}}>Green</button>
        <button onClick={() => setColor("Orange")} className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Orange"}}>Orange</button>
      </div></div>
    </div>
  )
}

export default App
