import React, { useEffect } from 'react';
import { useHistory } from '@docusaurus/router';

const Home: React.FC = () => {
    const history = useHistory();

    useEffect(() => {
        history.push('/DeluxeHubReloadedDocs/welcome');
    }, [history]);

    return null;
};

export default Home;
