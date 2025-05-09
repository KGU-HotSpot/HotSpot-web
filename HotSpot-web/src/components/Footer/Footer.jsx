// src/components/Footer/Footer.jsx
import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <h2 className="footer-logo">HotSpot</h2>
        </div>

        <div className="footer-menus">
          <div className="footer-menu">
            <h4 className="footer-menu-title">서비스</h4>
            <ul>
              <li>유동인구 분석</li>
              <li>창업 추천</li>
              <li>상권 정보</li>
            </ul>
          </div>

          <div className="footer-menu">
            <h4 className="footer-menu-title">회사</h4>
            <ul>
              <li>회사 소개</li>
              <li>이용약관</li>
              <li>개인정보처리방침</li>
            </ul>
          </div>
        </div>

        <div className="footer-description">
          <p className="footer-description-text">
            AI 기반 상권 분석 서비스 HotSpot은
            <br />
            누구나 쉽게 데이터로 창업을 준비할 수 있도록 돕습니다.
          </p>
        </div>
      </div>

      <div className="footer-copy">
        <p>© 2025 HotSpot. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
