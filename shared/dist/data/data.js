"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LOGICAL_RULES = exports.PROOF_QUESTIONS = exports.DIFFICULTY_LEVELS = void 0;
exports.DIFFICULTY_LEVELS = [
    {
        id: 'intro',
        title: 'Intro Proofs',
        description: 'Start your journey into mathematical reasoning',
        color: 'bg-green-500'
    },
    {
        id: 'easy',
        title: 'Easy Proofs',
        description: 'Build foundational proof-writing skills',
        color: 'bg-blue-500'
    },
    {
        id: 'medium',
        title: 'Medium Proofs',
        description: 'Challenge yourself with more complex proofs',
        color: 'bg-yellow-500'
    },
];
// Proof Questions Database
exports.PROOF_QUESTIONS = {
    intro: [
        {
            id: 1,
            title: 'IF you do a bunch of questions, THEN you will improve',
            proposition: "(P ∧ R) → (R ∨ P)",
            conclusion: "T",
            description: 'Prove that this equation is a tautology',
            complexity: 'Basic logical reasoning'
        },
    ],
};
exports.LOGICAL_RULES = {
    'Commutative Property': 'Rearranges terms without changing the value',
    'Associative Property': 'Groups terms differently without changing the value',
    'Distributive Property': 'Distributes multiplication over addition',
    'Identity Property': 'Adding or multiplying by 1 or 0',
    'Inverse Property': 'Cancellation of opposite terms',
    'Transitive Property': 'If a = b and b = c, then a = c',
    'Substitution': 'Replacing equal terms',
    'Contradiction': 'Proving by showing a logical contradiction',
    'Contrapositive': 'If P implies Q, then not Q implies not P',
    'De Morgan\'s Law': 'Negation of conjunctions and disjunctions'
};
