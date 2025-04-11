import { useState } from 'react'
import '/src//styles/MapPage/map.css'
import Banner from '/src/components/Banner/Banner';
import Filter from '/src/components/HeatMap/Filter/Filter';

function Map() {
    return(
        <>
            <Banner/>
            <Filter/>
            <div className='map-rapper'>
                <div className='map-state'>서울 특별시
                    <img src="/src/assets/icons/arrow.svg" alt="화살표" className='arrow-img'/>
                </div>
                <div className='map-county'>도봉구
                <img src="/src/assets/icons/arrow.svg" alt="화살표" className='arrow-img'/>
                </div>
                <div className='map-city'>도봉 1동
                <img src="/src/assets/icons/arrow.svg" alt="화살표" className='arrow-img'/>
                </div>
            </div>



        </>
    );
}

export default Map;