import React from 'react';

const Footer = () => {
  return (
    <footer style={{ padding: '20px 0', textAlign: 'center', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '12px' }}>
      <div className="container">
        &copy; {new Date().getFullYear()} X8 PRODUCTION. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;