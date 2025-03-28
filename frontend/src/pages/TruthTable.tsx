import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../output.css"
import { convertParenthesesToPostFix } from '@shared/evaluateExpressions';

const TruthTable: React.FC = () => {
  const navigate = useNavigate();
  const [expression, setExpression] = useState('P AND Q');
  const [postfixExpression, setPostfixExpression] = useState('');

  const convertToPostfix = () => {
    // Placeholder function that simply copies the input
    convertParenthesesToPostFix(expression)
  };

  return (
    <div className="container mx-auto p-8 max-w-4xl">
      <div className="shadow-2xl rounded-xl overflow-hidden">
        <div className=" text-white p-6 flex justify-between items-center">
          <h1 className="text-4xl font-bold">Truth Table Generator</h1>
          <div className="flex space-x-4">
            <button 
              onClick={() => navigate('/')} 
              className="px-6 py-3  text-blue-600 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Back to Home
            </button>
            <button 
              onClick={() => navigate(-1)} 
              className="px-6 py-3 bg-black text-indigo-600 rounded-lg hover:bg-gray-100 transition duration-300"
            >
              Previous Page
            </button>
          </div>
        </div>

        <div className="p-6 bg-gray-500">
          <div className="grid md:grid-cols-1 gap-6 mb-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Logical Expression (Use all possible parentheses)
              </label>
              <input 
                type="text" 
                value={expression}
                onChange={(e) => setExpression(e.target.value)}
                className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-400"
              />
            </div>
            <button 
              onClick={convertToPostfix}
              className="mt-4 px-6 py-3 bg-amber-900 text-black rounded-lg hover:bg-indigo-700 transition duration-300"
            >
              Convert to Postfix
            </button>
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">
                Postfix Notation
              </label>
              <input 
                type="text" 
                value={postfixExpression}
                readOnly
                className="w-full px-4 py-3 border-2 border-indigo-200 rounded-lg bg-gray-100"
              />
            </div>
          </div>

          <div>
            Place tables here
          </div>
        </div>
      </div>
    </div>
  );
};

export default TruthTable;