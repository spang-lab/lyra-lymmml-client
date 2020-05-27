import React, { useContext } from 'react';
import { Plot } from 'lyra-library';

const Playground = () => {
    return (
        <div>
            <Plot name="lymmml.mpi.boxplot" height={500} />
        </div>
    );
};

export default Playground;
