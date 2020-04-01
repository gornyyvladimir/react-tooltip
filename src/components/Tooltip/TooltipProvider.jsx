import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import TooltipContext from './TooltipContext';

const TooltipProvider = ({ children }) => {
  const [context, setContext] = useState();

  const nodeRef = useRef(null);
  const tooltipRootRef = useRef(null);

  useEffect(() => {
    const tooltipRoot = document.getElementById('tooltip-root');
    const node = document.createElement('div');

    nodeRef.current = node;
    tooltipRootRef.current = tooltipRoot;

    tooltipRootRef.current.appendChild(nodeRef.current);
    return () => {
      tooltipRootRef.current.removeChild(nodeRef.current);
    };
  }, []);

  useEffect(() => {
    setContext(nodeRef.current);
  }, []);

  return (
    <TooltipContext.Provider value={context}>
      {children}
    </TooltipContext.Provider>
  );
};

TooltipProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default TooltipProvider;
