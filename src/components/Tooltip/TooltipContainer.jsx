import React, { useState, useRef, useContext } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import TooltipContext from './TooltipContext';
import TooltipComponent from './TooltipComponent';
import { calcX, calcY, calcXRevert } from './helpers';

const TooltipContainer = ({
  isRevert,
  tooltipElement,
  disable,
  children,
  className,
  style,
  offset = 0,
}) => {
  const [show, setShow] = useState(false);
  const [cords, setCords] = useState({ x: 0, y: 0 });

  const tooltipRef = useRef(null);
  const node = useContext(TooltipContext);

  const handleMouseOver = () => {
    setShow(true);
  };

  const handleMouseLeave = () => {
    setShow(false);
  };

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { width, height } = tooltipRef.current.getBoundingClientRect();
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const x = isRevert
      ? calcXRevert(clientX, width, windowWidth, offset)
      : calcX(clientX, width, windowWidth, offset);
    const y = calcY(clientY, height, windowHeight, offset);
    setCords({ x, y });
  };

  if (disable) return children;

  return (
    <>
      {show && node
        ? ReactDOM.createPortal(
            <TooltipComponent ref={tooltipRef} x={cords.x} y={cords.y}>
              {tooltipElement()}
            </TooltipComponent>,
            node
          )
        : null}
      {/* eslint-disable-next-line jsx-a11y/mouse-events-have-key-events */}
      <div
        data-test="component-children-wrapper"
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        className={className}
        style={style}
      >
        {children}
      </div>
    </>
  );
};

TooltipContainer.defaultProps = {
  disable: false,
  isRevert: false,
  offset: 0,
  className: '',
  style: {},
};

TooltipContainer.propTypes = {
  disable: PropTypes.bool,
  isRevert: PropTypes.bool,
  offset: PropTypes.number,
  tooltipElement: PropTypes.func.isRequired,
  children: PropTypes.element.isRequired,
  className: PropTypes.string,
  style: PropTypes.object,
};

export default TooltipContainer;
