import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
  padding: 200px;
`;

export const ModalContent = styled.div`
  max-width: calc(100vw - 48px);
  max-height: calc(100vh - 24px);
`;

export const ModalButtonClose = styled.button`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 12px;
  right: 32px;

  display: flex;
  align-items: center;
  justify-content: center;

  background: white;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  cursor: pointer;

  transition: color var(--transition-method);

  :hover, :focus {
    color: blue;
  }
`;

