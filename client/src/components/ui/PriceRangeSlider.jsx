import Slider from "rc-slider";

const PriceRangeSlider = ({value, handleChange, minValue, maxValue}) => {
    return (
        <>
            <Slider range minValue={minValue} maxValue={maxValue} onChange={handleChange} value={value} />
        </>
    )
}

export default PriceRangeSlider;