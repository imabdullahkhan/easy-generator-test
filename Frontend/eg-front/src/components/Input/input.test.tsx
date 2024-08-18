// Input.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Input from './Input';
import { InputProps } from '../../props-types/InputProps';

describe('Input Component', () => {
  const defaultProps: InputProps = {
    name: 'test',
    id: 'test-id',
    type: 'text',
  };

  it('should render label when label prop is provided', () => {
    render(<Input {...defaultProps} label="Test Label" />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('should not render label when label prop is not provided', () => {
    render(<Input {...defaultProps} />);
    expect(screen.queryByText('Test Label')).not.toBeInTheDocument();
  });

  it('should render input with provided placeholder', () => {
    render(<Input {...defaultProps} placeholder="Test Placeholder" />);
    expect(screen.getByPlaceholderText('Test Placeholder')).toBeInTheDocument();
  });

  it('should render input without placeholder if not provided', () => {
    render(<Input {...defaultProps} />);
    expect(screen.getByPlaceholderText('')).toBeInTheDocument();
  });

  it('should apply required attribute when required prop is true', () => {
    render(<Input {...defaultProps} required={true} />);
    expect(screen.getByRole('textbox')).toHaveAttribute('required');
  });

  it('should not apply required attribute when required prop is false', () => {
    render(<Input {...defaultProps} required={false} />);
    expect(screen.getByRole('textbox')).not.toHaveAttribute('required');
  });

  it('should display error message when touched and error props are provided', () => {
    render(<Input {...defaultProps} touched={true} error="Test Error" />);
    expect(screen.getByText('Test Error')).toBeInTheDocument();
  });

  it('should not display error message when touched is false', () => {
    render(<Input {...defaultProps} touched={false} error="Test Error" />);
    expect(screen.queryByText('Test Error')).not.toBeInTheDocument();
  });

  it('should call onChange handler when input value changes', () => {
    const handleChange = jest.fn();
    render(<Input {...defaultProps} onChange={handleChange} />);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: 'new value' } });
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  it('should call onBlur handler when input loses focus', () => {
    const handleBlur = jest.fn();
    render(<Input {...defaultProps} onBlur={handleBlur} />);
    fireEvent.blur(screen.getByRole('textbox'));
    expect(handleBlur).toHaveBeenCalledTimes(1);
  });
});
