import { FaDashcube } from "react-icons/fa6";
import { FaArrowsSpin } from "react-icons/fa6";
import { TfiHeadphoneAlt } from "react-icons/tfi";

const Sidenav = () => {
  return (
    <div className=' shadow-md shadow-black  min-h-screen w-max flex flex-col ml-0.2'>
  <h1 className='h1 text-black text-xl px-3 py-4'>@DOSOMECODING</h1>
  <div className='flex flex-col flex-grow justify-between relative'>
    <div className="top">
      <div className="top1 p-2 flex items-center gap-1 hover:bg-slate-300 cursor-pointer "><FaDashcube />Dashboard</div>
      <div className="top2 p-2 flex items-center gap-1 hover:bg-slate-300 cursor-pointer"><FaArrowsSpin />Transaction</div>
    </div>
    <div className="absolute bottom-0 mb-2 p-2 flex items-center gap-1 hover:bg-slate-300 cursor-pointer"><TfiHeadphoneAlt />Support</div>
  </div>
</div>

  )
}

export default Sidenav
