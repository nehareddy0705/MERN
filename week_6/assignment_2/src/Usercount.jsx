import React from 'react';

function Usercount({ count }) {
  return (
    <div className="flex flex-col items-center mb-8 p-6 rounded-lg max-w-sm mx-auto">
      <div className="bg-pink-200 px-6 py-2 mb-4 font-bold text-gray-700">
        Usercount
      </div>
      <div className="flex items-center gap-4">
        <span className="text-gray-700 font-medium">Added Users Count:</span>
        <div>
          {count}
        </div>
      </div>
    </div>
  );
}

export default Usercount;
