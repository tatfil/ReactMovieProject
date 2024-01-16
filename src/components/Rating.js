import PropTypes from "prop-types";
import "./Rating.css";

function Rating({ id, defaultValue = 0 }) {
  return <span>{defaultValue}</span>;
}

Rating.propTypes = {
  defaultValue: PropTypes.number,
};

export default Rating;
