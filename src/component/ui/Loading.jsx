import React from 'react'
import styled, { keyframes } from 'styled-components';
// Keyframe animation for spinner rotation
const spinAnimation = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Styled spinner component
const Spinner = styled.div`
  border: 4px solid #0b65e34b;
  border-top: 4px solid #0B65E3;
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: ${spinAnimation} 0.8s linear infinite;
`;

const Loading = () => {
  return <Spinner />;
};

export default Loading;