import { CreditCard, X } from "lucide-react";
import { useRef, useState } from "react";
import toast from "react-hot-toast";

interface Props {
  title: string;
  content: string;
  acceptance: string;
  onFileSelect: (file: File | null) => void; 
}
const ImageUploader: React.FC<Props> = ({ title, content, acceptance,onFileSelect  }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  console.log(
    "error",error
  )
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const isValidType = file.type === "image/png" || "image/jpeg";
    const isValidSize = file.size <= 5 * 1024 * 1024;

    if (!isValidType) {
      const message = "Only PNG or JPG images are allowed.";
      setError( message);
      toast.error(message);
      setPreviewUrl(null);
      return;
    }

    if (!isValidSize) {
      const message = "Image must be less than 5MB."
      setError(message);
      toast.error(message)
      setPreviewUrl(null);
      return;
    }

    if (isValidType && isValidSize) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
        setError(null);
        onFileSelect(file); // Notify parent about selected file
      };
      reader.readAsDataURL(file);
    } else {
      onFileSelect(null); // Notify parent about invalid file
    }
  
  };

  const handleClick = () => {
    inputRef.current?.click();
  };

  const handleRemoveImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPreviewUrl(null);
    onFileSelect(null); 
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <>
      <div className="relative " onClick={handleClick}>
        <input
          ref={inputRef}
          type="file"
          accept="image/png, image/jpeg"
          className="hidden "
          onChange={handleFileChange}
        />
        <div
          className={`${
            !previewUrl ? "p-12" : ""
          } border-4  hover:cursor-pointer border-dashed rounded-3xl text-center backdrop-blur-lg ghibli-transition relative overflow-hidden border-purple-200 bg-white/10 }`}
        >
          <div className="absolute inset-0 cloud-bg">
            {previewUrl ? (
              <div className="relative h-full">
                <img
                  src={previewUrl}
                  alt="Uploaded"
                  className="object-contain w-full h-full mx-auto transition-transform duration-300 shadow-lg max-h-72 rounded-xl hover:scale-105"
                />
                {/* remove button */}
                <button onClick={handleRemoveImage} className="absolute p-2 text-white transition-all duration-200 bg-red-500 rounded-full shadow-lg top-2 right-2 hover:bg-red-600 hover:scale-110 focus:outline-none">
                    <X className="w-4 h-4"/>
                </button>
              </div>
            ) : (
              <>
                <CreditCard className="w-16 h-16 mx-auto mb-6 text-purple-400 floating" />
                <h3 className="mb-4 text-2xl font-bold text-purple-800">
                  {title}
                </h3>
                <p className="mb-3 text-lg text-purple-600">{content}</p>
                <p className="text-sm text-purple-500">{acceptance}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageUploader;
