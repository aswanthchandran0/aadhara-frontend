import { useRef } from 'react';
import avatar from '../../assets/adhar-demo-avathar.jpg';
import { Download } from 'lucide-react';
import { downloadCardImage } from '../../utils/downloadCardAsImage';
import toast from 'react-hot-toast';


interface AadhaarFrontCardProps {
  name: string;
  dob: string;
  gender: string;
  aadhaarNumber: string;
}


const AadhaarFrontCard: React.FC<AadhaarFrontCardProps> = ({name,dob,gender,aadhaarNumber}) => {
 
  const cardRef = useRef<HTMLDivElement | null>(null)
  const handleDownload = async()=>{
    try{
   if(cardRef.current){
   await downloadCardImage(cardRef,'aadhara-front-card.png')
   }
    }catch(err){
      console.log("Download failed",err)
      toast.error("Download failed")
    }
  }
  
  return (
    <div ref={cardRef} className="relative p-6 overflow-hidden border-4 border-purple-200 backdrop-blur-lg bg-white/10 rounded-3xl ghibli-transition group">
     {/* Download button */}

<button onClick={handleDownload} className='absolute z-20 text-purple-700 top-4 right-4'>
  <Download/>
  </button>
        <div  className="absolute -z-10 -inset-4 rounded-3xl bg-gradient-to-r from-purple-200 to-indigo-100 opacity-30 blur-3xl animate-pulse" />
      <div  className="flex items-center mb-4 space-x-4">
        <div className="w-20 h-20 overflow-hidden rounded-full shadow-inner bg-gradient-to-br from-purple-300 to-indigo-300">
          <img
            src={avatar}
            alt="avatar"
            className="object-cover w-full h-full mix-blend-overlay"
          />
        </div>
        <div>
          <h3 className="text-xl font-bold text-purple-800">Aadhaara</h3>
          <p className="text-purple-700">Name: {name}</p>
          <p className="text-purple-700">DOB: {dob}</p>
          <p className="text-purple-700">Gender: {gender}</p>
        </div>
      </div>

      <div className="pt-3 text-center border-t border-purple-300">
        <h2 className="text-lg font-semibold tracking-widest text-purple-600">
        {aadhaarNumber}
        </h2>
      </div>
    </div>
  );
};

export default AadhaarFrontCard;
