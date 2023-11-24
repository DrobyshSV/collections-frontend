import { Suspense } from 'react';
import { Spinner } from 'react-bootstrap';

import { classNames } from '@/shared/lib/classNames/classNames';
import { Modal } from '@/shared/ui/Modal';

import { SignFormAsync } from '../AuthForm/SignForm.async';

interface LoginModalProps {
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const SignModal = ({ className, isOpen, onClose }: LoginModalProps) => (
  <Modal
    className={classNames('', {}, [className])}
    isOpen={isOpen}
    onClose={onClose}
    lazy
  >
    <Suspense fallback={<Spinner animation="border" variant="primary" />}>
      <SignFormAsync onSuccess={onClose} />
    </Suspense>
  </Modal>
);
