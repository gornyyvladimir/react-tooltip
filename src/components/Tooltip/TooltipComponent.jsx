import React from 'react';
import PropTypes from 'prop-types';
import styles from './Tooltip.module.css';

const TooltipComponent = React.forwardRef(({ x, y, children }, ref) => (
  <div
    ref={ref}
    className={styles.tooltip}
    style={{ left: x, top: y }}
    data-test="component-tooltip"
  >
    {children}
  </div>
));

TooltipComponent.propTypes = {
  x: PropTypes.number.isRequired,
  y: PropTypes.number.isRequired,
  children: PropTypes.element.isRequired,
};

export default TooltipComponent;
