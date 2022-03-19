import React, { useState, useEffect } from 'react'

export const APIComponent: React.FunctionComponent = () => {
    const [data, setData] = useState<{
        name: string;
    }>();

    useEffect(() => {
        let isMounted = true;
        fetch("https://restcountries.com/v3.1/name/united")
            .then((response) => response.json())
            .then((data) => {
                if (isMounted) {
                    setData({ name: data[0].name });
                }
            });
        return () => {
            isMounted = false;
        };
    }, []);

    return <div>{data && <div role="contentinfo">Name is {data.name}</div>}</div>;
}
