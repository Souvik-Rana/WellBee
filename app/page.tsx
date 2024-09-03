"use client"; // Make the component a Client Component

import React from 'react';


import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { PatientForm } from '@/components/forms/PatientForm';
import { PasskeyModal } from '@/components/PasskeyModal';
const Home = ({ searchParams }: SearchParamProps) => {
  const [showSignUpForm, setShowSignUpForm] = useState(false);
  const isAdmin = searchParams?.admin === "true";

  const handleSignUpClick = () => {
    setShowSignUpForm(true);
  };

  const handleCloseForm = () => {
    setShowSignUpForm(false);
  };

  return (
    <div className="relative flex flex-col h-screen overflow-hidden">
      {isAdmin && <PasskeyModal />}

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-10 flex items-center justify-between p-4 bg-white shadow-lg">
        <div className="flex items-center">
          <Image
            src="/logo.png"
            height={40}
            width={40}
            alt="WellBee logo"
            className="mr-2 sm:mr-3"
          />
          <h1 className="text-2xl sm:text-3xl font-extrabold text-green-600">WellBee</h1>
        </div>
        <div className="flex gap-2 sm:gap-4">
          <button
            className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg text-white bg-green-500 rounded-full shadow-md hover:bg-green-600"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
          <Link href="/?admin=true">
            <button className="px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-lg text-white bg-blue-500 rounded-full shadow-md hover:bg-blue-600">
              Admin Login
            </button>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex flex-col sm:flex-row w-full h-full pt-16 sm:pt-20">
        {/* Left Section with Text and Button */}
        <div className="flex flex-col items-start justify-center w-full sm:w-1/2 p-6 sm:p-12 bg-gradient-to-br from-green-100 via-green-50 to-white">
          <h2 className="mb-4 sm:mb-6 text-3xl sm:text-5xl font-extrabold text-gray-800 leading-tight">
            Say <span className="text-green-500">Goodbye to Paperwork: </span><br />
            <span className="text-green-600">Effortless Registration</span> and
            Scheduling
          </h2>
          <p className="mb-4 sm:mb-8 text-lg sm:text-xl text-gray-600">
            Join us and experience a unique healthcare journey tailored just for
            you.
          </p>
          <button
            className="px-6 py-2 sm:px-8 sm:py-3 text-lg sm:text-xl font-semibold text-white bg-green-500 rounded-full shadow-lg hover:bg-green-600"
            onClick={handleSignUpClick}
          >
            Sign Up
          </button>
        </div>

        {/* Right Section with Image */}
        <div className="relative w-full sm:w-1/2">
          <Image
            src="/assets/images/dochome.jpg"
            height={1000}
            width={1000}
            alt="patient"
            className="object-cover w-full h-full"
          />
        </div>
      </main>

      {/* Popup for Sign Up Form */}
      {showSignUpForm && (
        <div className="fixed inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-4 sm:p-8 bg-white shadow-lg rounded-lg max-w-[90%] sm:max-w-[496px]">
            <button
              className="absolute top-2 right-2 text-2xl font-bold text-gray-600 hover:text-gray-800"
              onClick={handleCloseForm}
            >
              &times;
            </button>
            <PatientForm />
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
