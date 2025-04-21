// Search.tsx
import React from 'react';
import styles from './Search.module.scss'; // Import module SCSS

const Search: React.FC = () => {
  return (
    <div className={styles['search-box']}>
      {/* icon kính lúp */}
      <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" width="16" height="16">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
        />
      </svg>
      <input type="text" placeholder="Tìm kiếm" />
    </div>
  );
};

export default Search;
