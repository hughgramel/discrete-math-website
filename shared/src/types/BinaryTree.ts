export class Node<T> {
    value: T;
    left: Node<T> | null;
    right: Node<T> | null;

    constructor(value: T) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree<T> {
    root: Node<T> | null;

    constructor() {
        this.root = null;
    }

    static create<T>(
        head: T, 
        left?: BinaryTree<T> | T | null, 
        right?: BinaryTree<T> | T | null
    ): BinaryTree<T> {
        const tree = new BinaryTree<T>();
        tree.root = new Node(head);

        // Handle left subtree
        if (left) {
            if (left instanceof BinaryTree) {
                tree.root.left = left.root;
            } else if (left !== null) {
                tree.root.left = new Node(left);
            }
        }

        // Handle right subtree
        if (right) {
            if (right instanceof BinaryTree) {
                tree.root.right = right.root;
            } else if (right !== null) {
                tree.root.right = new Node(right);
            }
        }

        return tree;
    }

    // Print method to visualize the tree
    print(): void {
        if (!this.root) {
            console.log('Tree is empty');
            return;
        }

        this.printNode(this.root, '', true);
    }

    private printNode(node: Node<T> | null, prefix: string, isLeft: boolean): void {
        if (!node) return;

        // Print right subtree first (top of the visualization)
        if (node.right) {
            this.printNode(node.right, `${prefix}${isLeft ? '│   ' : '    '}`, false);
        }

        // Print current node
        console.log(`${prefix}${isLeft ? '└── ' : '┌── '}${node.value}`);

        // Print left subtree (bottom of the visualization)
        if (node.left) {
            this.printNode(node.left, `${prefix}${isLeft ? '    ' : '│   '}`, true);
        }
    }
}