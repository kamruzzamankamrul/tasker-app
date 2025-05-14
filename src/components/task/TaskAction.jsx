import React from "react";

export default function TaskAction({ addTask, tasks, handleDeleteAll }) {
  return (
    <>
      <div className="mb-14 items-center justify-between sm:flex">
        <h2 className="text-2xl font-semibold max-sm:mb-4">Your Tasks</h2>
        <div className="flex items-center space-x-5">
          <button
            className="rounded-md bg-blue-500 px-3.5 py-2.5 text-sm font-semibold"
            onClick={addTask}
          >
            Add Task
          </button>
          {tasks.length > 0 ? (
            <button
              className="rounded-md bg-red-500 px-3.5 py-2.5 text-sm font-semibold"
              onClick={handleDeleteAll}
            >
              Delete All
            </button>
          ) : null}
        </div>
      </div>
    </>
  );
}
