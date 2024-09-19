import { render, screen } from '@testing-library/react';
import Alert from 'app/components/Alert/Alert';
import { awsS3Url } from 'app/util/constants';

describe('Alert component', () => {
  it('should have the default type attributes', () => {
    //Arrange
    const text = 'Success text';
    const defaultAlertType = 'success';

    const divContainerClass = `Alert ${defaultAlertType}`;

    //Act
    render(<Alert>{text}</Alert>);
    const divContainer = screen.getByTestId('alertContainer');
    const image: HTMLImageElement = screen.getByAltText(defaultAlertType);

    //Assert
    expect(divContainer).toBeInTheDocument();
    expect(divContainer).toHaveAttribute('class', divContainerClass);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', `${awsS3Url}/img/icons/check-circle-24px.svg`);
    expect(image).toHaveAttribute('class', defaultAlertType);
  });

  it('should have the correct type attributes', () => {
    //Arrange
    const text = 'Precaución!';
    const customAlertType = 'warning';

    //Act
    render(<Alert type={customAlertType}>{text}</Alert>);
    const divContainer = screen.getByTestId('alertContainer');
    const image: HTMLImageElement = screen.getByAltText('warning');

    //Assert
    expect(divContainer).toBeInTheDocument();
    expect(divContainer).toHaveClass('Alert warning', { exact: true });
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute('src', `${awsS3Url}/img/icons/report-24px.svg`);
    expect(image).toHaveClass('warning', { exact: true });
  });

  it('should have correct text', () => {
    //Arrange
    const text = 'Información importante';

    //Act
    render(<Alert>{text}</Alert>);

    //Assert
    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
