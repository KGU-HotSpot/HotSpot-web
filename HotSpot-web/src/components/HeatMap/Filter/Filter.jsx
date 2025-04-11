import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import { useState, useEffect } from 'react';

import '../../../styles/components/HeatMap/Filter/Filter.css';

function Filter() {

    const [rangeValue, setRangeValue] = useState(0);
    const [depositRangeValue, setDepositRangeValue] = useState([1000, 50000]);

    useEffect(() => {
        const slider = document.querySelector('.styled-range');
        if (slider) {
            const max = Number(slider.max);
            const percent = (rangeValue / max) * 100;
            slider.style.setProperty('--progress', `${percent}%`);
        }
    }, [rangeValue]);

    return (
        <>
            {/* filter의 전체적인 컨테이너 */}
            <div className='Filter-container'>
                <div className='Filter-title'>필터</div> {/* filter의 제목 */}

                {/* 시간 설정에 관한 내용 */}
                <div className='Filter-timeset-section'>
                    <div className='Filter-options-title'>시간 설정
                        <img src="/src/assets/icons/date.svg" alt="달력" className='date-img'/>
                    </div>
                    <input
                        type='range'
                        className='styled-range'
                        min="0"
                        max="50000"
                        step="100"
                        value={rangeValue}
                        onChange={(e) => setRangeValue(Number(e.target.value))}
                        /> {/* range를 통해 시간을 설정 */}

                    <div className="Filter-line" />
                </div>

                {/* 성별에 관한 내용 */}
                <div className='Filter-gender-section'>
                    <div className='Filter-options-title'>성별</div>
                    <div className='Filter-gender-options'>
                        <label><input type='checkbox'/> 남성</label> {/* checkbox를 통해 선택 */}
                        <label><input type='checkbox'/> 여성</label>
                    </div>
                    <div className="Filter-line" />
                </div>

                {/* 연령대에 관한 내용 */}
                <div className='Filter-age-section'>
                    <div className='Filter-options-title'>연령대</div>
                    <div className='Filter-age-options'>
                        <label><input type='checkbox'/> 10대</label> {/* checkbox를 통해 선택 */}
                        <label><input type='checkbox'/> 20대</label>
                        <label><input type='checkbox'/> 30대</label>
                        <label><input type='checkbox'/> 40대</label>
                        <label><input type='checkbox'/> 50대 이상</label>
                    </div>
                    <div className="Filter-line" />
                </div>

                {/* 보증금에 관한 내용 */}
                <div className='Filter-deposit-section'>
                    <div className='Filter-options-title'>보증금</div>

                    
                    {/* Slider 라이브러리를 이용해 최소, 최대를 설정 */}
                    <div className='Filter-deposit-range-wrapper'>
                        <Slider
                            range
                            min={0}
                            max={50000}
                            defaultValue={[1000, 50000]}
                            onChange={(value) => setDepositRangeValue(value)}
                        ></Slider>

                        {/* Slder의 요소, 움직였을때 가변적으로 값이 변화하도록 설정 */}
                        <div className='Filter-deposit-elements'>
                            <div className='Filter-deposit-elements-left'>
                                <div style={{width: '2px', height: '6px', backgroundColor: 'black', margin: '0 auto', borderRadius: '20px'}} />
                                <span style={{fontSize: '12px', fontWeight: '500', color: '#d5d5d5', textAlign: 'center'}}>최소</span>
                            </div>

                            <div className='Filter-deposit-elements-center'>
                                {`${depositRangeValue[0].toLocaleString()}만원 ~ ${depositRangeValue[1].toLocaleString()}만원`}   
                            </div>

                            <div className='Filter-deposit-elements-right'>
                                <div style={{width: '2px', height: '6px', backgroundColor: 'black', margin: '0 auto', borderRadius: '20px'}} />
                                <span style={{fontSize: '12px', fontWeight: '500', color: '#d5d5d5', textAlign: 'center'}}>최대</span>
                            </div>
                        </div>

                    </div>

                    <div className="Filter-line" />
                </div>

                {/* 상권 선택에 관한 내용 */}
                <div className='Filter-business-district-section'>
                    <div className='Filter-options-title'>상권 선택</div>    
                    <div className='Filter-business-district-options'>
                        <div>음식점
                        <img src="/src/assets/icons/arrow.svg" alt="화살표" className='arrow-img'/>
                        </div>
                        <div>한식
                        <img src="/src/assets/icons/arrow.svg" alt="화살표" className='arrow-img'/>
                        </div>
                    </div>
                    <div className="Filter-line" />
                </div>

                {/* 매출액에 관한 내용, input을 통해 금액을 산정 */}
                <div className='Filter-options-title'>매출액 산정
                    <input type="number" />
                </div>

                {/* button을 통해 조건을 삭제 */}
                <button className='Filter-delete-conditions'>조건 삭제</button>


            </div>
        </>
    );
}

export default Filter;