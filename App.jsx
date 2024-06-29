import Footer from "./Components/Footer"
import Header from "./Components/Header"
import Body from "./Components/Body"

function App() {
  

  return (
    <>
       <h1 className="bg-red-400 font-bold underline">
   
    </h1>
    <div className="bg-red-400 min-h-screen px-6 py-3 flex flex-col gap-16 md:px-10 md:py-7 md:justify-between lg:px-16 lg:py-10">
      <Header/>
    
      <Body/>
      <Footer/>
    </div>
    </>
  )
}

export default App
