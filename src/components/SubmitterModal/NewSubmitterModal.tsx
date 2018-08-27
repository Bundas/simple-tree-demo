import { Classes, FormGroup, InputGroup, Overlay } from '@blueprintjs/core';
import * as classNames from 'classnames';
import * as React from 'react';

interface INewSubmitterModalProps {
    visible: boolean;
}

/*
____  _   _  _____  ____ _____ _   _  _____ 
/ __ \| \ | |/ ____|/ __ \_   _| \ | |/ ____|
| |  | |  \| | |  __| |  | || | |  \| | |  __ 
| |  | | . ` | | |_ | |  | || | | . ` | | |_ |
| |__| | |\  | |__| | |__| || |_| |\  | |__| |
\____/|_| \_|\_____|\____/_____|_| \_|\_____|

*/

class NewSubmitterModal extends React.PureComponent<INewSubmitterModalProps> {
    constructor(props: INewSubmitterModalProps) {
        super(props);
    }

    public render() {
        // if (!this.props.visible) {
        //     return null;
        // }

        const classes = classNames(Classes.CARD, Classes.ELEVATION_4);

        return (
            <Overlay
                className={Classes.OVERLAY_SCROLL_CONTAINER}
                isOpen={false}
                hasBackdrop={true}
                // usePortal={true}
                enforceFocus={true}
            >
                <div className={classes}>
                    <FormGroup
                        helperText={'Helper text with details...'}
                        label="Label"
                        labelFor="text-input"
                        labelInfo={'test'}
                    >
                        <InputGroup id="text-input" placeholder="Placeholder text" />
                    </FormGroup>
                </div>
            </Overlay>
        );
    }
}

export default NewSubmitterModal;
