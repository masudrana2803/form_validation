import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';

const FormValidation = () => {
  const [name, setName] = useState('');
  const [myError, setMyError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) {
      setMyError('Field is required');
    } else {
      setMyError('');
      // Proceed with form submission logic
    }
  };

// Logic for the useState in field of errors

  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2 w-full'>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (myError) setMyError(''); // Clear error on input
          }}
          type="text"
          placeholder='First name'
          className='bg-transparent w-full text-black dark:text-white outline-none'
        />
        <FaRegUser className="text-gray-600 dark:text-white" />
      </div>
      {myError && <p className='text-red-400'>{myError}</p>}
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md">
        Submit
      </button>
    </form>
  );
};

export default FormValidation;

// Import necessary hooks and icons
import { useState } from 'react';
import { FaRegUser } from 'react-icons/fa';
import { IoMailOutline, IoCallOutline, IoEyeOutline } from 'react-icons/io5';

const FormValidation = () => {
  // State to store input values
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // State to store error messages for each field
  const [formErrors, setFormErrors] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  });

  // Handle input changes and clear error for that field
  const handleInputChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value })); // Update field value
    if (formErrors[field]) {
      setFormErrors(prev => ({ ...prev, [field]: '' })); // Clear error if present
    }
  };

  // Handle form submission and validate all fields
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form behavior
    const errors = {}; // Temporary object to collect errors

    // Validate each field
    if (!formData.firstName.trim()) errors.firstName = 'First name is required';
    if (!formData.lastName.trim()) errors.lastName = 'Last name is required';
    if (!formData.email.trim()) errors.email = 'Email is required';
    if (!formData.phone.trim()) errors.phone = 'Phone number is required';
    if (!formData.password.trim()) errors.password = 'Password is required';
    if (formData.confirmPassword !== formData.password) errors.confirmPassword = 'Passwords do not match';

    setFormErrors(errors); // Update error state

    // If no errors, proceed with submission logic
    if (Object.keys(errors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    // Page wrapper with background and centering
    <section className='bg-red-300 dark:bg-gray-900 flex justify-center items-center min-h-screen px-4'>
      {/* Form container */}
      <form onSubmit={handleSubmit} className='bg-[#FFFFFF] dark:bg-gray-800 rounded-2xl p-6 sm:p-10 w-full max-w-xl'>

        {/* Form heading */}
        <div className='dark:bg-gray-700 text-white flex flex-col justify-center items-center mb-6 rounded-md py-2'>
          <h2 className="text-xl font-popin text-hclr font-bold">Create Account</h2>
          <h2 className="text-sm text-[#7E7E8F]">You are Welcome</h2>
        </div>

        {/* Name section */}
        <h3 className="text-gray-800 dark:text-gray-200 mb-2">Your name</h3>
        <div className='flex flex-col sm:flex-row gap-4 mb-5'>
          
          {/* First Name input */}
          <div className='w-full'>
            <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2'>
              <input
                type="text"
                placeholder='First name'
                value={formData.firstName}
                onChange={(e) => handleInputChange('firstName', e.target.value)}
                className='bg-transparent w-full text-black dark:text-white outline-none'
              />
              <FaRegUser className="text-gray-600 dark:text-white" />
            </div>
            {/* Error message for first name */}
            {formErrors.firstName && <p className='text-red-500 mt-1'>{formErrors.firstName}</p>}
          </div>

          {/* Last Name input */}
          <div className='w-full'>
            <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2'>
              <input
                type="text"
                placeholder='Last name'
                value={formData.lastName}
                onChange={(e) => handleInputChange('lastName', e.target.value)}
                className='bg-transparent w-full text-black dark:text-white outline-none'
              />
              <FaRegUser className="text-gray-600 dark:text-white" />
            </div>
            {/* Error message for last name */}
            {formErrors.lastName && <p className='text-red-500 mt-1'>{formErrors.lastName}</p>}
          </div>
        </div>

        {/* Email section */}
        <h2 className="text-gray-800 dark:text-gray-200 mb-2">E-mail</h2>
        <div className='mb-5'>
          <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2'>
            <input
              type="email"
              placeholder='Email'
              value={formData.email}
              onChange={(e) => handleInputChange('email', e.target.value)}
              className='bg-transparent w-full text-black dark:text-white outline-none'
            />
            <IoMailOutline className="text-gray-600 dark:text-white" />
          </div>
          {/* Error message for email */}
          {formErrors.email && <p className='text-red-500 mt-1'>{formErrors.email}</p>}
        </div>

        {/* Phone section */}
        <h2 className="text-gray-800 dark:text-gray-200 mb-2">Phone numbers</h2>
        <div className='mb-5'>
          <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2'>
            <input
              type="number"
              placeholder='(+01)'
              value={formData.phone}
              onChange={(e) => handleInputChange('phone', e.target.value)}
              className='bg-transparent w-full text-black dark:text-white outline-none'
            />
            <IoCallOutline className="text-gray-600 dark:text-white" />
          </div>
          {/* Error message for phone */}
          {formErrors.phone && <p className='text-red-500 mt-1'>{formErrors.phone}</p>}
        </div>

        {/* Password section */}
        <h2 className="text-gray-800 dark:text-gray-200 mb-2">Password</h2>
        <div className='mb-5'>
          <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2'>
            <input
              type="password"
              placeholder='Password'
              value={formData.password}
              onChange={(e) => handleInputChange('password', e.target.value)}
              className='bg-transparent w-full text-black dark:text-white outline-none'
            />
            <IoEyeOutline className="text-gray-600 dark:text-white" />
          </div>
          {/* Error message for password */}
          {formErrors.password && <p className='text-red-500 mt-1'>{formErrors.password}</p>}
        </div>

        {/* Confirm Password section */}
        <h2 className="text-gray-800 dark:text-gray-200 mb-2">Confirm Password</h2>
        <div className='mb-5'>
          <div className='bg-yellow-100 dark:bg-gray-700 border rounded-md flex items-center gap-2 px-3 py-2'>
            <input
              type="password"
              placeholder='Confirm Password'
              value={formData.confirmPassword}
              onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
              className='bg-transparent w-full text-black dark:text-white outline-none'
            />
            <IoEyeOutline className="text-gray-600 dark:text-white" />
          </div>
          {/* Error message for confirm password */}
          {formErrors.confirmPassword && <p className='text-red-500 mt-1'>{formErrors.confirmPassword}</p>}
        </div>

        {/* Submit button */}
        <div className="flex justify-center mt-6">
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md w-full sm:w-auto">
            SIGN UP
          </button>
        </div>
      </form>
    </section>
  );
};

export default FormValidation;