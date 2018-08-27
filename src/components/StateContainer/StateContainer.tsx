import { Radio, RadioGroup } from '@blueprintjs/core';
import * as React from 'react';

interface IStateContainerProps {
    checked: number | undefined;

    onChange: (newValue: number | undefined) => void;
}

class StateContainer extends React.PureComponent<IStateContainerProps> {
    constructor(props: IStateContainerProps) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    public render() {
        return (
            <div>
                <RadioGroup label="Stav" onChange={this.onChange} selectedValue={this.props.checked}>
                    <Radio label="NENASTAVENO" value={undefined} />
                    <Radio label="Zkontrolovano" value={1} />
                    <Radio label="Nezkontrolovano" value={0} />
                </RadioGroup>
            </div>
        );
    }

    private onChange(e: any) {
        switch (e.target.value) {
            case '1':
                this.props.onChange(1);
                break;
            case '0':
                this.props.onChange(0);
                break;
            case '':
                this.props.onChange(undefined);
        }
    }
}

export default StateContainer;
