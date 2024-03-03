import React from 'react';
import { HandRaisedIcon } from '@heroicons/react/24/outline';

export default function FeedbackPage() {
  const userId = sessionStorage.getItem('id');

  const handleSubmitFeedback = () => {
    if (userId) {
      console.log('Feedback submitted');
    } else {
      alert('Please log in to send feedback.');
    }
  };

  return (
    <div className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32 border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          <div className="max-w-xl lg:max-w-lg">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Give us your feedback</h2>
            <p className="mt-4 text-lg leading-8 text-gray-700">
              We'd love to hear from you! Please share your thoughts with us.
            </p>
            <div className="mt-6 flex max-w-md gap-x-4">
              <label htmlFor="feedback" className="sr-only">
                Feedback
              </label>
              <textarea
                id="feedback"
                name="feedback"
                required
                className="min-w-0 flex-auto rounded-md border-0 bg-gray-100 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-200 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6"
                placeholder="Enter your feedback"
              />
              <button
                onClick={handleSubmitFeedback}
                className="flex-none rounded-md bg-indigo-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Submit
              </button>
            </div>
          </div>
          <div className="flex flex-col items-start">
            <div className="rounded-md bg-gray-100 p-2 ring-1 ring-gray-200">
              <HandRaisedIcon className="h-6 w-6 text-gray-900" aria-hidden="true" />
            </div>
            <dt className="mt-4 font-semibold text-gray-900">Your opinion matters</dt>
            <dd className="mt-2 leading-7 text-gray-700">
              Let us know what you think! Your feedback helps us improve.
            </dd>
          </div>
        </div>
      </div>
    </div>
  );
}
