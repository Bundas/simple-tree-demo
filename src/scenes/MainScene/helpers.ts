import { ITreeNode } from '@blueprintjs/core';
import { INodeChecked } from './MainScene';

export const copyStateToChildren = (
    tree: ITreeNode,
    newState: number | undefined,
    nodeChecked: INodeChecked
): INodeChecked => {
    const newNodeChecked = { ...nodeChecked, [tree.id]: newState };

    const tempNodesChecked = [];
    for (const child of tree.childNodes || []) {
        tempNodesChecked.push(copyStateToChildren(child, newState, newNodeChecked));
    }

    return Object.assign({}, newNodeChecked, ...tempNodesChecked);
};

export const getSubtreeById = (id: string, tree: ITreeNode): ITreeNode | undefined => {
    if (tree.id === id) {
        return tree;
    }

    for (const node of tree.childNodes || []) {
        const tempSubtree = getSubtreeById(id, node);
        if (tempSubtree) {
            return tempSubtree;
        }
    }

    return undefined;
};
