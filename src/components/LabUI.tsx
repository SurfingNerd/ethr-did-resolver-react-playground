
import { observer } from 'mobx-react';
import React, { ReactNode } from 'react';
// import { withRouter, RouteComponentProps } from 'react-router-dom';

import { Lab } from '../model/Model';

interface LabUIProbs{
  lab: Lab;
}

@observer
class LabUI extends React.Component<LabUIProbs, {}> {
  public render(): ReactNode {
    // todo: instead of an x icon a back arrow would be better.
    return (
      <div style={{width: '80%', background:'#ff0000'}}>
        <h1>{this.props.lab.name}</h1>
        <h1>{this.props.lab.country}</h1>
        <h1>{this.props.lab.ethAddress}</h1>
        <h1>{this.props.lab.webSite}</h1>
      </div>
    );
  }
}


//export default withRouter<Lab>(LabUI);
export default LabUI;
