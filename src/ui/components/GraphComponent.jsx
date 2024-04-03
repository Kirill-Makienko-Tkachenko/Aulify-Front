

// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from "prop-types";


const GraphComponent = ({ children }) => {
    return (
        <div
            style={{
                width: 520,
                height: 300,
                backgroundColor: '#1D1934',
                padding: 20,
                borderRadius: 10,
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            }}
        >
            {children}
        </div>
    );
};

GraphComponent.propTypes = {
    children: PropTypes.node.isRequired,
};

export default GraphComponent;