import React, {} from 'react';

const Step = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid max-w-2xl mx-auto">
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 opacity-0 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                  1
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">
                  Create a Campaign
                </p>
                <p className="text-sm text-gray-700">
                  We encourage you go ahead and create a campaign that solves your medical financial problems, only be sure to get verified by your Doctor and get an image of your hospitalization.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-300 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                  2
                </div>
              </div>
              <div className="w-px h-full bg-gray-300" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">We Get Donators</p>
                <p className="text-sm text-gray-700">
                  After creating a campaign with us, we make this campaign live and accessible to potential donators who are driven by compassion and will donate handsomely toward your medical bills.
                </p>
              </div>
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center mr-6">
              <div className="w-px h-10 bg-gray-300 sm:h-full" />
              <div>
                <div className="flex items-center justify-center w-8 h-8 text-xs font-medium border rounded-full">
                  3
                </div>
              </div>
              <div className="w-px h-full opacity-0" />
            </div>
            <div className="flex flex-col pb-6 sm:items-center sm:flex-row sm:pb-0">
              <div className="sm:mr-5">
                <div className="flex items-center justify-center w-16 h-16 my-3 rounded-full bg-indigo-50 sm:w-24 sm:h-24">
                  <svg
                    className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16"
                    stroke="currentColor"
                    viewBox="0 0 52 52"
                  >
                    <polygon
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                      points="29 13 14 29 25 29 23 39 38 23 27 23"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-xl font-semibold sm:text-base">Campaign Ends</p>
                <p className="text-sm text-gray-700">
                  Your campaigns ends.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Step;