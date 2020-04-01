import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import TooltipContext from './TooltipContext';

const TooltipProvider = ({ children }) => {
  const [context, setContext] = useState();

  const nodeRef = useRef(null);

  useEffect(() => {
    const node = document.createElement('div');
    node.style.position = 'relative';
    node.style.zIndex = '9999';

    nodeRef.current = node;

    document.body.appendChild(nodeRef.current);
    return () => {
      document.body.removeChild(nodeRef.current);
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
