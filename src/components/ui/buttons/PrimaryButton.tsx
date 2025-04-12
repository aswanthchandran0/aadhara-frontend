
import { LucideIcon } from "lucide-react"
import { useEffect, useState } from "react";
interface Props{
    Icon?:LucideIcon
    label:string
    action:()=>void
    disabled?: boolean;
    isLoading?: boolean;
}
const PrimaryButton:React.FC<Props> = ({Icon,label,action,disabled = false, isLoading = false })=>{
    const [dots, setDots] = useState("");

    useEffect(() => {
        if (isLoading) {
          const interval = setInterval(() => {
            setDots((prev) => (prev.length >= 3 ? "" : prev + "."));
          }, 300);
          return () => clearInterval(interval);
        }
      }, [isLoading]);
      
    return(
        <>
        <button onClick={action}  disabled={disabled || isLoading} className={`flex items-center px-10 py-5 text-xl font-medium text-white rounded-full shadow-xl group bg-gradient-to-r from-purple-600 to-indigo-400 hover:from-purple-500 hover:to-indigo-300 ghibli-transition hover:scale-105 hover:shadow-purple-200/50 magical-hover ${
        disabled || isLoading ? "opacity-80 cursor-not-allowed" : ""}`}>

              {/* Sparkle animation overlay */}
              {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="absolute w-8 h-8 bg-white rounded-full opacity-20 animate-ping"></div>
          <div className="absolute w-6 h-6 bg-white rounded-full opacity-30 animate-pulse"></div>
        </div>
      )}
      
      {Icon && (
          <Icon
            className={`w-6 h-6 mr-3 transition-transform ${
              isLoading ? "animate-bounce" : "group-hover:rotate-12"
            }`}
          />
        )}

<span>
          {isLoading ? `Generating${dots}` : label}
        </span>
            </button>
        </>
    )
}

export default PrimaryButton