import axios from "axios";
import { BASE_URL } from "../constants/url";
import { toast } from "react-toastify";

type FormData = {
  description: string;
  freeVideos: string;
  thumbnailLink: string;
  videoLink: string;
  type: string;
};

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  formData: FormData;
  setFormData: React.Dispatch<React.SetStateAction<FormData>>;
  success: boolean;
  setSuccess: React.Dispatch<React.SetStateAction<boolean>>;
}

const AddCartItemModal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  formData,
  setFormData,
  success,
  setSuccess,
}) => {
  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<
      HTMLTextAreaElement | HTMLInputElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");
      const res = await axios.post(
        `${BASE_URL}/api/v1/dashboard/addFreeVideos`,
        { ...formData, createdBy: userId },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(res.data.data);
      setSuccess(!success);
      onClose();
      toast.success("Free video added", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } catch (err) {
      console.log(err);
      toast.error("Error", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">Add Free Videos</h2>
          <button onClick={onClose} className="text-gray-500">
            &times;
          </button>
        </div>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Description</label>
            <textarea
              className="w-full p-2 border rounded"
              placeholder="Enter description"
              name="description"
              onChange={handleChange}
              value={formData.description}
            ></textarea>
          </div>
          <div>
            <label className="block text-sm font-medium">Free Videos</label>
            <input
              type="text"
              name="freeVideos"
              onChange={handleChange}
              value={formData.freeVideos}
              className="w-full p-2 border rounded"
              placeholder="Enter name of free videos"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Thumbnail Link</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              name="thumbnailLink"
              onChange={handleChange}
              value={formData.thumbnailLink}
              placeholder="Enter thumbnail URL"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Type</label>
            <select
              className="w-full p-2 border rounded"
              name="type"
              onChange={handleChange}
              value={formData.type}
            >
              <option value="" disabled>Select</option>
              <option value="Video">Video</option>
              <option value="Youtube Shorts">Youtube Shorts</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium">Video Link</label>
            <input
              type="text"
              className="w-full p-2 border rounded"
              name="videoLink"
              onChange={handleChange}
              value={formData.videoLink}
              placeholder="Enter video URL"
            />
          </div>
        </div>
        <div className="flex justify-end space-x-2 mt-4">
          <button onClick={onClose} className="px-4 py-2 border rounded">
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-500 text-white rounded"
            onClick={handleSubmit}
          >
            Add Item
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCartItemModal;
