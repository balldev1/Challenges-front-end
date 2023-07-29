import Image from 'next/image'
import Link from 'next/link'
import { GiElectric } from 'react-icons/gi'
import { BiBrain } from 'react-icons/bi'
import { FaRegCommentDots } from 'react-icons/fa'
import { AiOutlineEye } from 'react-icons/ai'






export default function Home() {
  return (
    <>
      <div className='sm:flex sm:flex-row  justify-center items-center h-screen drop-shadow-md  '>

        <div className='sm:flex bg-gradient-to-b sm:border-2  
         h-[380px] sm:rounded-3xl rounded-b-3xl sm:w-[700px] sm:h-[450px]
           '>
          {/* {1} */}
          <div className='bg-gradient-to-b  from-indigo-600  to-indigo-800 
         h-[380px] sm:rounded-3xl rounded-b-3xl sm:w-[350px] sm:h-[447px]
           '>
            <div className=' flex flex-col justify-center items-center gap-5  '>
              <h1 className='mt-5 text-gray-300 font-bold text-md'>Your Result</h1>
              {/* {rounded} */}
              <div className='flex flex-col items-center justify-center
             bg-gradient-to-b from-indigo-800 to-indigo-600  w-[150px] h-[150px] rounded-full '>
                <h1 className='text-white  font-bold text-[50px]'> 76 </h1>
                <span className='text-gray-400 font-bold text-sm'> of 100 </span>
              </div>
              <h1 className='text-white font-bold	 text-xl'>Great</h1>
              <span className='text-slate-300'> You scored higher than 65% of the <br /> people who have taken these tests.</span>
            </div>
          </div>
          <div className=' sm:mt-5 sm:ml-10 mt-5 mx-10  '>
            <h1 className='font-bold text-md'>Summary</h1>
            {/* {action} */}
            <div className=' mt-5 gap-5 flex flex-col'>
              {/* {1} */}
              <div className='flex items-center font-bold text-md bg-rose-100 sm:w-[270px] w-[420px]  h-[50px] rounded-xl gap-2'>
                <h1 className='ml-2 ' ></h1>
                <GiElectric className='text-rose-500' size={20} />
                <h1 className='text-rose-500'>Reaction</h1>
                <div className='flex flex-row gap-1 ml-auto mr-2'>
                  <h1>80</h1>
                  <h1 className='text-slate-400'>/</h1>
                  <h1 className='text-slate-400'>100</h1>
                </div>
              </div>
              {/* {2} */}
              <div className='flex items-center font-bold text-md bg-yellow-100 sm:w-[270px] w-[420px]  h-[50px] rounded-xl gap-2'>
                <h1 className='ml-2 ' ></h1>
                <BiBrain className='text-yellow-500' size={20} />
                <h1 className='text-yellow-500'>Memory</h1>
                <div className='flex flex-row gap-1 ml-auto mr-2'>
                  <h1>92</h1>
                  <h1 className='text-slate-400'>/</h1>
                  <h1 className='text-slate-400'>100</h1>
                </div>
              </div>
              {/* {3} */}
              <div className='flex items-center font-bold text-md bg-green-100 sm:w-[270px] w-[420px]  h-[50px] rounded-xl gap-2'>
                <h1 className='ml-2 ' ></h1>
                <FaRegCommentDots className='text-green-500' size={20} />
                <h1 className='text-green-500'>Verbal</h1>
                <div className='flex flex-row gap-1 ml-auto mr-2'>
                  <h1>61</h1>
                  <h1 className='text-slate-400'>/</h1>
                  <h1 className='text-slate-400'>100</h1>
                </div>
              </div>
              {/* {4} */}
              <div className='flex items-center font-bold text-md bg-blue-100 sm:w-[270px] w-[420px]  h-[50px] rounded-xl gap-2'>
                <h1 className='ml-2 ' ></h1>
                <AiOutlineEye className='text-blue-500' size={20} />
                <h1 className='text-blue-500'>Visual</h1>
                <div className='flex flex-row gap-1 ml-auto mr-2'>
                  <h1>72</h1>
                  <h1 className='text-slate-400'>/</h1>
                  <h1 className='text-slate-400'>100</h1>
                </div>
              </div>
            </div>
            {/* {button} */}
            <div className='flex items-center sm:bg-gradient-to-b from-indigo-800 to-indigo-600 bg-slate-700 text-white justify-center w-full border-2 mt-5 h-[55px] rounded-3xl'>
              <h1 className='font-bold text-md cursor-pointer'>Continue</h1>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}
