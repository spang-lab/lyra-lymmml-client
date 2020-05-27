import React, { useContext } from 'react';
import { GlobalContext } from 'lyra-library';

const StringResult = () => {
    const { identifiers } = useContext(GlobalContext);
    const [identifier] = identifiers;
    if (!identifier) {
        return (<div />);
    }
    const { name } = identifier;
    return (
        <div>
            <img
                src={`https://string-db.org/api/highres_image/network?identifiers=${name}&species=9606&network_flavor=evidence`}
                alt="String network"
                style={{ width: '100%' }}
            />
        </div>
    );
};

export default StringResult;

