import PropTypes from 'prop-types';

import './PercentageCircle.css';

const PercentageCircle = ({ percentage }) => {
  const calcValue = 220 - (220 * percentage) / 100;
  return (
    <div className="box">
      <div className="circle">
        <svg>
          <circle
            fill="none"
            strokeWidth="8"
            stroke="#e8e8e8"
            strokeDasharray="220"
            strokeDashoffset="0"
            cx="35"
            cy="35"
            r="35"
          />
          <circle
            fill="none"
            strokeWidth="8"
            stroke="#0290ff"
            strokeDasharray="220"
            strokeDashoffset={calcValue}
            cx="35"
            cy="35"
            r="35"
          />
        </svg>
      </div>
    </div>
  );
};

PercentageCircle.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default PercentageCircle;
