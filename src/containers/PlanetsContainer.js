import React from 'react';
import { connect } from 'react-redux';
import Planets from '../components/Planets';
class PlanetsContainer extends React.Components {
    
    
    render() {
        return (
            <Planets {...this.props} />    
        );
    }
}

export default connect()(PlanetsContainer);