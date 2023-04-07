import { render, screen } from '@testing-library/react';
import Number from './Number';


test('renders passed number as <code>', () => {
    const numberOfDays = 123;
    render(<Number number={numberOfDays}/>);
    const numberOfDaysTag = screen.getByText(
        (numberOfDays, element) => element.tagName.toLowerCase() === 'code');
    expect(numberOfDaysTag).toBeVisible();
});
