

import { useParams } from 'react-router-dom';

const NorW = (props) => {

    const {input, textColor, bgColor} = useParams();

    const styling = {
        color: textColor,
        backgroundColor: bgColor,
    };

    return (
        <div>
            {isNaN(+input) ? 
            <h1 style={styling}>
                This word is: {input}</h1> : <h1 style={styling}> 
                This number is: {input}</h1>}
        </div>
    )
};

export default NorW;