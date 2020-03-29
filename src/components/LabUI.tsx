
import { observer } from 'mobx-react';
import React, { ReactNode } from 'react';
// import { withRouter, RouteComponentProps } from 'react-router-dom';

import Lab from '../model/Lab';

interface LabUIProbs{
  lab: Lab;
}

@observer
class LabUI extends React.Component<LabUIProbs, {}> {
  public render(): ReactNode {
    const {
      name, country, ethAddress, website,
    // eslint-disable-line react/destructuring-assignment
    } = this.props.lab; // eslint-disable-line react/destructuring-assignment

    // todo: instead of an x icon a back arrow would be better.
    return (


      <div style={{ width: '80%', background: '#ff0000' }}>
        <h1>{name}</h1>
        <h1>{country}</h1>
        <h1>{ethAddress}</h1>
        <h1>{website}</h1>
      </div>
    );
  }
}


// export default withRouter<Lab>(LabUI);
export default LabUI;
