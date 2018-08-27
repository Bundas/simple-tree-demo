import { Classes, ITreeNode, Tree } from '@blueprintjs/core';
import * as React from 'react';
import NewSubmitterModal from '../SubmitterModal/NewSubmitterModal';

interface IHlidacStatuTreeProps {
    tree: ITreeNode[];
    onNodeExpand: (e: ITreeNode) => void;
    onNodeCollapse: (e: ITreeNode) => void;
    onNodeClick?: (e: ITreeNode) => void;
}

interface IHlidacStatuTreeState {
    newSubmitterModalActive: boolean;
    newContractForSubmitterId: string | undefined;
}

class HlidacStatuTree extends React.Component<IHlidacStatuTreeProps, IHlidacStatuTreeState> {
    constructor(props: IHlidacStatuTreeProps) {
        super(props);

        this.state = {
            newContractForSubmitterId: undefined,
            newSubmitterModalActive: false
        };

        this.onNodeExpand = this.onNodeExpand.bind(this);
        this.onNodeCollapse = this.onNodeCollapse.bind(this);
        this.onNodeClick = this.onNodeClick.bind(this);
    }

    public render() {
        return (
            <>
                <NewSubmitterModal visible={true} />
                <Tree
                    onNodeExpand={this.onNodeExpand}
                    onNodeCollapse={this.onNodeCollapse}
                    onNodeClick={this.onNodeClick}
                    contents={this.props.tree}
                    className={Classes.ELEVATION_0}
                />
            </>
        );
    }

    private onNodeClick(e: ITreeNode) {
        if (this.props.onNodeClick) {
            this.props.onNodeClick(e);
        }
    }

    private onNodeExpand(e: ITreeNode) {
        this.props.onNodeExpand(e);
    }

    private onNodeCollapse(e: ITreeNode) {
        this.props.onNodeCollapse(e);
    }
}

export default HlidacStatuTree;
