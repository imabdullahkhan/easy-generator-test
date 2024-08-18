// src/components/Checkbox/Checkbox.test.tsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Checkbox from './Checkbox';
import '@testing-library/jest-dom/extend-expect'; // For additional matchers

describe('Checkbox Component', () => {
  it('renders correctly with all props', () => {
    render(
      <Checkbox
        label="Accept terms"
        name="terms"
        placeholder="Check this box"
        required
        id="checkbox1"
        type="checkbox"
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('id', 'checkbox1');
    expect(checkbox).toHaveAttribute('type', 'checkbox');
    expect(checkbox).toBeRequired();
  });

  it('renders with default props', () => {
    render(
      <Checkbox
        name="default-checkbox"
        id="checkbox-default"
        type="checkbox"
      />
    );

    const checkbox = screen.getByRole('checkbox');
    expect(checkbox).toBeInTheDocument();
    expect(checkbox).toHaveAttribute('type', 'checkbox');
  });

});
