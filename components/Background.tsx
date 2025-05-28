// import React, { useState } from "react";

// const users = [
//   { id: 1, name: "Alice" },
//   { id: 2, name: "Bob" },
//   { id: 3, name: "Charlie" },
// ];

// const chats = {
//   1: ["Hi Alice!", "How are you?"],
//   2: ["Hey Bob!", "What's up?"],
//   3: ["Hello Charlie!", "Nice to meet you."],
// };

// export function ChatApp() {
//   const [selectedUserId, setSelectedUserId] = useState(null);

//   const handleUserClick = (id) => {
//     setSelectedUserId(id);
//   };

//   const selectedUser = users.find((u) => u.id === selectedUserId);
//   const chatMessages = chats[selectedUserId] || [];

//   return (
//     <div className="flex h-screen">
//       {/* Sidebar - User List */}
//       <div className="w-1/4 bg-gray-200 p-4">
//         <h2 className="text-xl font-bold mb-4">Users</h2>
//         {users.map((user) => (
//           <div
//             key={user.id}
//             onClick={() => handleUserClick(user.id)}
//             className="cursor-pointer hover:bg-gray-300 p-2 rounded">
//             {user.name}
//           </div>
//         ))}
//       </div>

//       {/* Chat Box */}
//       <div className="w-3/4 p-4">
//         {selectedUser ? (
//           <>
//             <h2 className="text-xl font-bold mb-4">
//               Chat with {selectedUser.name}
//             </h2>
//             <div className="space-y-2">
//               {chatMessages.map((msg, index) => (
//                 <div key={index} className="bg-blue-100 p-2 rounded w-max">
//                   {msg}
//                 </div>
//               ))}
//             </div>
//           </>
//         ) : (
//           <p>Select a user to start chatting</p>
//         )}
//       </div>
//     </div>
//   );
// }
