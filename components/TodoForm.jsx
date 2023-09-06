"use client";

import React, { useState } from "react";

export default function TodoForm({ InitialValue, onSubmit }) {
  const INITIAL_DATA = {
    title: InitialValue?.title || "",
    desc: InitialValue?.desc || "",
  };

  const [formData, setFormData] = useState(INITIAL_DATA);

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col gap-4 mt-6 mb-4">
          <label className="text-sm text-gray-500">Title</label>
          <input
            value={formData.title}
            onChange={handleChangeInput}
            type="text"
            name="title"
            placeholder="Enter todo title"
            className="w-full px-4 py-5 rounded-xl placeholder:text-gray-300 placeholder:text-sm"
          />
        </div>
        <div className="flex flex-col gap-4 mt-6 mb-4">
          <label className="text-sm text-gray-500">Description</label>

          <textarea
            value={formData.desc}
            onChange={handleChangeInput}
            placeholder="Enter todo title"
            className="w-full px-4 py-5 rounded-xl placeholder:text-gray-300 placeholder:text-sm"
            name="desc"
          ></textarea>
        </div>
        <div className="flex flex-col gap-4 mt-6 mb-4">
          <button
            type="submit"
            className="w-full btn text-white hover:bg-purple-400 bg-purple-500"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
