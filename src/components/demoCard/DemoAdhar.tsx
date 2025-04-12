import avatar from '../../assets/adhar-demo-avathar.jpg'
const DemoAdharCard = () => {
    return (
      <div className="relative w-full max-w-xl p-3 transform shadow-2xl md:p-6 bg-white/30 backdrop-blur-md rounded-3xl hover:scale-102">
        {/* Background effect (optional, but now safe) */}
        <div className="absolute -z-10 -inset-4 rounded-3xl bg-gradient-to-r from-purple-200 to-indigo-100 opacity-30 blur-3xl animate-pulse" />
        {/* Card content */}
        <div className="flex items-center mb-4 space-x-4 ">
          <div className="relative w-24 h-24 overflow-hidden rounded-full shadow-inner bg-gradient-to-br from-purple-300 to-indigo-300">
            <img
              src={avatar}
              alt="Profile"
              className="object-cover w-full h-full mix-blend-overlay"
            />
          </div>

          <div>
          <h3 className="text-2xl font-bold text-purple-800">Aadhaara</h3>
          <p className="text-purple-600">Name Miyazaki San</p>
          <p className="text-purple-600">Date of Birth 05/08/1990</p>
          <p className="text-purple-600">Gender Male</p>
        </div>
        </div>
        <div className='flex justify-center w-full pt-4 border-t border-purple-200 '>
            
        <h2 className="text-lg font-semibold tracking-widest text-purple-600 ">1234 5678 9012</h2>
        </div>
       
      </div>
    );
  };

  export default DemoAdharCard