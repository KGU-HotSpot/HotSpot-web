import React from 'react';

import '../../../styles/components/HeatMap/Filter/SelectCity.css';


function SelectCity() {
    return(
        <>
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

export default SelectCity;