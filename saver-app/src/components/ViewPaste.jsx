import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import toast from 'react-hot-toast';

const ViewPaste = () => {
  const { id } = useParams();
  const allPastes = useSelector((state) => state.paste.pastes);

  const paste = allPastes.find((p) => p._id === id);

  return (
    <div className="w-full max-w-4xl mx-auto p-6 flex flex-col gap-6 text-white">
      
      {/* Top Row: Title + Copy Button */}
      <div className="flex flex-row gap-4 items-center justify-between">
        
        {/* Title */}
        <input
          className="flex-1 bg-[#1e1e1e] border border-gray-700 text-white p-3 rounded-xl focus:outline-none placeholder-gray-500 disabled:opacity-100 disabled:cursor-not-allowed"
          type="text"
          placeholder="Enter a title here"
          value={paste?.title || ''}
          disabled
        />

        {/* Copy Button */}
        <button
          onClick={() => {
            if (paste?.content) {
              navigator.clipboard.writeText(paste.content);
              toast.success('Copied to clipboard');
            }
          }}
          className="bg-[#1e1e1e] border border-purple-500 text-white px-5 py-3 rounded-2xl hover:bg-purple-900 transition whitespace-nowrap"
        >
          Copy
        </button>
      </div>

      {/* Bottom Row: Content */}
      <div>
        <textarea
          className="w-full bg-[#1e1e1e] border border-gray-700 text-white p-4 rounded-2xl focus:outline-none placeholder-gray-500 resize-none disabled:opacity-100 disabled:cursor-not-allowed"
          value={paste?.content || ''}
          placeholder="Enter content here"
          disabled
          rows={16}
        />
      </div>

    </div>
  );
};

export default ViewPaste;
