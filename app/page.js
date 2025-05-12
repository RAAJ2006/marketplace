
"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Header from "./components/Header";

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Header />
      <div className="overflow-y-auto min-h-screen bg-[radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#c7a7ff_100%)] p-8">
        <div className="text-center mb-20mt-30">
          <h1 className="text-4xl  text-transparent bg-clip-text font-bold bg-gradient-to-r from-purple-600 to-pink-500 font-mono italic">
            Welcome to CandyBay
          </h1>
          <p className="text-sm font-bold  text-gray-700 mt-4 max-w-2xl mx-auto leading-relaxed tracking-wide font-mono italic">
            Discover our curated collection of premium products. Indulge in a shopping experience like no other, with handpicked selections at exclusive prices. Enjoy free shipping on select items and elevate your lifestyle today!
          </p>


          <div className="mt-8">
            <button onClick={() => router.push("/auth/register")} className="bg-gradient-to-r from-purple-600 to-pink-500 text-white py-3 px-8 rounded-full text-lg font-medium shadow-lg hover:from-purple-500 hover:to-pink-400 transition duration-300 transform hover:scale-105">
              Start Shopping
            </button>
          </div>
        </div>



        <div className="my-16 ">
          <div className="flex items-center justify-center mb-12">

            <h3 className="text-3xl  text-transparent bg-clip-text font-bold bg-gradient-to-r from-purple-600 to-pink-500 font-mono italic">Featured Products</h3>
          </div>
          <div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-16">

              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTYUMgrWWZ4mYLHTUn8TA5GUn1fqx2RrTW9OA&s" alt="Product 1" className="w-full h-64 object-cover rounded-xl mb-6 transition-transform group-hover:scale-105" />
                <h3 className="text-xl font-mono italic mb-2">Purple Hershey's Chocolate Kisses</h3>
                <p className="text-lg font-medium text-indigo-600 mb-4">$99.99</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Add to Cart
                </button>
              </div>


              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <img src="https://preview.redd.it/purple-marshmallows-v0-zjf3tc1nftrc1.jpeg?auto=webp&s=fa63d0c059a430ac2ebd5c5630316347982ecbd5" alt="Product 2" className="w-full h-64 object-cover rounded-xl mb-6 transition-transform group-hover:scale-105" />
                <h3 className="text-gradient-to-r from-purple-600 to-pink-500 font-mono italic text-xl mb-2">Purple Marshmellows</h3>
                <p className="text-lg font-medium text-indigo-600 mb-4">$149.99</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Add to Cart
                </button>
              </div>


              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmPjlrBQbc4a0wkoRO7xTr91MqsHJxpuscsg&s" alt="Product 3" className="w-full h-64 object-cover rounded-xl mb-6 transition-transform group-hover:scale-105" />
                <h3 className="text-xl font-mono italic mb-2">Traditional Madrid Sweet</h3>
                <p className="text-lg font-medium text-indigo-600 mb-4">$79.99</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:scale-105">
                <img src="https://m.media-amazon.com/images/I/91u0xobUyzL.jpg" alt="Product 3" className="w-full h-64 object-cover rounded-xl mb-6 transition-transform group-hover:scale-105" />
                <h3 className="text-xl font-mono italic mb-2">ROLO Creamy Salted Dark Cholcates (Halloween Candy) </h3>
                <p className="text-lg font-medium text-indigo-600 mb-4">$79.99</p>
                <button className="bg-gradient-to-r from-purple-600 to-pink-500 text-white px-8 py-3 rounded-full hover:bg-indigo-700 transition-all duration-300 transform hover:scale-105">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>


          {/* Promotions Section */}
          <div className="bg-purple-600 text-white p-12 text-center mb-12 rounded-xl transition-all duration-500 ease-in-out hover:bg-purple-700 shadow-lg">
            <h2 className="text-3xl font-semibold font-italic font-mono italic">Limited Time Offer!</h2>
            <p className="text-lg mt-4 font-mono italic">
              Get 20% off on your first order. Use code <strong>WELCOME20</strong> at checkout.
            </p>
            <button
              onClick={() => router.push("/auth/register")}
              className="bg-white text-purple-600 px-6 py-3 rounded-full mt-6 shadow-md hover:bg-gray-200 hover:shadow-lg transition-all duration-300 transform hover:scale-105"
            >
              Shop Now
            </button>
          </div>


          {/* Product Categories Section */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Browse by Category</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 mb-10">
              <div className="bg-white p-4 rounded-lg shadow-md text-center hover:scale-105 hover:shadow-lg transition-transform h-80">
                <h3 className="text-lg font-medium text-purple-600">Electronics</h3>
                <img src="https://via.placeholder.com/150" alt="Electronics" className="w-full h-32 object-cover rounded-md mt-3" />
              </div>

              <div className="bg-white p-4 rounded-lg shadow-md text-center hover:scale-105 hover:shadow-lg transition-transform">
                <h3 className="text-lg font-medium text-purple-600">Electronics</h3>
                <img src="https://via.placeholder.com/150" alt="Electronics" className="w-full h-32 object-cover rounded-md mt-3" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center hover:scale-105 hover:shadow-lg transition-transform">
                <h3 className="text-lg font-medium text-purple-600">Electronics</h3>
                <img src="https://via.placeholder.com/150" alt="Electronics" className="w-full h-32 object-cover rounded-md mt-3" />
              </div>
              <div className="bg-white p-4 rounded-lg shadow-md text-center hover:scale-105 hover:shadow-lg transition-transform">
                <h3 className="text-lg font-medium text-purple-600">Electronics</h3>
                <img src="https://via.placeholder.com/150" alt="Electronics" className="w-full h-32 object-cover rounded-md mt-3" />
              </div>
            </div>
          </div>

          {/* Footer Section */}
          <footer className="bg-[radial-gradient(125%_125%_at_50%_10%,#ffffff_40%,#c7a7ff_100%)] py-6 text-purple-700 shadow-lg rounded-lg">
            <div className="text-center">
              <p className="text-sm md:text-base">&copy; 2024 CandyBay. All rights reserved.</p>
              <div className="flex justify-center items-center space-x-6 mt-4 ">
                <a
                  href="#"
                  className="text-purple-500 hover:text-gray-200 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <span className="text-white">|</span>
                <a
                  href="#"
                  className="text-purple-500 hover:text-gray-200 transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <span className="text-white">|</span>
                <a
                  href="#"
                  className="text-purple-500 hover:text-gray-200 transition-colors duration-300"
                >
                  Contact Us
                </a>
              </div>
              <div className="mt-6">
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-8 h-8 mx-2 bg-white text-purple-600 rounded-full  justify-center items-center hover:bg-gray-200 transition-all duration-300"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-8 h-8 mx-2 bg-white text-purple-600 rounded-full  justify-center items-center hover:bg-gray-200 transition-all duration-300"
                >
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-8 h-8 mx-2 bg-white text-purple-600 rounded-full justify-center items-center hover:bg-gray-200 transition-all duration-300"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </footer>


        </div>
      </div>
    </>

  );
}
