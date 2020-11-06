import React from 'react';

const Colors = (props) =>{

    return(
        <div className="container">
            {
                props.boxColor.map( (item, i) => 
                    <div key={ i } className="col-md-6 p-2" style={{background: item, width: 300, height: 300,display: "inline-flex"}}>{ item }
                    </div>
                )
            }
        </div>

        
    )
}

export default Colors;