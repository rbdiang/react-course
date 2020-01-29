import React from 'react';
import './CharComponent.css';

const charComponent = (props) => {
    return  <textarea 
                className={'CharComponent'} readOnly={true}
                onClick={props.clicked} value={props.value} />;
}

export default charComponent;