import React from 'react';

const validationComponent = (props) => {

    const style = {
        color: 'red'
    }

    const tooShort = <p style={style}>Text too short</p>;
    const ok = <p className={'islong'}>Text long enough</p>;

    let p = props.length < props.minLength ? tooShort : ok;
    return p;

}

export default validationComponent;