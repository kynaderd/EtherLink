// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EtherLink title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EtherLink/i);
    expect(titleElement).toBeInTheDocument();
});
