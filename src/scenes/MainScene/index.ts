import gql from 'graphql-tag';
import { compose, graphql } from 'react-apollo';

import MainScene from './MainScene';

const contractsQuery = gql`
    query {
        contracts {
            id
            title
            errorCount
            wordCount
            checked
            submitter {
                id
                title
            }
            winners {
                id
                title
            }
        }
    }
`;

export default compose(graphql(contractsQuery))(MainScene);
