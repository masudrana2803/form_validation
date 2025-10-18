/* Form validation */

import React, { useState } from 'react';
import { FaRegUser } from "react-icons/fa6";
import {
  IoMailOutline,
  IoCallOutline,
  IoEyeOutline,
  IoEyeOffOutline,
  IoLogoFacebook
} from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";

const Home = () => {
  // Form state

  
/**
const [formData, setFormData] = useState({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
  terms: true,
});
 */

  // Error state
  const [errors, setErrors] = useState({});

  // Password visibility toggles
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle input changes
const handleChange = (e) => {
  const { name, value, type, checked } = e.target;

  // Clear error for the field being edited
  setErrors(prevErrors => ({
    ...prevErrors,
    [name]: undefined
  }));

  setFormData(prev => ({
    ...prev,
    [name]: type === 'checkbox' ? checked : value
  }));
};

  // Regex patterns
  const regex = {
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phone: /^(\+8801|01)[0-9]{9}$/,
    password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/,
  };

  // Validate form fields
  const validate = () => {
    const newErrors = {};

    // Required fields
    Object.entries(formData).forEach(([key, value]) => {
      if (key !== 'terms' && value.trim() === '') {
        newErrors[key] = 'Field is required';
      }
    });

    // Email format
    if (formData.email && !regex.email.test(formData.email)) {
      newErrors.email = 'Invalid email format';
    }

    // Phone format
    if (formData.phone && !regex.phone.test(formData.phone)) {
      newErrors.phone = 'Invalid Bangladeshi phone number';
    }

    // Password strength
    if (formData.password && !regex.password.test(formData.password)) {
      newErrors.password = 'Password must be 8+ chars, include uppercase, lowercase & number';
    }

    // Password match
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      // You can add API call or success message here
    }
  };

  // Dynamic input styling
  const inputClass = (field) =>
  `bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2 w-full ${
      errors[field] ? 'border-red-500' : ''
    }`;

  return (
    <section className='bg-blue-300 dark:bg-gray-900 flex justify-center items-center min-h-screen px-4'>
      <form onSubmit={handleSubmit} className='bg-[#FFFFFF] dark:bg-gray-800 rounded-2xl p-6 sm:p-10 w-full max-w-xl'>

        {/* Heading */}
        <div className='dark:bg-gray-700 flex flex-col justify-center items-center mb-6 rounded-md py-2'>
          <h2 className="text-xl font-popin text-hclr  font-bold ">Create Account</h2>
          <h2 className="text-sm text-[#7E7E8F]">You are Welcome</h2>
        </div>

        {/* First & Last Name */}
        <div className='flex justify-between'>
        <div>
        <h3 className="text-gray-800 dark:text-gray-200 mb-2">First name</h3>
          <div className={inputClass('firstName')}>
            <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}
              placeholder='First name' className='bg-transparent w-full text-black dark:text-white outline-none' />
            <FaRegUser className="text-gray-600 dark:text-white" />
          </div>
        </div>
        <div>
        <h3 className="text-gray-800 dark:text-gray-200 mb-2">Last name</h3>
          <div className={inputClass('lastName')}>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
              placeholder='First name' className='bg-transparent w-full text-black dark:text-white outline-none' />
            <FaRegUser className="text-gray-600 dark:text-white" />
          </div>
        </div>
        </div>


        {/* <div className='flex flex-col sm:flex-row gap-4 mb-1'>
          <div className={inputClass('lastName')}>
            <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}
              placeholder='Last name' className='bg-transparent w-full text-black dark:text-white outline-none' />
            <FaRegUser className="text-gray-600 dark:text-white" />
          </div>
        </div> */}
        {errors.firstName && <p className="text-red-500 text-sm mb-2">{errors.firstName}</p>}
        {errors.lastName && <p className="text-red-500 text-sm mb-4">{errors.lastName}</p>}

        {/* Email */}
        <h2 className="text-gray-800 dark:text-gray-200 mb-2">E-mail</h2>
        <div className={`${inputClass('email')} mb-1`}>
          <input type="text" name="email" value={formData.email} onChange={handleChange}
            placeholder='Email' className='bg-transparent w-full text-black dark:text-white outline-none' />
          <IoMailOutline className="text-gray-600 dark:text-white" />
        </div>
        {errors.email && <p className="text-red-500 text-sm mb-4">{errors.email}</p>}

        {/* Phone */}
        <h2 className="text-gray-800 dark:text-gray-200 mb-2">Phone numbers</h2>
        <div className={`${inputClass('phone')} mb-1`}>
          <input type="text" name="phone" value={formData.phone} onChange={handleChange}
            placeholder='(+8801XXXXXXXXX)' className='bg-transparent w-full text-black dark:text-white outline-none' />
          <IoCallOutline className="text-gray-600 dark:text-white" />
        </div>
        {errors.phone && <p className="text-red-500 text-sm mb-4">{errors.phone}</p>}

        {/* Password */}
        <h2 className="text-gray-800 dark:text-gray-200 mb-2">Password</h2>
        <div className={`${inputClass('password')} mb-1`}>
          <input type={showPassword ? "text" : "password"} name="password" value={formData.password} onChange={handleChange}
            placeholder='Password' className='bg-transparent w-full text-black dark:text-white outline-none' />
          {showPassword ? (
            <IoEyeOffOutline className="text-gray-600 dark:text-white cursor-pointer" onClick={() => setShowPassword(false)} />
          ) : (
            <IoEyeOutline className="text-gray-600 dark:text-white cursor-pointer" onClick={() => setShowPassword(true)} />
          )}
        </div>
        {errors.password && <p className="text-red-500 text-sm mb-4">{errors.password}</p>}

        {/* Confirm Password */}
        <h2 className="text-gray-800 dark:text-gray-200 mb-2">Confirm Password</h2>
        <div className={`${inputClass('confirmPassword')} mb-1`}>
          <input type={showConfirmPassword ? "text" : "password"} name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}
            placeholder='Confirm Password' className='bg-transparent w-full text-black dark:text-white outline-none' />
          {showConfirmPassword ? (
            <IoEyeOffOutline className="text-gray-600 dark:text-white cursor-pointer" onClick={() => setShowConfirmPassword(false)} />
          ) : (
            <IoEyeOutline className="text-gray-600 dark:text-white cursor-pointer" onClick={() => setShowConfirmPassword(true)} />
          )}
        </div>
        {errors.confirmPassword && <p className="text-red-500 text-sm mb-4">{errors.confirmPassword}</p>}

        {/* Submit Button */}
        <div className="flex justify-center mt-6">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md w-full sm:w-auto">
            SIGN UP
          </button>
        </div>

        {/* Terms & Conditions */}
        <div className="flex items-center mt-6 mb-4 text-sm text-gray-800 dark:text-gray-200">
          <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange}
            className="mr-2 accent-blue-600" />
          <label htmlFor="terms">I agree with terms & conditions</label>
        </div>

                {/* Third-party Sign Up */}
        <div className="flex justify-between gap-3 mb-6">
          <button type="button" className="px-6 py-2 flex items-center justify-center gap-2 border rounded-md w-full text-gray-700 dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <FcGoogle size={20} />
            <span>Sign up with Google</span>
          </button>
          <button type="button" className="px-6 py-2 flex items-center justify-center gap-2 border rounded-md w-full text-gray-700 dark:text-white bg-white dark:bg-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600">
            <IoLogoFacebook size={20} className="text-blue-600" />
            <span>Sign up with Facebook</span>
          </button>
        </div>

        {/* Already have account */}
        <p className="text-center text-sm text-gray-600 dark:text-gray-300">
          Already have an account? <a href="#" className="text-blue-600 hover:underline">Log in</a>
        </p>
      </form>
    </section>
  );
};

export default Home;