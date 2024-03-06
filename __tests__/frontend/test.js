import React from 'react';
import { render, screen } from '@testing-library/react';
import NavBar from '../../client/components/NavBar'; // Assuming the navbar component is named NavBar
import ArticleCard from '../../client/components/articleCard';
import '@testing-library/jest-dom';

describe('NavBar', () => {
  it('Snapshot test', () => {
    expect(NavBar).toMatchSnapshot();
  });
});

describe('Market', () => {
  let text;
  const props = {
    title: 'test',
    author: 'test2',
  };

  beforeEach(() => {
    text = render(<ArticleCard {...props} />);
  });

  it('should display title and author', () => {
    expect(text.getByText('test')).toBeInTheDocument();
    expect(text.getByText('test2')).toBeInTheDocument();
  });
});
