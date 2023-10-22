import React from 'react';
import PropTypes from 'prop-types';
import './text.scss';

interface CalloutProps {
  children: React.ReactNode;
  color: string;
}

export const Callout: React.FC<CalloutProps> = ({ children,  color}) => {
  return (
    <p className={`callout ${color}`}>
      {children}
    </p>
  );
}
