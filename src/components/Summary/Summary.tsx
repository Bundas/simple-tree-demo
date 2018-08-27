import { HTMLTable } from '@blueprintjs/core';
import * as React from 'react';

interface ISummaryProps {
    contracts: GQL.IContract[];
}


class Summary extends React.PureComponent<ISummaryProps> {
    constructor(props: ISummaryProps) {
        super(props);
    }

    public render() {
        return (
            <HTMLTable>
                <thead>
                    <tr>
                        <td>Platce</td>
                        <td>Predmet</td>
                        <td>Pocet chyb</td>
                        <td>Pocet slov</td>
                    </tr>
                </thead>

                <tbody>
                    {this.props.contracts.map(c => {
                        return (
                            <tr key={c.id}>
                                <td>{c.submitter.title}</td>
                                <td>{c.title}</td>
                                <td>{c.errorCount}</td>
                                <td>{c.wordCount}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </HTMLTable>
        );
    }
}

export default Summary;
