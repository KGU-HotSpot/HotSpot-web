import { useState } from "react";
import '/src/styles/components/Banner/Banner.css'



function Banner() {
    
    return(
        <div className="Banner-container">
            <div className="navigater">
                <img className="logo" src="/src/assets/logo.png" alt="logo" />
                <div className="navi-items">
                    <div className="navi-item-maps">지도</div>
                    <div className="navi-item-recommend">추천 페이지</div>
                    <div className="navi-item-breakpoint">손익 분기점</div>
                    <div className="navi-item-data">데이터 페이지</div>
                </div>
            </div>

        </div>
    );
}

export default Banner;