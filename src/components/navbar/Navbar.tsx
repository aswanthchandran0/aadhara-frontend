import { ScanText } from "lucide-react"

const Navbar = ()=>{
    return(
        <>
      <nav className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
      <div className="flex items-center">
      <ScanText className="h-10 w-10 text-purple-600 hover:text-purple-500"/>
      <span className="ml-3 text-3xl font-bold bg-gradient-to-r from-purple-600 to-indigo-400  bg-clip-text text-transparent">Aadhaara</span>
      </div>
      </nav>
        </>
    )
}

export default Navbar