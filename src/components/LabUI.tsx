
import { observer } from 'mobx-react';
import React, { ReactNode } from 'react';
// import { withRouter, RouteComponentProps } from 'react-router-dom';

import Lab from '../model/Lab';

// import labImg from '../labEntryBackground.png';


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
      <div className=".lab">
        <h1>{name}</h1>
        <h2>{country}</h2>
        <h2>{ethAddress}</h2>
        <h2>{website}</h2>
        <a href={website} target="_blank" rel="noopener noreferrer">Website</a>
      </div>
    );
  }
}


// export default withRouter<Lab>(LabUI);
export default LabUI;
