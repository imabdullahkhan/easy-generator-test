// Toast.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Toast from './Toast';
import { ToastProps, ToastType } from '../../props-types/ToastProps';

describe('Toast Component', () => {
  const defaultProps: ToastProps = {
    message: 'Test message',
    type: ToastType.INFO,
    closeToast: jest.fn(),
  };


  it('should display the correct message', () => {
    render(<Toast {...defaultProps} />);
    expect(screen.getByText('Test message')).toBeInTheDocument();
  });

  it('should call closeToast handler when close button is clicked', () => {
    render(<Toast {...defaultProps} />);
    const closeButton = screen.getByRole('button');
    fireEvent.click(closeButton);
    expect(defaultProps.closeToast).toHaveBeenCalledTimes(1);
  });
});
