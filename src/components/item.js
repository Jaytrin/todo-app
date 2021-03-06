import React from 'react';

export default props => {
    return (
        <li className = "collection-item">
            <div className="col s8">
                {props.item.title}
            </div>
            <div className="col s4 right-align">
                <button onClick={props.delete} className ="btn red darken-2">Delete</button>
            </div>
        </li>
    );
}

