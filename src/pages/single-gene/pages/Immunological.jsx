import React from 'react';
import { Plot } from 'lyra-library';

const ImmunologicalResult = () => (
    <div>
        <Plot name="lymmml.immunological.barplot" dataset="macrophages" height={600} />
        <h3> Source: </h3>
        <blockquote className="blockquote">
            <p className="mb-0">
                <a href="https://www.immgen.org" target="blank">
                    https://www.immgen.org
                </a>
            </p>
        </blockquote>
    </div>
);

export default ImmunologicalResult;

