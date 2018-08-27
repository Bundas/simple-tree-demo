import { ITreeNode } from '@blueprintjs/core';
import * as React from 'react';
import { ChildProps, MutationFunc } from 'react-apollo';

import HlidacStatuTree from '../../components/HlidacStatuTree';
import { buildTree } from '../../components/HlidacStatuTree/helpers';
import StateContainer from '../../components/StateContainer';
import Summary from '../../components/Summary';
import { copyStateToChildren, getSubtreeById } from './helpers';

interface IMainSceneProps {
    createContract?: MutationFunc;
    createSubmitter?: MutationFunc;
    updateContractState?: MutationFunc;
}

interface IMainSceneState {
    nodeChecked: INodeChecked;
    nodeExpanded: INodeExpanded;
    selectedNodeId: string | undefined;
}

export interface INodeChecked {
    [nodeId: string]: number | undefined;
}

export interface INodeExpanded {
    [nodeId: string]: boolean;
}

export default class MainScene extends React.Component<ChildProps<IMainSceneProps, GQL.IQuery>, IMainSceneState> {
    private treeOfNodes: ITreeNode[];

    constructor(props: IMainSceneProps) {
        super(props);

        this.state = {
            nodeChecked: {}, // tady se uchovava stav (zkontrolovano/nezkontrolovano)
            nodeExpanded: {},
            selectedNodeId: undefined
        };

        this.onNodeExpand = this.onNodeExpand.bind(this);
        this.onNodeCollapse = this.onNodeCollapse.bind(this);
        this.onNodeClick = this.onNodeClick.bind(this);
        this.onStateChange = this.onStateChange.bind(this);

        this.treeOfNodes = [];
    }

    public componentWillMount() {
        this.buildAndSetTreeOfNodes(this.props, this.state);
    }

    public componentWillUpdate(nextProps: ChildProps<IMainSceneProps, GQL.IQuery>, nextState: IMainSceneState) {
        if (this.treeOfNodes.length === 0) {
            // prevent unnecessary tree rebuilds
            this.buildAndSetTreeOfNodes(nextProps, nextState);
        }
    }

    public render() {
        if (!this.props.data || this.props.data.loading) {
            return <h4>Loading...</h4>;
        }

        const { selectedNodeId, nodeChecked } = this.state;

        return (
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ width: '30%' }}>
                    <HlidacStatuTree
                        onNodeExpand={this.onNodeExpand}
                        onNodeCollapse={this.onNodeCollapse}
                        onNodeClick={this.onNodeClick}
                        tree={this.treeOfNodes}
                    />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', marginTop: '20px' }}>
                    <Summary contracts={this.props.data.contracts || []} />
                    <h2>{this.state.selectedNodeId}</h2>
                    {selectedNodeId && (
                        <StateContainer onChange={this.onStateChange} checked={nodeChecked[selectedNodeId]} />
                    )}
                </div>
            </div>
        );
    }

    private onStateChange(newValue: number | undefined) {
        if (!this.state.selectedNodeId) {
            return;
        }

        const subtree = getSubtreeById(this.state.selectedNodeId, this.treeOfNodes[0]);
        if (!subtree) {
            return;
        }

        const newNodeChecked = copyStateToChildren(subtree, newValue, this.state.nodeChecked);
        this.setState({ nodeChecked: newNodeChecked });
    }

    private onNodeClick(e: ITreeNode) {
        this.setState({ selectedNodeId: e.id.toString() });
    }

    private onNodeExpand(e: ITreeNode) {
        this.expandNode(e.id.toString(), true);
    }

    private onNodeCollapse(e: ITreeNode) {
        this.expandNode(e.id.toString(), false);
    }

    private expandNode(id: string, expand: boolean) {
        const newNodeExpanded = { ...this.state.nodeExpanded, [id]: expand };
        this.treeOfNodes = [];
        this.setState({ nodeExpanded: newNodeExpanded });
    }

    private buildAndSetTreeOfNodes(props: ChildProps<IMainSceneProps, GQL.IQuery>, state: IMainSceneState) {
        if (!props.data || props.data.loading) {
            return;
        }

        const contracts = props.data.contracts || [];
        this.treeOfNodes = buildTree(contracts, state.nodeExpanded);
    }
}
