import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 mt-4">
      <div className="container text-center">
        <p className="mb-0">
          © 2024 <strong>Phooms</strong> - All Rights Reserved
        </p>
        <p className="mt-2">
          Designed by <strong>Phooms</strong>
        </p>
        <div className="social-icons mt-3">
          <a href="https://www.facebook.com/profile.php?id=100007400148307" className="text-light me-3" target="_blank">
            <i className="fab fa-facebook fa-lg"></i>
          </a>
          <a href="https://github.com/Phoomss" className="text-light me-3" target="_blank">
            <i className="fab fa-github fa-lg"></i>
          </a>
          <a href="https://www.linkedin.com/in/narongsak-p-4577102a8/" className="text-light me-3" target="_blank">
            <i className="fab fa-linkedin fa-lg"></i>
          </a>
          <a href="https://medium.com/@narongsakP" className="text-light" target="_blank">
            <i className="fab fa-medium fa-lg"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
