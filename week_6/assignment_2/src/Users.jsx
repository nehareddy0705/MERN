import React, { useState, useEffect } from 'react';

function Users({ onAddUser, addedUsers }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        // Display all users, maintaining the grid layout
        setUsers(data);
      })
      .catch(error => console.error("Error fetching users:", error));
  }, []);

  return (
    <div>
      <div className="flex justify-center mb-6">
        <div className="bg-pink-200 px-6 py-2 font-bold text-gray-700">
          Users
        </div>
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {users.map((user, index) => {
          const isAdded = addedUsers.has(user.id);
          
          return (
            <div key={user.id} className="border-2 border-pink-100 bg-white p-4 rounded-xl shadow-sm flex flex-col justify-between items-center text-center">
              <div className="mb-4">
                <h3 className="font-bold text-gray-700">{user.name}</h3>
                <p className="text-xs text-gray-500 mt-1">{user.email}</p>
              </div>
              <button 
                onClick={() => onAddUser(user.id)}
                disabled={isAdded}
                className={`font-semibold py-1 px-6 rounded shadow-sm border border-gray-300 ${
                  isAdded 
                    ? 'bg-green-100 text-green-700 border-green-200 cursor-not-allowed':'bg-gray-100'
                }`}
              >
                {isAdded ? 'Added' : 'Add'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Users;
