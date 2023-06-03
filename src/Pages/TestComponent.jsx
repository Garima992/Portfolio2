import * as React from 'react';

const TestElements=()=>{
    
    const [counter, setcounter]=React.useState(0);
    return(
            <>
                <h1 data-testid='counter'>{counter}</h1>
                <button  data-testid='button-up' onClick={()=> setcounter=(counter+1)}>
                    {" "}
                    Up
                    </button>

                    <button disabled data-testid='button-down' onClick={()=> setcounter=(counter-1)}>
                    Down
                    
                    </button>

                
            </>
    );
};

export default TestElements;