import React from "react";

const Footer = () => {
  return (
    <footer className="mb-0 text-center">
      <div className="d-flex flex-column align-items-center justify-content-center pb-5">
        <div className="col-md-6">
          <p className="mb-3 mb-md-0">
            <span className="text-decoration-underline text-dark fs-5">Sagya Dhiman</span>
          </p>
          <div className="social-icons">
            <a className="text-dark fs-4 mx-2" href="https://github.com/pratham4692jj" target="_blank" rel="noreferrer">
              <i className="fa fa-github"></i>
            </a>
            <a className="text-dark fs-4 mx-2" href="https://www.instagram.com/pratham.josh.ii/" target="_blank" rel="noreferrer">
              <i className="fa fa-instagram"></i>
            </a>
            <a className="text-dark fs-4 mx-2" href="mailto:pratham1231.be21@chitkarauniversity.edu.in" rel="noreferrer">
              <i className="fa fa-envelope"></i>
            </a>
          </div>
        </div>
        <div className="col-md-6 mt-3">
          <h5 className="text-dark">Contact Us</h5>
          <p className="mb-0">Email: <a href="mailto:sagya1305.be21@chitkarauniversity.edu.in" className="text-dark">{`sagya1305.be21@chitkarauniversity.edu.in`}</a></p>
          <p className="mb-0">Phone: <span className="text-dark">+91-7876222230</span></p>
        </div>
      </div>
      <style jsx>{`
        footer {
          background-color: white;
          color: black;
          padding: 20px 0;
          border-top: 1px solid black;
        }
        .social-icons a {
          transition: color 0.3s ease;
        }
        .social-icons a:hover {
          color: gray;
        }
        h5 {
          margin-bottom: 10px;
          font-weight: bold;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
