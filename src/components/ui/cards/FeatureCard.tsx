import { LucideIcon } from "lucide-react"

interface Props{
    index:number,
    Icon:LucideIcon,
    title:string,
    description:string
}
const FeatureCard:React.FC<Props> = ({index,Icon,title,description})=>{

    return (
        <>
        <div  key={index} className="group">
         <div className="relative p-10 overflow-hidden bg-white/20 backdrop-blur-lg rounded-3xl ghibli-shadow hover:transform hover:scale-105 ghibli-transition">
            {/* <div className="absolute inset-0 transition-opacity duration-500 opacity-0 bg-gradient-to-br from-white/5 to-white/30 group-hover:opacity-100"> */}
                <div className="p-5 mb-8 bg-gradient-to-br from-purple-100 to-indigo-200 rounded-2xl w-fit group-hover:scale-110 ghibli-transition">
                  <Icon className="w-10 h-10 text-purple-600"/>
                </div>
                <h3 className="mb-4 text-2xl font-bold text-purple-800">{title}</h3>
                <p className="leading-relaxed text-purple-600">{description}</p>
            </div>
         {/* </div> */}
        </div>
        </>
    )
}

export default FeatureCard