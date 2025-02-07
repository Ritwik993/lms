import Navbar from "../components/Navbar";

interface Student {
  id: string;
  name: string;
  email: string;
  phone: string;
}

const students: Student[] = [
  {
    id: "STU001",
    name: "Rishav Bhardwaz",
    email: "rishav76000@gmail.com",
    phone: "+91 1234567890",
  },
  {
    id: "STU002",
    name: "Alice Smith",
    email: "alice.smith@example.com",
    phone: "+91 2345678901",
  },
  {
    id: "STU003",
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    phone: "+91 3456789012",
  },
  {
    id: "STU004",
    name: "Carol Williams",
    email: "carol.w@example.com",
    phone: "+91 4567890123",
  },
  {
    id: "STU005",
    name: "David Brown",
    email: "david.b@example.com",
    phone: "+91 5678901234",
  },
];

const StudentTable = () => {
  return (
    <div className=" bg-[#F5F7FA] flex-1 lg:ml-[250px] overflow-x-hidden">
      <Navbar />
      <div className="p-6 bg-gray-100  flex items-center justify-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full max-w-4xl">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">
                  <input type="checkbox" />
                </th>
                <th className="py-3 px-6 text-left">Student ID</th>
                <th className="py-3 px-6 text-left">Student Name</th>
                <th className="py-3 px-6 text-left">Email</th>
                <th className="py-3 px-6 text-left">Phone Number</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {students.map((student) => (
                <tr
                  key={student.id}
                  className="border-b border-gray-200 hover:bg-gray-100"
                >
                  <td className="py-3 px-6 text-left">
                    <input type="checkbox" />
                  </td>
                  <td className="py-3 px-6 font-bold">{student.id}</td>
                  <td className="py-3 px-6">{student.name}</td>
                  <td className="py-3 px-6">{student.email}</td>
                  <td className="py-3 px-6">{student.phone}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentTable;
