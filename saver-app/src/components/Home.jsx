import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { addToPastes, updateToPastes } from '../redux/pasteSlice';

const Home = () => {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const pasteId = searchParams.get('pasteId');
  const dispatch=useDispatch();
  const allPastes=useSelector((state)=>state.paste.pastes);

   useEffect(()=>{
      if(pasteId){
        const paste=allPastes.find((p)=>p._id===pasteId);
        setTitle(paste.title);
        setValue(paste.content);
      }
      
    },[pasteId])

  function createPaste(){
    const paste={
      title:title,
      content:value,
      _id:pasteId || Date.now().toString(36),
      createdAt:new  Date().toISOString()

    }

   


     if(pasteId){
          //update
          dispatch(updateToPastes(paste));
     }
     else{
      //create
      dispatch(addToPastes(paste));
     }

     //after craetion and updation-cleaning task
     setTitle('');
     setValue('');
     setSearchParams({});


  }

  return (
    <div className="w-full max-w-4xl mx-auto p-6 flex flex-col gap-6 text-white">
      {/* Top Row: Title Input + Action Button */}
      <div className="flex flex-row gap-4 items-center justify-between">
        <input
          className="flex-1 bg-[#1e1e1e] border border-gray-700 text-white p-3 rounded-xl focus:outline-none placeholder-gray-500"
          type="text"
          placeholder="Enter a title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button onClick={createPaste}
        className="bg-[#1e1e1e] border border-purple-500 text-white px-5 py-3 rounded-2xl hover:bg-purple-900 transition whitespace-nowrap">
          {pasteId ? 'Update my paste' : 'Create my paste'}
        </button>
      </div>

      {/* Bottom Row: Textarea */}
      <div>
        <textarea
          className="w-full bg-[#1e1e1e] border border-gray-700 text-white p-4 rounded-2xl focus:outline-none placeholder-gray-500 resize-none"
          value={value}
          placeholder="Enter content here"
          onChange={(e) => setValue(e.target.value)}
          rows={16}
        />
      </div>
    </div>
  );
};

export default Home;