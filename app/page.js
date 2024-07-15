// 'use client';

// import { useState } from 'react';

// export default function Home() {
//   const [question, setQuestion] = useState('');
//   const [response, setResponse] = useState('');
//   const [chatHistory, setChatHistory] = useState([]);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const res = await fetch('/api/ask', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ question, chat_history: chatHistory }),
//     });
//     const data = await res.json();
//     setResponse(data.response);
//     setChatHistory([...chatHistory, { type: 'human', text: question }, { type: 'ai', text: data.response }]);
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//       <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
//         <h1 className="text-2xl font-bold mb-4 text-center">LangChain AI Assistant</h1>
//         <form onSubmit={handleSubmit} className="mb-4">
//           <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
//             <input
//               type="text"
//               value={question}
//               onChange={(e) => setQuestion(e.target.value)}
//               placeholder="Ask a question"
//               className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
//               required
//             />
//             <button
//               type="submit"
//               className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
//             >
//               Ask
//             </button>
//           </div>
//         </form>
//         <div className="mb-4">
//           <h2 className="text-xl font-semibold">Response:</h2>
//           <p className="p-4 bg-gray-100 rounded">{response}</p>
//         </div>
//         <div>
//           <h2 className="text-xl font-semibold mb-2">Chat History:</h2>
//           <div className="space-y-4">
//             {chatHistory.map((msg, index) => (
//               <div key={index} className={`p-4 rounded-lg ${msg.type === 'human' ? 'bg-blue-100 text-blue-900' : 'bg-green-100 text-green-900'}`}>
//                 <strong>{msg.type === 'human' ? 'You' : 'AI'}:</strong> {msg.text}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



'use client';

import { useState } from 'react';

export default function Home() {
  const [question, setQuestion] = useState('');
  const [response, setResponse] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch('/api/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ question, chat_history: chatHistory }),
    });
    const data = await res.json();
    setResponse(data.response);
    setChatHistory([...chatHistory, { type: 'human', text: question }, { type: 'ai', text: data.response }]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">LangChain AI Assistant</h1>
        <form onSubmit={handleSubmit} className="mb-4">
          <div className="flex items-center border-b border-b-2 border-gray-500 py-2">
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question"
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              required
            />
            <button
              type="submit"
              className="flex-shrink-0 bg-blue-500 hover:bg-blue-700 border-blue-500 hover:border-blue-700 text-sm border-4 text-white py-1 px-2 rounded"
            >
              Ask
            </button>
          </div>
        </form>
        <div className="mb-4">
          <h2 className="text-xl font-semibold">Response:</h2>
          <p className="p-4 bg-gray-100 rounded">{response}</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold mb-2">Chat History:</h2>
          <div className="space-y-4">
            {chatHistory.map((msg, index) => (
              <div key={index} className={`p-4 rounded-lg ${msg.type === 'human' ? 'bg-blue-100 text-blue-900' : 'bg-green-100 text-green-900'}`}>
                <strong>{msg.type === 'human' ? 'You' : 'AI'}:</strong> {msg.text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
