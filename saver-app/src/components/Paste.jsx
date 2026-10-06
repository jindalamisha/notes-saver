import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { removeFromPastes } from '../redux/pasteSlice';
import toast from 'react-hot-toast';

const Paste = () => {
   
  const pastes = useSelector((state) => state.paste.pastes);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const filteredData = pastes.filter((paste) =>
    paste.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function handleDelete(pasteId) {
    dispatch(removeFromPastes(pasteId));
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-6 flex flex-col gap-6 text-white">

      {/* Search Input */}
      <input 
        className="
          w-full
          bg-[#1e1e1e]
          border
          border-gray-700
          text-white
          p-3
          rounded-xl
          focus:outline-none
          placeholder-gray-500
        "
        type="search"
        placeholder="Search here"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Cards Container */}
      <div className="flex flex-col gap-5 w-full mt-2">

        {filteredData.length > 0 &&
          filteredData.map((paste) => {

            const shareableUrl =
              `${window.location.origin}/pastes/${paste?._id}`;

            return (
              <div 
                className="
                  w-full
                  bg-[#1e1e1e]
                  border
                  border-gray-700
                  rounded-2xl
                  p-5
                  flex
                  flex-col
                  gap-4
                  shadow-sm
                "
                key={paste?._id}
              >

                {/* Title */}
                <div className="text-xl font-semibold text-white">
                  {paste.title}
                </div>

                {/* Content */}
                <div className="text-gray-300 text-sm leading-relaxed break-words">
                  {paste.content}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-3">

                  <button
                    className="
                      bg-[#1e1e1e]
                      border
                      border-gray-700
                      text-white
                      px-4
                      py-2
                      rounded-xl
                      hover:bg-gray-800
                      transition
                    "
                  >
                    <a href={`/?pasteId=${paste?._id}`}>
                      Edit
                    </a>
                  </button>

                  <button
                    className="
                      bg-[#1e1e1e]
                      border
                      border-gray-700
                      text-white
                      px-4
                      py-2
                      rounded-xl
                      hover:bg-gray-800
                      transition
                    "
                  >
                    <a href={`/pastes/${paste?._id}`}>
                      View
                    </a>
                  </button>

                  <button 
                    onClick={() => handleDelete(paste?._id)}
                    className="
                      bg-[#1e1e1e]
                      border
                      border-red-500/60
                      text-red-400
                      px-4
                      py-2
                      rounded-xl
                      hover:bg-red-900/30
                      transition
                    "
                  >
                    Delete
                  </button>

                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(paste?.content);
                      toast.success("Copied to clipboard");
                    }}
                    className="
                      bg-[#1e1e1e]
                      border
                      border-purple-500
                      text-purple-400
                      px-4
                      py-2
                      rounded-xl
                      hover:bg-purple-900/30
                      transition
                    "
                  >
                    Copy
                  </button>

                  <button 
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(shareableUrl);
                        toast.success("🔗 Share link copied to clipboard!");
                      } catch (err) {
                        toast.error("Failed to copy share link");
                      }
                    }} 
                    className="
                      bg-[#1e1e1e]
                      border
                      border-purple-500
                      text-purple-400
                      px-4
                      py-2
                      rounded-xl
                      hover:bg-purple-900/30
                      transition
                    "
                  >
                    Share
                  </button>

                </div>

                {/* Date */}
                <div className="text-xs text-gray-500 border-t border-gray-800 pt-3">
                  {paste.createdAt}
                </div>

              </div>
            );
          })
        }

      </div>
    </div>
  )
}

export default Paste
