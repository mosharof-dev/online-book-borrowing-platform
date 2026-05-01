import Link from "next/link";
import Image from "next/image";
import Notfound from '@/assets/error-404.png'

const NotFound = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center px-4 space-y-6 bg-[#f8f9fc]">
            
            {/* Image Section */}
            <div className="flex justify-center">
                <Image 
                    src={Notfound} // 
                    alt="404 Not Found" 
                    width={400} 
                    height={400}
                    priority 
                    className="w-60 md:w-60 h-auto object-contain" 
                />
            </div>

            {/* Typography Section */}
            <div className="text-center space-y-3">
                <h1 className="text-2xl md:text-4xl font-bold text-[#0f172a]">
                    OPPS!! PAGE NOT FOUND
                </h1>
                <p className="text-sm md:text-base text-gray-500 max-w-md mx-auto">
                    The page you are requesting is not found on our system. please try another page
                </p>
            </div>

            {/* Button Section */}
            <Link 
                href="/" 
                className="px-6 py-2.5 bg-[#8b5cf6] hover:bg-[#7c3aed] text-white text-sm md:text-base font-medium rounded shadow-sm transition-colors duration-200"
            >
                 Back To Home !
            </Link>

        </div>
    );
}
export default NotFound;