import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Form Challenge on load', () => {
  render(<App />);
  const linkElement = screen.getByRole('heading', {name: /form challenge/i});
  expect(linkElement).toBeInTheDocument();
});

test('renders Form Challenge on load', () => {
  render(<App/>);
  const linkElement = screen.getByRole('heading', {name: /form challenge/i});
  expect(linkElement).toBeInTheDocument();
});
