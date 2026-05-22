import { useState } from 'react';
import Users from './Users';
import Usercount from './Usercount';

function App() {
  const [addedUsers, setAddedUsers] = useState(new Set());

  const handleAddUser = (userId) => {
    setAddedUsers(prev => {
      const newSet = new Set(prev);
      newSet.add(userId);
      return newSet;
    });
  };

  return (
    <div className="min-h-screen bg-white py-12 px-4 font-sans">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        {/* Usercount Component */}
        <div className="w-full mb-12">
          <Usercount count={addedUsers.size} />
        </div>
        
        {/* Users Component */}
        <div className="w-full">
          <Users onAddUser={handleAddUser} addedUsers={addedUsers} />
        </div>
      </div>
    </div>
  );
}

export default App;
