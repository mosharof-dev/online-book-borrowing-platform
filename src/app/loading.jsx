import { FadeLoader } from "react-spinners";



const loading = () => {
    return (
       <div className='min-h-[70vh] flex justify-center items-center'>
        <FadeLoader color='#FB8C00' />
       </div>
    );
};

export default loading;