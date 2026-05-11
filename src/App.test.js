// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SmartNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SmartNode/i);
    expect(titleElement).toBeInTheDocument();
});
