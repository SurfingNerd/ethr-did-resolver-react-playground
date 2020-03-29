import { observer, inject } from 'mobx-react';
import React from 'react';
import Model from './model/Model';
import logo from './logo.svg';
import './App.css';
import LabUI from './components/LabUI';

interface AppProps {
  model?: Model;
}

@inject('model')
@observer
class App extends React.Component<AppProps> {
  public render(): JSX.Element {
    const { model } = this.props;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Don&apos;t drink too much,
            {' '}
            {model!.name}
            <LabUI lab={model!.labs[0]} />
            <LabUI lab={model!.labs[1]} />
            <LabUI lab={model!.labs[2]} />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
