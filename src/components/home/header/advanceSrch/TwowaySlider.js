import React, { useState, useEffect } from "react";
import MultiRangeSlider from "multi-range-slider-react";
import '../common.css';

const TwoWayRangeSlider = ({ level, value, minValue, maxValue, start, end, sign }) => {
    const [minValueShow, setMinValueShow] = useState(start);
    const [maxValueShow, setMaxValueShow] = useState(end);

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
        minimumFractionDigits: 0,
    });

    useEffect(() => {
        setMinValueShow(start);
        setMaxValueShow(end);
    }, [start, end]);

    return (
        <div className="py-6">

            <div className="flex items-center text-sm space-x-2">
                <p>{level}:</p>
                <p>{(sign) ? formatter.format(minValueShow) : minValueShow} </p>
                <p>-</p>
                <p>{(sign) ? formatter.format(maxValueShow) : maxValueShow} </p>
                <p>{value}</p>
            </div>

            <MultiRangeSlider
                style={{
                    border: "none", padding: "10px", boxShadow: "none", outline: "none"
                }}
                label="false"
                ruler="false"
                barLeftColor="#E7F0FF"
                barRightColor="#E7F0FF"
                barInnerColor="#1563DF"
                thumbLeftColor="#1563DF"
                thumbRightColor="#1563DF"
                min={minValue}
                max={maxValue}
                minValue={minValueShow}
                maxValue={maxValueShow}
                onInput={(e) => {
                    setMinValueShow(e.minValue);
                    setMaxValueShow(e.maxValue);
                }}
            />

            <div className="flex justify-between items-center">
                <p>{(sign) ? formatter.format(minValue) : minValue}</p>
                <p>{(sign) ? formatter.format(maxValue) : maxValue}</p>
            </div>
        </div>
    );
};

export default TwoWayRangeSlider;
