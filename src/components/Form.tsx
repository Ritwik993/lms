
const Form = () => {
    return (
        <div className="p-8 bg-gray-100 min-h-screen">
          <div className="max-w-4xl mx-auto bg-white p-6 shadow-md rounded-md">
            {/* Tabs */}
            <div className="flex border-b mb-6">
              <button className="px-4 py-2 text-blue-500 border-b-2 border-blue-500">
                Basic
              </button>
              <button className="px-4 py-2 text-gray-500">Advanced</button>
            </div>
    
            {/* Form */}
            <form className="space-y-6">
              {/* Title and Status */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Title *</label>
                  <input
                    type="text"
                    placeholder="Enter Title"
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Status</label>
                  <div className="flex items-center space-x-4">
                    <label>
                      <input type="radio" name="status" className="mr-2" /> Free
                    </label>
                    <label>
                      <input type="radio" name="status" className="mr-2" /> Paid
                    </label>
                  </div>
                </div>
              </div>
    
              {/* Test Series */}
              <div>
                <label className="block text-sm font-medium">Test Series *</label>
                <select className="w-full border-gray-300 rounded-md shadow-sm">
                  <option>Test 1</option>
                  <option>Test 2</option>
                </select>
              </div>
    
              {/* Test Details */}
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium">No. of Questions *</label>
                  <input
                    type="number"
                    placeholder="Enter no. of questions"
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Total Marks *</label>
                  <input
                    type="number"
                    placeholder="Enter total marks"
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Total Duration (in minutes) *
                  </label>
                  <input
                    type="number"
                    placeholder="Enter duration in minutes"
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">Sorting Order *</label>
                  <input
                    type="number"
                    placeholder="0.00"
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </div>
    
              {/* Sections */}
              <div>
                <h3 className="text-lg font-medium mb-4">Sections</h3>
                {/* {sections.map((section, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-6 gap-4 items-center mb-4"
                  >
                    <select className="border-gray-300 rounded-md shadow-sm">
                      <option>Select Section</option>
                      <option>Math</option>
                      <option>Science</option>
                    </select>
                    <input
                      type="number"
                      placeholder="-1"
                      className="border-gray-300 rounded-md shadow-sm"
                    />
                    <input
                      type="number"
                      placeholder="0"
                      className="border-gray-300 rounded-md shadow-sm"
                    />
                    <input type="checkbox" className="w-5 h-5" />
                    <input type="checkbox" className="w-5 h-5" />
                  </div>
                ))} */}
                <button
                  type="button"
                  className="text-blue-500"
                //   onClick={addSection}
                >
                  + Add More
                </button>
              </div>
    
              {/* Test Dates */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Start Date *</label>
                  <input
                    type="datetime-local"
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">End Date *</label>
                  <input
                    type="datetime-local"
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
              </div>
    
              {/* Test Material */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium">Attach PDF *</label>
                  <input
                    type="file"
                    className="w-full border-gray-300 rounded-md shadow-sm"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium">
                    Allow PDF Download *
                  </label>
                  <select className="w-full border-gray-300 rounded-md shadow-sm">
                    <option>No</option>
                    <option>Yes</option>
                  </select>
                </div>
              </div>
    
              {/* Submit Button */}
              <div className="text-right">
                <button
                  type="submit"
                  className="px-6 py-2 bg-blue-500 text-white rounded-md"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      );
}

export default Form