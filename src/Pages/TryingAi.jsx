import React, { useState } from 'react'
import {
  IoEyeOutline,
  IoEyeOffOutline,
} from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import { MdEmail } from 'react-icons/md';

const Trying = () => {

  // form state
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  // error state
  const [errors, setErrors] = useState({});
  const [globalError, setGlobalError] = useState('');

  // show/hide password toggle
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    // clear specific field error and global error when user starts typing
    setErrors((prev) => ({ ...prev, [name]: undefined }));
    setGlobalError('');

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // form validation
  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    // check for empty fields
    Object.entries(formData).forEach(([key, value]) => {
      if (!value.trim()) {
        newErrors[key] = 'Required';
      }
    });

    // password match check
    if (
      formData.password &&
      formData.confirmPassword &&
      formData.password !== formData.confirmPassword
    ) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);

    // show global error if any field is empty or mismatched
    if (Object.keys(newErrors).length > 0) {
      setGlobalError('Please fix the highlighted fields');
      return;
    }

    // ✅ If everything is valid
    alert('Form submitted successfully!');

    // ✅ Log form data in console
    console.log('Form Data Submitted:', formData);

    // ✅ Clear input fields after successful submission
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    // ✅ Optionally reset errors & global error
    setErrors({});
    setGlobalError('');
  };

  // reusable input border class
  const inputClass = (field) =>
    `flex items-center rounded-xl border-2 gap-2 px-2 ${
      errors[field] ? 'border-red-500' : 'border-gray-300'
    }`;

  return (
    <>
      <section className='min-h-screen flex justify-center items-center bg-blue-500'>
        <form onSubmit={handleSubmit}>

          <div className='h-fit bg-white p-5 rounded-xl'>
            <div className='w-1/2 text-center mx-auto mb-8'>
              <h1 className='text-2xl font-bold'>Create an Account</h1>
              <p>Your are welcome</p>
            </div>

            {/* ---- First & Last Name ---- */}
            <div className='flex gap-4'>

              {/* First Name */}
              <div>
                <p>First Name</p>
                <label className={inputClass('firstName')}>
                  <FaRegUser />
                  <input
                    type="text"
                    name="firstName"
                    placeholder='Enter your First Name'
                    value={formData.firstName}
                    onChange={handleChange}
                    className='p-1 w-full outline-none'
                  />
                </label>
              </div>

              {/* Last Name */}
              <div>
                <p>Last Name</p>
                <label className={inputClass('lastName')}>
                  <FaRegUser />
                  <input
                    type="text"
                    name="lastName"
                    placeholder='Enter your Last Name'
                    value={formData.lastName}
                    onChange={handleChange}
                    className='p-1 w-full outline-none'
                  />
                </label>
              </div>
            </div>

            {/* ---- Email ---- */}
            <div className='mt-4'>
              <p>Email</p>
              <label className={inputClass('email')}>
                <MdEmail />
                <input
                  type="text"
                  name="email"
                  placeholder='Enter your Email'
                  value={formData.email}
                  onChange={handleChange}
                  className='p-1 w-full outline-none'
                />
              </label>
            </div>

            {/* ---- Password ---- */}
            <div className='mt-4'>
              <p>Password</p>
              <label className={inputClass('password')}>
                <MdEmail />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  placeholder='Enter your Password'
                  value={formData.password}
                  onChange={handleChange}
                  className='p-1 w-full outline-none'
                />
                {/* toggle eye icon */}
                {showPassword ? (
                  <IoEyeOffOutline
                    className='cursor-pointer'
                    onClick={() => setShowPassword(false)}
                  />
                ) : (
                  <IoEyeOutline
                    className='cursor-pointer'
                    onClick={() => setShowPassword(true)}
                  />
                )}
              </label>
            </div>

            {/* ---- Confirm Password ---- */}
            <div className='mt-4'>
              <p>Confirm Password</p>
              <label className={inputClass('confirmPassword')}>
                <MdEmail />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  placeholder='Confirm your Password'
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className='p-1 w-full outline-none'
                />
                {/* toggle eye icon */}
                {showConfirmPassword ? (
                  <IoEyeOffOutline
                    className='cursor-pointer'
                    onClick={() => setShowConfirmPassword(false)}
                  />
                ) : (
                  <IoEyeOutline
                    className='cursor-pointer'
                    onClick={() => setShowConfirmPassword(true)}
                  />
                )}
              </label>

              {/* show password mismatch error */}
              {errors.confirmPassword && (
                <p className='text-red-500 text-sm mt-1'>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* ---- Global error message ---- */}
            {globalError && (
              <p className='text-center text-red-600 mt-4 font-semibold'>
                {globalError}
              </p>
            )}

            {/* ---- Submit Button ---- */}
            <button
              type='submit'
              className='w-full mt-5 bg-green-400 rounded-2xl p-2 font-semibold active:scale-95'
            >
              Sign Up
            </button>

            {/* ---- Already have an account ---- */}
            <div className='flex w-1/2 mx-auto gap-3 mt-5'>
              <p>Already have an account?</p>
              <button
                type='button'
                className='font-bold active:scale-95 text-blue-600'
              >
                LogIn
              </button>
            </div>
          </div>

        </form>
      </section>
    </>
  )
}

export default Trying
