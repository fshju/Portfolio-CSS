"use client";

import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-branding">
          <h2>Shahrukh Portfolio</h2>
          <p>Creating meaningful digital experiences.</p>
        </div>

        <div className="footer-links">
          <Link href="/home">
            {" "}
            <button>Home</button>
          </Link>
          <Link href="/projects">
            {" "}
            <button>Projects</button>
          </Link>
          <Link href="/contact">
            {" "}
            <button>Contact</button>
          </Link>
        </div>

        <div className="footer-social" id="links">
          <a
            href="mailto:shahrukhishtiaq29@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email Shahrukh"
          >
            <SiGmail className="icon gmail" />
          </a>
          <a
            href="https://facebook.com/shahrukh.ishtiaq.90?mibextid=zbwkwl"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Shahrukh's Facebook"
          >
            <FaFacebook className="icon facebook" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Shahrukh's Twitter"
          >
            <FaTwitter className="icon twitter" />
          </a>
          <a
            href="https://www.instagram.com/shahrukh_khan_229"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Shahrukh's Instagram"
          >
            <FaInstagram className="icon instagram" />
          </a>
          <a
            href="https://linkedin.com/in/shahrukh-ishtiaq-2534a524b"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Shahrukh's LinkedIn"
          >
            <FaLinkedin className="icon linkedin" />
          </a>
        </div>
      </div>

      <div className="footer-bottom">© 2024 Shahrukh. All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
