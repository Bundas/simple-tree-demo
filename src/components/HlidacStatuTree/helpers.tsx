import { Button, ITreeNode } from '@blueprintjs/core';
import * as _ from 'lodash';
import * as React from 'react';

import { INodeExpanded } from '../../scenes/MainScene/MainScene';

export const buildTree = (contracts: GQL.IContract[], nodeExpanded: INodeExpanded): ITreeNode[] => {
    let winners = new Array<GQL.IWinner>();
    let submitters = new Array<GQL.ISubmitter>();

    for (const contract of contracts) {
        winners.push(...contract.winners);
        submitters.push(contract.submitter);
    }

    winners = _.uniqBy(winners, 'id'); // lepsi by byl nejaky hash-list, aby se duplicity filtrovaly uz pri zapisu
    submitters = _.uniqBy(submitters, 'id');

    const submittersNode = buildSubmittersTree(submitters, contracts, nodeExpanded);
    const winnersNode = buildWinnersTree(winners, nodeExpanded);

    const rootNode: ITreeNode = {
        childNodes: [submittersNode, winnersNode],
        hasCaret: true,
        id: 'root',
        isExpanded: nodeExpanded.root,
        label: <b>Hlídač smluv</b>
    };

    return [rootNode];
};

const buildSubmittersTree = (submitters: GQL.ISubmitter[], contracts: GQL.IContract[], nodeExpanded: INodeExpanded) => {
    const submittersNode: ITreeNode = {
        childNodes: [],
        hasCaret: true,
        id: 'submitters',
        isExpanded: nodeExpanded.submitters,
        label: <b>Zadavatelé</b>,
        secondaryLabel: <Button icon={'add'} />
    };

    for (const submitter of submitters) {
        const contractsNode: ITreeNode = {
            childNodes: [],
            id: submitter.id + '-z',
            isExpanded: nodeExpanded[submitter.id + '-z'],
            label: <b>Zakázky</b>,
            secondaryLabel: <Button icon={'add'} />
        };

        const submitterTempNode: ITreeNode = {
            childNodes: [contractsNode],
            id: submitter.id,
            isExpanded: nodeExpanded[submitter.id],
            label: submitter.title
        };

        for (const contract of contracts.filter(c => c.submitter.id === submitter.id)) {
            if (contractsNode.childNodes) {
                contractsNode.childNodes.push({
                    id: contract.id,
                    isExpanded: nodeExpanded[contract.id],
                    label: contract.title
                });
            }
        }

        if (submittersNode.childNodes) {
            submittersNode.childNodes.push(submitterTempNode);
        }
    }

    return submittersNode;
};

const buildWinnersTree = (winners: GQL.IWinner[], nodeExpanded: INodeExpanded) => {
    const winnersNode: ITreeNode = {
        childNodes: [],
        hasCaret: true,
        id: 'winners',
        isExpanded: nodeExpanded.winners,
        label: <b>Výherci</b>
    };

    for (const winner of winners) {
        const winnerTempNode: ITreeNode = {
            id: winner.id,
            isExpanded: nodeExpanded[winner.id],
            label: winner.title
        };

        if (winnersNode.childNodes) {
            winnersNode.childNodes.push(winnerTempNode);
        }
    }

    return winnersNode;
};
