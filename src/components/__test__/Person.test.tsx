import React from 'react';
import { render, screen } from '@testing-library/react';
import { Person } from '../Person';

test('renders learn react link', () => {
    render(<Person name="test" />);
    const linkElement = screen.getByText(/Name is test/i);
    expect(linkElement).toBeInTheDocument();
});

test('renders role contentinfo', () => {
    render(<Person name="test" />);
    const divElement = screen.getByRole("contentinfo");
    expect(divElement).toHaveTextContent("Name is test");
    expect(divElement).toHaveAttribute("role", "contentinfo");
});

