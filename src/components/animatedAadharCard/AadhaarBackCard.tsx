import { useRef } from "react";
import { downloadCardImage } from "../../utils/downloadCardAsImage";
import { Download } from "lucide-react";
import toast from "react-hot-toast";


interface AadhaarBackCardProps {
  address: string;
}

const AadhaarBackCard: React.FC<AadhaarBackCardProps> = ({ address }) => {
  const cardRef = useRef<HTMLDivElement | null>(null)
  
  const handleDownload = async()=>{
    try{
   if(cardRef.current){
   await downloadCardImage(cardRef,'aadhara-back-card.png')
   }
    }catch(err){
      toast.error("download failed")
      console.log("Download failed",err)
    }
  }
    
    return (
      <div ref={cardRef} className="relative p-6 overflow-hidden border-4 border-teal-200 backdrop-blur-lg bg-white/10 rounded-3xl hover:cursor-pointer ghibli-transition group">
       
       <button onClick={handleDownload} className='absolute z-20 text-green-700 top-4 right-4'>
  <Download/>
  </button>
  
        <div className="absolute -z-10 -inset-4 rounded-3xl bg-gradient-to-r from-teal-200 to-sky-100 opacity-30 blur-3xl animate-pulse" />
        <div className="space-y-2 text-sm text-sky-800">
          <h3 className="text-xl font-bold">Address</h3>
          {address.split(',').map((line, index) => (
          <p key={index}>{line.trim()}</p>
        ))}
        </div>
  
        <div className="pt-4 mt-4 text-center border-t border-sky-300">
          <p className="text-xs text-sky-500">Government of India</p>
        </div>
      </div>
    );
  };
  
  export default AadhaarBackCard;
  