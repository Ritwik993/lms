"use client"

import { useState } from "react"
import { Search, RefreshCw, Grid, List, ChevronDown, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

interface Faculty {
  id: string
  srNo: string
  name: string
  contact: string
  email: string
  specialization: string
}

export default function FacultyManagement() {
  const [activeTab, setActiveTab] = useState("faculty")
  const [selectedRows, setSelectedRows] = useState<string[]>([])
  const [facultyData, setFacultyData] = useState<Faculty[]>([
    {
      id: "1",
      srNo: "01",
      name: "Demo Name",
      contact: "91 XXXXX XXXXX",
      email: "Example@gmail.com",
      specialization: "Hindi, English",
    },
    {
      id: "2",
      srNo: "02",
      name: "Demo Name",
      contact: "91 XXXXX XXXXX",
      email: "Example@gmail.com",
      specialization: "Maths",
    },
  ])

  const handleSelectRow = (id: string) => {
    setSelectedRows((prev) => (prev.includes(id) ? prev.filter((rowId) => rowId !== id) : [...prev, id]))
  }

  const handleSelectAll = () => {
    if (selectedRows.length === facultyData.length) {
      setSelectedRows([])
    } else {
      setSelectedRows(facultyData.map((faculty) => faculty.id))
    }
  }

  const handleDelete = (id: string) => {
    setFacultyData((prev) => prev.filter((faculty) => faculty.id !== id))
    setSelectedRows((prev) => prev.filter((rowId) => rowId !== id))
  }

  return (
    <div className="container mx-auto p-4 max-w-6xl">
      <Tabs defaultValue="faculty" onValueChange={setActiveTab}>
        <TabsList className="mb-6 w-full max-w-[240px]">
          <TabsTrigger
            value="faculty"
            className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white"
          >
            Faculty
          </TabsTrigger>
          <TabsTrigger value="staff" className="flex-1 data-[state=active]:bg-blue-600 data-[state=active]:text-white">
            Staff
          </TabsTrigger>
        </TabsList>

        {activeTab==="faculty" && <TabsContent value="faculty" className="space-y-4">
          <div className="flex justify-between items-center mb-4">
            <div className="relative w-full max-w-xs">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Search mail..." className="pl-10 pr-4 py-2 rounded-md border border-gray-300" />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="icon" className="h-9 w-9">
                <Grid className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9">
                <List className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="icon" className="h-9 w-9 ml-2">
                <RefreshCw className="h-4 w-4" />
                <span className="sr-only">Refresh</span>
              </Button>
            </div>
          </div>

          <div className="border rounded-md overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 border-b">
                  <th className="p-3 text-left">
                    <Checkbox
                      checked={selectedRows.length === facultyData.length && facultyData.length > 0}
                      onCheckedChange={handleSelectAll}
                      aria-label="Select all"
                    />
                  </th>
                  <th className="p-3 text-left text-sm font-medium text-gray-500">SR.NO</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-500">NAME</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-500">CONTACT</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-500">EMAIL</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-500">SPECIALIZATION</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-500">ACTION BUTTONS</th>
                  <th className="p-3 text-left text-sm font-medium text-gray-500">DELETE</th>
                </tr>
              </thead>
              <tbody>
                {facultyData.map((faculty) => (
                  <tr key={faculty.id} className="border-b">
                    <td className="p-3">
                      <Checkbox
                        checked={selectedRows.includes(faculty.id)}
                        onCheckedChange={() => handleSelectRow(faculty.id)}
                        aria-label={`Select row ${faculty.srNo}`}
                      />
                    </td>
                    <td className="p-3 text-sm">{faculty.srNo}</td>
                    <td className="p-3 text-sm">{faculty.name}</td>
                    <td className="p-3 text-sm">{faculty.contact}</td>
                    <td className="p-3 text-sm">{faculty.email}</td>
                    <td className="p-3 text-sm">{faculty.specialization}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <GiveAccessDropdown />
                        <AssignDropdown />
                      </div>
                    </td>
                    <td className="p-3">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleDelete(faculty.id)}
                        className="h-8 w-8 text-red-500 hover:text-red-700 hover:bg-red-50"
                      >
                        <Trash2 className="h-5 w-5" />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </TabsContent>}

        {activeTab==="staff" &&<TabsContent value="staff">
          <div className="flex items-center justify-center h-40 border rounded-md">
            <p className="text-gray-500">Staff content will appear here</p>
          </div>
        </TabsContent>}
      </Tabs>
    </div>
  )
}

function GiveAccessDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const options = [
    { id: "dashboard", label: "Dashboard" },
    { id: "courses", label: "My courses" },
    { id: "earning", label: "Earning" },
    { id: "messages", label: "Messages" },
    { id: "settings", label: "Settings" },
  ]

  const toggleOption = (id: string) => {
    setSelectedOptions((prev) => (prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]))
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
          Give Access <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2">
        <div className="font-medium px-2 py-1.5">Give Access</div>
        {options.map((option) => (
          <div key={option.id} className="px-2 py-1.5 flex items-center">
            <Checkbox
              id={option.id}
              checked={selectedOptions.includes(option.id)}
              onCheckedChange={() => toggleOption(option.id)}
              className="mr-2"
            />
            <label htmlFor={option.id} className="text-sm cursor-pointer flex-1">
              {option.label}
            </label>
          </div>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

function AssignDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="bg-blue-100 text-blue-700 border-blue-200 hover:bg-blue-200">
          Assign <ChevronDown className="ml-2 h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem>Course 1</DropdownMenuItem>
        <DropdownMenuItem>Course 2</DropdownMenuItem>
        <DropdownMenuItem>Course 3</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

