import React, { useState } from "react";

interface Topic {
  id: number;
  name: string;
}

interface Section {
  id: number;
  name: string;
  topics: Topic[];
}

const LiveClassDetails: React.FC = () => {
  const [sections, setSections] = useState<Section[]>([
    { id: 1, name: "Physics", topics: [{ id: 1, name: "Electromagnetism" }] },
  ]);

  const [newSectionName, setNewSectionName] = useState("");

  const addSection = () => {
    if (newSectionName.trim()) {
      setSections((prev) => [
        ...prev,
        { id: Date.now(), name: newSectionName.trim(), topics: [] },
      ]);
      setNewSectionName("");
    }
  };

  const deleteSection = (id: number) => {
    setSections((prev) => prev.filter((section) => section.id !== id));
  };

  const editSection = (id: number, newName: string) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === id ? { ...section, name: newName } : section
      )
    );
  };

  const addTopic = (sectionId: number, topicName: string) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              topics: [
                ...section.topics,
                { id: Date.now(), name: topicName.trim() },
              ],
            }
          : section
      )
    );
  };

  const deleteTopic = (sectionId: number, topicId: number) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              topics: section.topics.filter((topic) => topic.id !== topicId),
            }
          : section
      )
    );
  };

  const editTopic = (sectionId: number, topicId: number, newName: string) => {
    setSections((prev) =>
      prev.map((section) =>
        section.id === sectionId
          ? {
              ...section,
              topics: section.topics.map((topic) =>
                topic.id === topicId ? { ...topic, name: newName } : topic
              ),
            }
          : section
      )
    );
  };

  return (
    <div className="p-4 space-y-4 bg-gray-100 min-h-screen">
      <h1 className="text-lg font-bold">Live Class Details</h1>
      <div className="space-y-4">
        {sections.map((section) => (
          <div key={section.id} className="bg-white rounded shadow p-4">
            <div className="flex justify-between items-center">
              <span className="font-semibold text-lg">{section.name}</span>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() =>
                    editSection(
                      section.id,
                      prompt("Edit section name:", section.name) || section.name
                    )
                  }
                  className="text-blue-500 hover:text-blue-700"
                >
                  Edit
                </button>
                <button
                  onClick={() => deleteSection(section.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Delete
                </button>
              </div>
            </div>
            <div className="mt-4 space-y-2">
              {section.topics.map((topic) => (
                <div
                  key={topic.id}
                  className="flex justify-between items-center border-b pb-2"
                >
                  <span>{topic.name}</span>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() =>
                        editTopic(
                          section.id,
                          topic.id,
                          prompt("Edit topic name:", topic.name) || topic.name
                        )
                      }
                      className="text-blue-500 hover:text-blue-700"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteTopic(section.id, topic.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))}
              <div className="flex items-center mt-2 space-x-2">
                <input
                  type="text"
                  placeholder="Add Topic"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && e.currentTarget.value.trim()) {
                      addTopic(section.id, e.currentTarget.value.trim());
                      e.currentTarget.value = "";
                    }
                  }}
                  className="border rounded px-2 py-1 flex-grow"
                />
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                  Add Topic
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          value={newSectionName}
          onChange={(e) => setNewSectionName(e.target.value)}
          placeholder="Add Section"
          className="border rounded px-2 py-1 flex-grow"
        />
        <button
          onClick={addSection}
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Add Section
        </button>
      </div>
    </div>
  );
};

export default LiveClassDetails;
