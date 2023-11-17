import { Suspense } from 'react';

import { classNames } from '@/shared/lib/classNames/classNames';

import { SignFormAsync } from '../SignForm/SignForm.async';
import { Spinner } from 'react-bootstrap';
import { Modal } from '@/shared/ui/Modal';

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
