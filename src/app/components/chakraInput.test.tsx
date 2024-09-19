import { render, screen } from '@testing-library/react';
import ChakraInput, { ChakraInputProps } from './ChakraInput';

describe('ChakraInput', () => {
  const defaultProps: ChakraInputProps = {
    label: 'Test Label',
    input:{}
  };

  it('renders with label', () => {
    render(<ChakraInput {...defaultProps} />);
    expect(screen.getByText('Test Label')).toBeInTheDocument();
  });

  it('renders helper text', () => {
    const props: ChakraInputProps = {
      ...defaultProps,
      helper: 'Test Helper Text',
    };

    render(<ChakraInput {...props} />);
    expect(screen.getByText('Test Helper Text')).toBeInTheDocument();
  });

  it('renders error message', () => {
    const props: ChakraInputProps = {
      ...defaultProps,
      formControlProps: {
        isInvalid: true,
      },
      error: 'Test Error Message',
    };

    render(<ChakraInput {...props} />);
    expect(screen.getByText('Test Error Message')).toBeInTheDocument();
  });

  it('renders right element', () => {
    const props: ChakraInputProps = {
      ...defaultProps,
      rightElement: <div data-testid='test-right-element'>Test Right Element</div>,
    };

    render(<ChakraInput {...props} />);
    expect(screen.getByTestId('test-right-element')).toBeInTheDocument();
  });
});
