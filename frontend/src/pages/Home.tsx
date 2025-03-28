import React, { useState } from 'react';
import { LOGICAL_RULES } from '@shared/data/data'; // Assume this is a file with logical rules
import { BinaryTree, Node } from '../../../shared/src/types/BinaryTree';
import { useNavigate } from 'react-router-dom';
import { createBinaryExpressionTreeFromPostFixNotation } from '../../../shared/src/evaluateExpressions';

const Home = () => {

  const navigate = useNavigate(); // Initialize navigation hook


  const [startExpression, setStartExpression] = useState('');
  const [endExpression, setEndExpression] = useState('');
  const [proofRows, setProofRows] = useState([
    { expression: '', rule: '' }
  ]);

  const handleAddRow = () => {
    setProofRows([...proofRows, { expression: '', rule: '' }]);
  };

  const handleRemoveRow = (index: number) => {
    const newRows = proofRows.filter((_, i) => i !== index);
    setProofRows(newRows);
  };

  const handleRowChange = (index: number, field: 'expression' | 'rule', value: string) => {
    const newRows = [...proofRows];
    newRows[index][field] = value;
    setProofRows(newRows);
  };

  const handleVerifyProof = () => {
    console.log('Verifying proof:', { startExpression, endExpression, proofRows });
  };


    // Function to navigate to truth table
    const handleNavigateToTruthTable = () => {
      navigate('/truth-table');
    };
  




  const correctTree = createBinaryExpressionTreeFromPostFixNotation("a b + c d e + * *".split(" "))
  const variables = "abcde"
  // Then to evaluate the truth table for this, we would 
  correctTree.print()





  const proposition = "(P OR P)"
  const conclusion = "T"

  return (
    <div className="flex flex-col w-full h-screen">
         <h1 className="text-3xl font-bold text-gray-800 ml-10 mt-6">
          Proof Checker
            <button className="border-2" onClick={handleNavigateToTruthTable}>
            Truth table
          </button>
        </h1>


      {/* Right Panel - Proof Visualization */}
      <div className="h-full bg-white p-8">
        <div className="w-full h-full border-5 border-gray-300 rounded-2xl overflow-hidden flex items-center justify-center">
            <div className="border-5 w-3/5 h-full flex items-center justify-center">
                
                {/* left column */}
                <div className="w-11/12 h-2/3 bg-gray-200 p-2 text-2xl">
                    {proposition}
                </div>

                {/* middle column */}
                <div className="w-1/12 h-2/3 bg-gray-100 p-2 text-2xl items-center justify-center text-center">
                    =
                
                </div>

                {/* right column */}
                <div className="w-11/12 h-2/3 bg-gray-200 text-2xl">
                    <input 
                        type="text" 
                        className="w-2/3 p-2 text-xl border-2 border-gray-300 rounded-lg"
                        placeholder="Enter your proof step here..."
                    />

                </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;