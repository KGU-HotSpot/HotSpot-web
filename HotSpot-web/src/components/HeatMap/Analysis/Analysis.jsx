import React from "react";
import { useState, useEffect } from 'react';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto";

import '../../../styles/components/HeatMap/Analysis/Analysis.css';

function Analysis() {

    const industryData = [
        { name: "외식업", value: 60 },
        { name: "서비스업", value: 20 },
        { name: "소매업", value: 10 }
    ];

    const populationData = [
        {name : '2025-01-15', value: 1200},
        {name : '2025-02-01', value: 1350},
        {name : '2025-03-01', value: 1500},
        {name : '2025-04-01', value: 1650},
        {name : '2025-05-01', value: 1800}
    ]

    const hourlyData = [
        { name: "00~04", value: 20 },
        { name: "04~08", value: 35 },
        { name: "08~12", value: 50 },
        { name: "12~16", value: 95 },
        { name: "16~20", value: 60 },
        { name: "20~24", value: 40 }
    ];

    const genderData = [
        { name: "남성", value: 63 },
        { name: "여성", value: 37 }
    ];

    const rentData = [
        { name: "2024-11", value: 158 },
        { name: "2024-12", value: 159 },
        { name: "2025-01", value: 160 },
        { name: "2025-02", value: 161 },
        { name: "2025-03", value: 161.5 },
        { name: "2025-04", value: 162 },
        { name: "2025-05", value: 162.5 },
        { name: "2025-06", value: 163.5 }
    ];

    const salesData = [
        { name: "2024-11", value: 85 }, 
        { name: "2024-12", value: 83 },
        { name: "2025-01", value: 81 },
        { name: "2025-02", value: 79 },
        { name: "2025-03", value: 78 },
        { name: "2025-04", value: 77 },
        { name: "2025-05", value: 76 },
        { name: "2025-06", value: 75 }
    ];

    const populationBarData = {
        labels: populationData.map(item => item.name),
        datasets: [
            {
                label: '유동인구',
                data: populationData.map(item => item.value),
                backgroundColor: ['#007bff', '#007bff', '#007bff', '#fdaba2', '#fdaba2'],
            },
        ],
    };


    const industryPieData = {
        labels: industryData.map(item => item.name),
        datasets: [
            {
                label: '업종별 분포',
                data: industryData.map(item => item.value),
                backgroundColor: [ '#f2cc75',  '#98d7b4', '#82b6e9'],
            },
        ],
    };

    const hourlyBarData = {
        labels: hourlyData.map(item => item.name),
        datasets: [
            {
                label: '시간대별 매출',
                data: hourlyData.map(item => item.value),
                backgroundColor: ['#007bff', '#007bff', '#007bff', '#fdaba2', '#007bff'],
            },
        ],
    };

    const genderPieData = {
        labels: genderData.map(item => item.name),
        datasets: [
            {
                label: '이용 성별 비율',
                data: genderData.map(item => item.value),
                backgroundColor: ['#007bff', '#fdaba2'],
            },
        ],
    };

    const rentLineData = {
        labels: rentData.map(item => item.name),
        datasets: [
            {
                label: '평균 임대료',
                data: rentData.map(item => item.value),
                borderColor: rentData.map((_, idx) =>
                  idx >= rentData.length - 3 ? '#fdaba2' : '#007bff'
                ),
                borderDash: rentData.map((_, idx) =>
                  idx >= rentData.length - 3 ? [10, 5] : []
                ),
                segment: {
                  borderColor: ctx => {
                    const index = ctx.p0DataIndex;
                    return index >= rentData.length - 3 ? '#fdaba2' : '#007bff';
                  },
                  borderDash: ctx => {
                    const index = ctx.p0DataIndex;
                    return index >= rentData.length - 3 ? [10, 5] : undefined;
                  }
            },
            fill: false,
        },
        ],
    };

    const salesLineData = {
        labels: salesData.map(item => item.name),
        datasets: [
            {
                label: '평균 매출',
                data: salesData.map(item => item.value),
                borderColor: salesData.map((_, idx) =>
                  idx >= salesData.length - 3 ? '#fdaba2' : '#007bff'
                ),
                borderDash: salesData.map((_, idx) =>
                  idx >= salesData.length - 3 ? [10, 5] : []
                ),
                segment: {
                  borderColor: ctx => {
                    const index = ctx.p0DataIndex;
                    return index >= salesData.length - 3 ? '#fdaba2' : '#007bff';
                  },
                  borderDash: ctx => {
                    const index = ctx.p0DataIndex;
                    return index >= salesData.length - 3 ? [10, 5] : undefined;
                  }
            },
            fill: false,
        },
        ],
    };

    return (
        <>
            <div className='Analysis-container'>

                {/* 분석 리포트 제목 */}
                <div className='Analysis-report-title'>분석 리포트</div>

                {/* 업종별 분포 내용 */}
                <div className='Analysis-section'>

                    <div className="Analysis-section-title">업종별 분포</div>

                    <div className="Analysis-type-main">
                        <div className="type-highlight">소매업&nbsp;</div>
                        <div className="type-description">이 가장 많습니다.</div>
                    </div>

                    <div className="Analysis-additional-description">
                        해당 지역의 업종별 분포를 분석한 결과입니다. 가장 높은 비중을 차지하는 업종은 유의하세요.
                    </div>

                    <div className="Analysis-chart"> {/* 업종별 분포 차트 */}
                        <Pie data={industryPieData} key={JSON.stringify(industryPieData)} />
                    </div>

                    <div className="Analysis-line" />

                </div>

                {/* 유동인구 분석 내용 */}
                <div className='Analysis-section'>

                    <div className="Analysis-section-title">유동인구 분석</div>

                    <div className="Analysis-type-main">
                        <div className="type-description">유동인구 수는 일 평균</div>
                        <span className="type-highlight" >&nbsp;000명&nbsp;</span>
                        <div className="type-description">이고 앞으로</div>
                        <div className="type-highlight">&nbsp;000명&nbsp;</div>
                        <div className="type-description">으로</div>
                        <div className="type-highlight">&nbsp;증가할 것&nbsp;</div>
                        <div className="type-description">으로 예측됩니다.</div>
                    </div>

                    <div className="Analysis-additional-description">
                    해당 지역의 유동인구를 분석한 결과입니다. 향후 유동인구를 고려해 준비해야합니다.
                    </div>

                    <div className="Analysis-chart"> {/* 유동인구 분석 차트 */}
                        <Bar data={populationBarData} key={JSON.stringify(populationBarData)} />
                    </div>

                    <div className="Analysis-line" />

                </div>

                {/* 시간대별 매출 분석 내용 */}
                <div className="Analysis-section">

                    <div className="Analysis-section-title">시간대별 매출 분석</div>

                    <div className="Analysis-type-main">
                        <div className="type-highlight">12~16시&nbsp;</div>
                        <div className="type-description">매출이 가장 높아요.</div>
                    </div>

                    <div className="Analysis-additional-description">
                    점심 시간 이용 고객이 가장 많은 지역 입니다. 요식업을 고려 해보세요.
                    </div>

                    <div className="Analysis-chart"> {/* 시간대별 매출 분석 차트 */}
                        <Bar data={hourlyBarData} key={JSON.stringify(hourlyBarData)} />
                    </div>

                    <div className="Analysis-line" />

                </div>

                {/* 이용 성별 분석 내용 */}
                <div className="Analysis-section">

                    <div className="Analysis-section-title">이용 성별 비율</div>

                    <div className="Analysis-type-main">
                        <div className="type-highlight">남성&nbsp;</div>
                        <div className="type-description">의 이용이 가장 많아요.</div>
                    </div>

                    <div className="Analysis-additional-description">
                    남성 고객이 가장 많은 지역 입니다. 남성이 좋아하는 요식업을 준비해보세요.
                    </div>

                    <div className="Analysis-chart"> {/* 이용 성별 차트 */}
                        <Pie data={genderPieData} key={JSON.stringify(genderPieData)} />
                    </div>

                    <div className="Analysis-line" />

                </div>

                {/* 평균 임대료 분석 내용 */}
                <div className="Analysis-section">

                    <div className="Analysis-section-title">평균 임대료</div>

                    <div className="Analysis-type-main">
                    <div className="type-description">평균 임대료는</div>
                        <div className="type-highlight">&nbsp;160만원&nbsp;</div>
                        <div className="type-description">입니다.</div>
                    </div>

                    <div className="Analysis-additional-description">
                    2개월 뒤 평균 임대로는 약 3% 상승 예정입니다.
                    </div>

                    <div className="Analysis-chart"> {/* 이용 성별 차트 */}
                        <Line data={rentLineData} key={JSON.stringify(rentLineData)} />
                    </div>

                    <div className="Analysis-line" />

                </div>

                {/* 평균 매출액 분석 내용 */}
                <div className="Analysis-section">

                    <div className="Analysis-section-title">평균 매출액</div>

                    <div className="Analysis-type-main">
                    <div className="type-description">평균 매출액은</div>
                        <div className="type-highlight">&nbsp;81만원&nbsp;</div>
                        <div className="type-description">입니다.</div>
                    </div>

                    <div className="Analysis-additional-description">
                    2개월 뒤 평균 매출액은 약 10% 하락 예정입니다.
                    </div>

                    <div className="Analysis-chart"> {/* 이용 성별 차트 */}
                        <Line data={salesLineData} key={JSON.stringify(salesLineData)} />
                    </div>

                    <div className="Analysis-line" />

                </div>

                <button className="Profit-loss-calculation">손익 계산하러 가기</button>

            </div>
        </>
    );
}

export default Analysis;