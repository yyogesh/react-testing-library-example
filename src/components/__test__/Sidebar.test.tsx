import React from 'react';
import { render, screen } from '@testing-library/react';
import { SideBar } from '../Sidebar';

test('renders SideBar', () => {
    const items = [
        {
            name: "test",
            href: "/test",
        },
        {
            name: "test1",
            href: "/test2",
        },
    ];
    render(<SideBar items={items} />);
    const anchorElements = screen.getAllByRole("navigation");
    // console.log('anchorElements', anchorElements);
    expect(anchorElements[0]).toHaveTextContent(items[0].name);
    expect(anchorElements[0]).toHaveAttribute("href", items[0].href);
});



