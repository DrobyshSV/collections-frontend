import React, { ReactNode } from 'react';
import { Modal as ModalBootstrap } from 'react-bootstrap';
import { ModalProps } from 'react-bootstrap/Modal';
interface CustomModalProps extends ModalProps {
  className?: string;
  children?: ReactNode;
  lazy?: Boolean;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = (props: CustomModalProps) => {
  const { className, children, lazy, isOpen, onClose, ...otherProps } = props;

  if (lazy && !isOpen) {
    return null;
  }

  return (
    <ModalBootstrap
      className={className}
      show={isOpen}
      onHide={onClose}
      {...otherProps}
    >
      {children}
    </ModalBootstrap>
  );
};
