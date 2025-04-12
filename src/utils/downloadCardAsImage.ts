import html2canvas from 'html2canvas';


// Extend the options type to include scale

export const downloadCardImage =async(elementRef:React.RefObject<HTMLElement |null>,fileName:string ='aadhaar-frontcard.png')=>{
    
    if(!elementRef.current) return 

// Temporarily hide the download button
const downloadButton = elementRef.current.querySelector('button')
if(downloadButton){
    downloadButton.style.display = "none"
}
    const options = {
        scale: 2, // This works in current versions
        logging: false,
        useCORS: true,
        allowTaint: false,
        borderRadius:"24px"
      };


    try{
        const canvas = await html2canvas(elementRef.current, options);
        const link = document.createElement("a")
        link.download = fileName
        link.href = canvas.toDataURL('image/png')
        link.click()
    }catch(error){
        console.error('Error downloading card:', error);
        throw error; 
    } finally {
        // Restore the download button visibility
        if (downloadButton) {
          downloadButton.style.display = '';
        }
      }

}