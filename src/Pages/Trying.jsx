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