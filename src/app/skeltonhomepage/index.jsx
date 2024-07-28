import React from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const HomeSkelton = () =>  {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
        <Skeleton height={20} width={570} style={{ marginBottom: '20px' }} />
        <Skeleton height={350} width={400} style={{ marginBottom: '20px' }} />
        <Skeleton height={40} width={100} />
      </div>
    )
}
export default HomeSkelton;