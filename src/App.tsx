import '@blueprintjs/core/lib/css/blueprint.css';
import './App.css';

import * as React from 'react';

import MainScene from './scenes/MainScene/';

class App extends React.Component {
    public render() {
        return <MainScene />;
    }
}

export default App;
