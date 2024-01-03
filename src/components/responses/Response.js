import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResponseDisplay = () => {
  const [responses, setResponses] = useState([]);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    fetchResponses();
  }, []);

  const fetchResponses = async () => {
    try {
      const response = await axios.get('https://my-portfolio-hosting-backend.vercel.app/response');
      setResponses(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = (index) => {
    setSelectedIndex(index);
    setShowConfirmation(true);
  };

  const handleConfirmDelete = async () => {
    try {
      const selectedResponse = responses[selectedIndex];

      await axios.post('https://my-portfolio-hosting-backend.vercel.app/deleteResponseFromDatabase', {
        id: selectedResponse._id,
      });

      // Remove the response from the state
      setResponses((prevResponses) => {
        const updatedResponses = [...prevResponses];
        updatedResponses.splice(selectedIndex, 1);
        return updatedResponses;
      });

      // Close the confirmation dialog box
      setShowConfirmation(false);
      setSelectedIndex(null);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelDelete = () => {
    setShowConfirmation(false);
    setSelectedIndex(null);
  };

  const formatDateTime = (dateTimeString) => {
    if (!dateTimeString) return 'N/A';
    return dateTimeString;
  };

  return (
    <div className="bg-black bg-opacity-40 text-gray-300 py-10 rounded rounded-xl mt-4">
      <h1 className="text-4xl font-bold text-designColor mb-6 px-4">Form Responses</h1>
      {responses.length === 0 ? (
        <p className="text-xl px-4">No responses yet.</p>
      ) : (
        responses.map((response, index) => (
          <div key={index} className="bg-gray-900 p-4 mb-4 rounded-lg shadow-md text-lg">
            <p className="font-bold">Name: {response.username}</p>
            <p>Phone Number: {response.phoneNumber}</p>
            <p>Email: {response.email}</p>
            <p>Subject: {response.subject}</p>
            <p>Message: {response.message}</p>
            <p>Date and Time: {formatDateTime(response.dateTime)}</p>
            <button
              onClick={() => handleDelete(index)}
              className="mt-4 bg-black p-4 rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
            >
              Delete
            </button>
          </div>
        )).reverse()
      )}

      {showConfirmation && (
        <div className="fixed top-0 left-0 m-2 z-50 flex justify-center items-center bg-opacity-50 bg-gray-900 md:w-full h-full">
          <div className="bg-black p-4 rounded-lg shadow-md relative">
            <button
              onClick={handleCancelDelete}
              className="absolute top-0 right-0 mx-4 my-2 text-gray-500 text-lg hover:text-gray-700 z-10"
            >
              X
            </button>
            <p className="mb-4 px-6">Are you sure you want to delete this response?</p>
            <div className="flex justify-center">
              <button
                onClick={() => {
                  handleConfirmDelete();
                }}
                className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-700 duration-300"
              >
                Yes
              </button>
              <button
                onClick={handleCancelDelete}
                className="bg-gray-500 text-white px-4 py-2 rounded ml-2 hover:bg-gray-700 duration-300"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ResponseDisplay;




