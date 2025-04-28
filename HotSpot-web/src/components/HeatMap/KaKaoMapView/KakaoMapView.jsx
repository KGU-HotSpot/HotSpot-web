// 1. NaverMapView.jsx 내 useEffect에서 kakao map 스크립트를 불러온 후 실행하도록 수정
import React, { useEffect } from 'react';

const { kakao } = window; // 전역 객체에서 kakao를 가져옵니다.

function KakaoMapView ()  {

  useEffect(() => {
    if (window.kakao && window.kakao.maps) {
      window.kakao.maps.load(() => {
        const container = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(37.5665, 126.978),
          level: 3,
        };
        new window.kakao.maps.Map(container, options);
      });
    }
  }, []);

  return (
    <>
      <div id="map" style={{
        width: '100vw',
        height: 'calc(100vh - 64px)',
        position: 'absolute',
        top: '64px',
        left: 0,
        zIndex: 0,
        }}></div>
    
    </>
  );
};

export default KakaoMapView;