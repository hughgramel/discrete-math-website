import { BinaryTree } from "./types/BinaryTree"


/**
* Given an array of variables that represent an expression in post-fix notation, returns a binary tree
* that represents
* @param str 
*/
export const createBinaryExpressionTreeFromPostFixNotation = (array: string[]): BinaryTree<String> => {
 if (array.length < 3) {
     throw new Error("Must have at least 2 operands and an operator")
 }

 const stack = []
 const operators = "*/+-∧∨¬"
 for (let char of array) {
     if (operators.includes(char)) {
         // Then we want to pop 2 chars, create a binary tree, and push it back.
         const rightOperand = stack.pop()
         const leftOperand = stack.pop()
         const newBinaryTree: BinaryTree<string> = BinaryTree.create(char, leftOperand, rightOperand)
         stack.push(newBinaryTree)
         console.log("operator: " + char)
     } else {
         stack.push(char)
         console.log("operand: " + char)
     }

 }
 const finalTree = stack.pop()
 return finalTree
}


export const convertParenthesesToPostFix = (str: string) => {
    console.log("Converting to postfix")
    console.log(convertToCorrectLogicalFormat(str))
    const correctFormat = convertToCorrectLogicalFormat(str)
    
    const postfixStack = []
    const stack = []
    // When operand comes, add to postfixStack
    // When operator comes, add to stack column
    // When parentheses comes, add to symbol column\


    for (let char of correctFormat) {
        if (Object.values(operatorMap).includes(char) || "()".includes(char)) {
            // If the character is a known operator
            stack.push(char);
            console.log(char)
        } else if (/[a-zA-Z0-9]/.test(char)) {
            // If the character is an operand (letter or number)
            postfixStack.push(char);
            console.log(char)
        } else if (char.trim() === '') {
            // Ignore whitespace
            continue;
        } else {
            // Handle any other characters
            console.warn(`Unexpected character: ${char}`);
        }
    }

    console.log("postfixstack")
    console.log(postfixStack)
    console.log("stack")
    console.log(stack)
}

export const operatorMap = {
    // Logical operators
    'and': '∧',
    'or': '∨',
    'not': '¬',
    'implies': '→',
    'if': '→',
    'then': '→',
    'equivalent': '↔',
    'iff': '↔',
    
    // Additional logical symbols
    'true': '⊤',
    'false': '⊥',
    
    // Set theory operators
    'intersect': '∩',
    'union': '∪',
    'element of': '∈',
    'subset': '⊆',
    
    // Quantifiers
    'for all': '∀',
    'exists': '∃',
    'such that': '|'
};


export const convertToCorrectLogicalFormat = (input: string) =>  {
    // Ensure input is a string and convert to lowercase
    const text = String(input).toLowerCase().trim();
    
    // Mapping of logical operators and words to their symbolic representations
    
    
    // Create a regular expression to match whole words
    const regex = new RegExp(Object.keys(operatorMap).join('|'), 'gi');
    
    // Replace words with their symbolic representations
    const convertedText = text.replace(regex, (matched) => {
        return operatorMap[matched.toLowerCase()];
    });
    
    // Remove all whitespace
    const condensedText = convertedText.replace(/\s+/g, '');
    
    return condensedText;

}