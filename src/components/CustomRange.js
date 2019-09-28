import React from "react";
import { Range, getTrackBackground } from "react-range";

class CustomRange extends React.Component {
  render() {
    const { min, max, minLimit, maxLimit, step, updateFilter, prefix } = this.props;

    return (
      <div className="range-container">
        <Range
          step={step}
          min={minLimit}
          max={maxLimit}
          values={[min, max]}
          onChange={values => updateFilter(values)}
          renderTrack={({ props, children }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "4px",
                width: "100%",
                backgroundColor: "#fff",
                borderRadius: "4px",
                background: getTrackBackground({
                  values: [min, max],
                  colors: ["#fff", "#F26101", "#fff"],
                  min: 0,
                  max: maxLimit
                })
              }}
            >
              {children}
            </div>
          )}
          renderThumb={({ index, props }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "20px",
                width: "42px",
                backgroundColor: "#F26101",
                color: "#fff",
                borderRadius: "4px",
                textAlign: "center",
                fontSize: "12px",
                // marginTop: "32px",
                paddingTop: "2px"
              }}
            >
              <span>
                {prefix && prefix}
                {index === 0 ? min : max}
              </span>
            </div>
          )}
        />
      </div>
    );
  }
}

export default CustomRange;
