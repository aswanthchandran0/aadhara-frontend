import {
  Cloud,
  Moon,
  ScanText,
  Settings2,
  Sparkles,
  Sun,
  Wind,
  Zap,
} from "lucide-react";
import Navbar from "../components/navbar/Navbar";
import DemoAdharCard from "../components/demoCard/DemoAdhar";
import ImageUploader from "../components/ImageUploader/ImageUploader";
import PrimaryButton from "../components/ui/buttons/PrimaryButton";
import FeatureCard from "../components/ui/cards/FeatureCard";
import { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { uploadImages } from "../api/upload/upload.api";
import AadhaarFrontCard from "../components/animatedAadharCard/AadhaarFrontCard";
import AadhaarBackCard from "../components/animatedAadharCard/AadhaarBackCard";
import toast from "react-hot-toast";
//scrolling
gsap.registerPlugin(ScrollToPlugin);

const featureCardDetails = [
  {
    icon: Sparkles,
    title: "Reads Like Magic",
    description:
      "our smart OCR engine reads your Aadhaar and pulls out the details – fast, clean, and accurate.",
  },
  {
    icon: Settings2,
    title: "Understood by AI",
    description:
      "after scanning, AI takes over — finding the real details hidden in the text and shaping them perfectly.",
  },
  {
    icon: Zap,
    title: "Done in a Blink",
    description:
      "just upload and watch the magic. your animated Aadhaar is ready in seconds. no waiting, no fuss.",
  },
];


interface AadhaarInfo {
  name: string;
  dob: string;
  gender: string;
  aadhaarNumber: string;
  address: string;
}


const HomeScreen = () => {
  const uploadSectionRef = useRef<HTMLElement | null>(null);
  const [frontImage, setFrontImage] = useState<File | null>(null);
  const [backImage, setBackImage] = useState<File | null>(null);
  const [isUploading, setIsUploading] = useState(false);
  const [aadhaarData, setAadhaarData] = useState<AadhaarInfo | null>(null);

  const scrollToUpload = () => {
    if (uploadSectionRef.current) {
      gsap.to(window, {
        duration: 1,
        scrollTo: uploadSectionRef.current,
        ease: "power2.inOut",
      });
    }
  };


  const handleGenerate = async () => {
    if (!frontImage || !backImage) {
      toast.error("Please upload both images")
      return;
    }

    try {
      setIsUploading(true);
      
      const result = await uploadImages(frontImage, backImage);

      
       // Set the Aadhaar data from backend response
       setAadhaarData({
        name: result.aadhaarInfo.name,
        dob: result.aadhaarInfo.dob,
        gender: result.aadhaarInfo.gender,
        aadhaarNumber: result.aadhaarInfo.aadhaarNumber,
        address: result.aadhaarInfo.address
      });
      
      
    } catch {

      toast.error("Failed to upload images. Please try again."); // Show error toast
    } finally {
      setIsUploading(false);
    }
  };

  

  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-b from-indigo-50 via-purple-50 to-indigo-50">
        {/* animated background elements */}
        <div className="fixed inset-0 pointer-events-none">
          <Cloud className="absolute w-32 h-32 text-indigo-100 opacity-50 top-1/4 left-1/4 floating-slow" />
          <Cloud className="absolute w-24 h-24 text-indigo-100 opacity-50 top-1/3 right-1/4 floating-slow" />
          <Wind className="absolute w-20 h-20 text-purple-100 bottom-1/4 left-1/3 wind-effect" />
          <Sun className="absolute w-16 h-16 text-yellow-200 top-1/4 right-1/3 floating-fast" />
          <Moon className="absolute w-12 h-12 text-indigo-200 bottom-1/3 right-1/4 floating" />
        </div>

        <header className="fixed z-10 w-full bg-white/10 backdrop-blur-lg ghibli-transition">
          <Navbar />
        </header>

        {/* Hero Section with Ghibli-style Aadhaar */}
        <section className="relative pt-40 pb-20">
          <div className="px-6 mx-auto max-w-7xl">
            <div className="grid items-center gap-20 md:grid-cols-2">
              <div className="relative z-10">
                <h1 className="mb-8 font-bold leading-tight text-purple-800 text-6-xl md:text-7xl floating-slow">
                  Your Identity, Animated with Magic
                </h1>
                <p className="mb-10 text-2xl text-purple-600 wind-effect">
                  Transform your Aadhaar into an animated card
                </p>
                <PrimaryButton
                  Icon={Sparkles}
                  label="Generate"
                  action={scrollToUpload}
                />
              </div>

              <DemoAdharCard />
            </div>
          </div>
        </section>

        {/* upload section */}
        <section ref={uploadSectionRef} className="relative py-32">
          <div className="max-w-6xl px-6 mx-auto">
            <h2 className="mb-20 text-5xl font-bold text-center text-purple-800 floating-slow ">
              Upload Your Documents
            </h2>

            <div className="grid gap-12 md:grid-cols-2">
              <ImageUploader
                title=" Front of Your Aadhar  Card"
                content="Upload the front side of your Aadhaar card here."
                acceptance="Accepts JPG and PNG up to 5MB"
                onFileSelect={(file) => {
                  setFrontImage(file);
                  setAadhaarData(null); // Clear previous data when new image is selected
                }}
                
              />
              <ImageUploader
                title="Back of Your Aadhar Card"
                content="Upload the back side of your Aadhaar card here."
                acceptance="Accepts JPG and PNG up to 5MB"
                onFileSelect={(file) => {
                  setBackImage(file);
                  setAadhaarData(null); // Clear previous data when new image is selected
                }}
              />

 {/* Only show cards when we have data */}
 {aadhaarData && (
      <>
        <AadhaarFrontCard 
        name={aadhaarData.name}
        dob={aadhaarData.dob}
        gender={aadhaarData.gender}
        aadhaarNumber={aadhaarData.aadhaarNumber}
        />
       <AadhaarBackCard address={aadhaarData.address} />
      </>
    )}
    
            </div>
            <div className="flex items-center justify-center w-full mt-12 ">
              <PrimaryButton
                label="Generate"
                Icon={Sparkles}
                action={handleGenerate}
                disabled={!frontImage || !backImage}
                isLoading={isUploading}
              />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="relative py-32">
          <div className="px-6 mx-auto max-w-7xl ">
            <h2 className="mb-20 text-5xl font-bold text-center text-purple-800 floating-slow">
              Enchanted Features
            </h2>

            <div className="grid gap-16 md:grid-cols-3">
              {featureCardDetails.map((feature, index) => (
                <FeatureCard
                  index={index}
                  Icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="relative py-20 text-white bg-purple-900/95 backdrop-blur-lg">
          <div className="px-6 mx-auto max-w-7xl">
            <div className="flex items-start justify-center group ghibli-transition">
              <ScanText className="w-10 h-10 text-purple-400 hover:text-purple-300" />
              <span className="ml-3 text-3xl font-bold text-purple-100">
                Aadhaara
              </span>
            </div>
            {/* <p className="mx-auto mt-6 text-lg leading-relaxed text-center text-purple-300 "> Where technology dances with the whimsical spirit of Studio Ghibli, 
                creating magic in every digital interaction</p> */}
          </div>
        </footer>
      </div>
    </>
  );
};

export default HomeScreen;
