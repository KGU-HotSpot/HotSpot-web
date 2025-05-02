import { useState, useEffect } from 'react'
import '/src//styles/MapPage/map.css'
import Banner from '/src/components/Banner/Banner';
import Filter from '/src/components/HeatMap/Filter/Filter';
import Analysis from '../../components/HeatMap/Analysis/Analysis';
import KakaoMapView from '../../components/HeatMap/KaKaoMapView/KakaoMapView';
import SelectCity from '../../components/HeatMap/Filter/SelectCity';


function Map() {
    
        
    

    return(
        <>
            <KakaoMapView/>

            <div className="content-wrapper">
                <Banner/>
                <Filter/>
                <SelectCity/>
                <Analysis/>
            </div>
            
            


        </>
    );
}

export default Map;