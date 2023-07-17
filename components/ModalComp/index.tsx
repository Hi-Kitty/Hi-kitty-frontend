import styled from '@emotion/styled';
import Modal from 'react-modal';
import { colors } from '../../styles/colors';
import { useEffect } from 'react';

interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  children: React.ReactNode;
  width?: string;
  height?: string;
}

export default function ModalComp({ isOpen, onRequestClose, children, width, height }: ModalProps) {
  const handleContentClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <>
          <Overlay />
          <Container onClick={onRequestClose}>
            <Content width={width} height={height} onClick={handleContentClick}>
              {children}
            </Content>
          </Container>
        </>
      )}
    </>
  );
}

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
`;

const Content = styled.div<{ width?: string; height?: string }>`
  display: flex;
  justify-content: center;
  background: ${colors.white};
  overflow: auto;
  width: ${({ width }) => width ?? '380px'};
  height: ${({ height }) => height ?? '640px'};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-overflow-scrolling: touch;
  border-radius: 1px;
  outline: none;
  border: none;
  z-index: 10;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 100;
`;
