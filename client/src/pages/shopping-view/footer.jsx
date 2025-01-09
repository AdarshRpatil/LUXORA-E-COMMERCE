

import React from 'react'

const Footer = () => {
    return (
        <div>
            <footer className="bg-white text-gray-600">
      {/* Social Media Links Section */}
      <section className="flex justify-center lg:justify-between items-center p-4 border-b border-gray-300">
        <div className="hidden lg:block">
          <span>Get connected with us on social networks:</span>
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-google"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="text-gray-600 hover:text-gray-800">
            <i className="fab fa-github"></i>
          </a>
        </div>
      </section>

      {/* Main Footer Content */}
      <section className="container mx-auto text-center lg:text-left py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info Section */}
          <div>
            <h6 className="uppercase font-bold text-gray-800 mb-4 flex items-center">
              <i className="fas fa-gem mr-2"></i> Luxora
            </h6>
            <p>
            Luxora: Where luxury meets convenience, redefining your shopping experience.
            </p>
          </div>

          {/* Products Section */}
          <div>
            <h6 className="uppercase font-bold text-gray-800 mb-4">About Us</h6>
            <ul className="space-y-2">
              <li>
                <a href="#!" className="text-gray-600 hover:underline">
                  Blogs
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:underline">
                  Posts
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:underline">
                  links
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:underline">
                  Laravel
                </a>
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h6 className="uppercase font-bold text-gray-800 mb-4">
              Useful Links
            </h6>
            <ul className="space-y-2">
              <li>
                <a href="#!" className="text-gray-600 hover:underline">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:underline">
                  Settings
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:underline">
                  Orders
                </a>
              </li>
              <li>
                <a href="#!" className="text-gray-600 hover:underline">
                  Help
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h6 className="uppercase font-bold text-gray-800 mb-4">Contact</h6>
            <ul className="space-y-2">
              <li>
                <i className="fas fa-home mr-2"></i> New York, NY 10012, US
              </li>
              <li>
                <i className="fas fa-envelope mr-2"></i> info@luxora.com
              </li>
              <li>
                <i className="fas fa-phone mr-2"></i> +01 234 567 88
              </li>
              <li>
                <i className="fas fa-print mr-2"></i> +01 234 567 89
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Copyright Section */}
      <div className="text-center py-4 bg-gray-200">
        © 2025 Copyright:{" "}
        <a href="https://mdbootstrap.com/" className="font-bold hover:underline">
          luxora.com
        </a>
      </div>
    </footer>
        </div>
    )
}

export default Footer
