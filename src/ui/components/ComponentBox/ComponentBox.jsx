import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';

const ComponentBox = ({ TopLeftURL, TopRightURL, BottomLeftURL, BottomRightURL }) => {
    const [topLeftData, setTopLeftData] = useState(null);
    const [topRightData, setTopRightData] = useState(null);
    const [bottomLeftData, setBottomLeftData] = useState(null);
    const [bottomRightData, setBottomRightData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = localStorage.getItem('token');

    
    console.log(TopLeftURL)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const headers = {
                    'authorization': `${token}`
                };

                const responses = await Promise.all([
                    fetch(TopLeftURL, { headers }),
                    fetch(TopRightURL, { headers }),
                    fetch(BottomLeftURL, { headers }),
                    fetch(BottomRightURL, { headers })
                ]);

                const data = await Promise.all(responses.map(response => response.json()));
                console.log('Response:', data);

                setTopLeftData(data[0]);
                setTopRightData(data[1]);
                setBottomLeftData(data[2]);
                setBottomRightData(data[3]);
                setIsLoading(false);
            } catch (error) {
                console.error('Error:', error);
                setError(error);
                setIsLoading(false);
            }
        };

        fetchData();
    }, [TopLeftURL, TopRightURL, BottomLeftURL, BottomRightURL]);
    console.log(TopLeftURL)

    const circleStyle = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '150px',
        height: '150px',
        borderRadius: '50%',
        backgroundColor: '#F6BA27',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: "#1D1934",
        fontSize: '30px',
        fontWeight: 'bold',
        textAlign: 'center',
        margin: 'auto',
        boxShadow: 3,
    };

    const number = 90;

    return (
        <>
            {isLoading && <div>Loading...</div>}
            {error && <div>Error: {error.message}</div>}
            {!isLoading && !error && (
                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        height: '300px',
                        position: 'relative'
                    }}
                >
                    <Box sx={{ width: '50%', height: '50%', display: 'flex' }}>
                        {topLeftData && topLeftData.result}
                    </Box>
                    <Box sx={{ width: '50%', height: '50%', display: 'flex', justifyContent: 'end' }}>
                        {topRightData && topRightData.result}
                    </Box>
                    <Box sx={{ width: '50%', height: '50%', display: 'flex', alignItems: 'end' }}>
                        {bottomLeftData && bottomLeftData.result}
                    </Box>
                    <Box sx={{ width: '50%', height: '50%', display: 'flex', alignItems: 'end', justifyContent: 'end' }}>
                        {bottomRightData && bottomRightData.result}
                    </Box>
                    <Box sx={circleStyle}>
                        {number}
                    </Box>
                </Box>
            )}
        </>
    );
};

ComponentBox.propTypes = {
    TopLeftURL: PropTypes.string,
    TopRightURL: PropTypes.string,
    BottomLeftURL: PropTypes.string,
    BottomRightURL: PropTypes.string,
};

export default ComponentBox;
