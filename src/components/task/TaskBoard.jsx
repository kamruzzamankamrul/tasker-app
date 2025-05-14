import React, { useState } from "react";
import SearchTask from "./SearchTask";
import TaskAction from "./TaskAction";
import TaskList from "./TaskList";
import Modal from "./Modal";
import NoTaskFound from "./NoTaskFound";

export default function TaskBoard() {
  const defaultTasks = {
    id: crypto.randomUUID(),
    title: "Learn React",
    description: "Learn React with Tailwind CSS",
    tags: ["React", "Tailwind CSS", "JavaScript"],
    priority: "High",
    isFavorite: true,
  };
  const [tasks, setTasks] = useState([defaultTasks]);
  const [modal, setModal] = useState(false);
  const [editTask, setEditTask] = useState(null);
  const [originalTask, setOriginalTask] = useState([defaultTasks]);

  const addEditTask = (newTask, isAdd) => {
    if (isAdd) {
      setTasks((prev) => [...prev, newTask]);
      setOriginalTask((prev) => [...prev, newTask]);
    } else {
      setTasks(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
      setOriginalTask(
        tasks.map((task) => {
          if (task.id === newTask.id) {
            return newTask;
          }
          return task;
        })
      );
    }

    handleClose();
  };

  const handleEditClick = (task) => {
    setEditTask(task);
    setModal(true);
  };

  const handleClose = () => {
    setModal(false);
    setEditTask(null);
  };
  const handleDeleteClick = (taskId) => {
    const taskAfterDelete = tasks.filter((task) => task.id !== taskId);
    setTasks(taskAfterDelete);
  };

  const handleDeleteAll = () => {
    setTasks([]);
  };

  const handleFavoriteClick = (taskId) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, isFavorite: !task.isFavorite } : task
      )
    );
  };
  const handleSearch = (searchTerm) => {
    if (searchTerm.trim() === "") {
      setTasks(originalTask);
      return;
    }
    const filteredTasks = tasks.filter((task) =>
      task.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setTasks(filteredTasks);
  };

  return (
    <>
      {modal && (
        <Modal
          onSave={addEditTask}
          onCloseClick={handleClose}
          editTask={editTask}
        />
      )}
      <section className="mb-20" id="tasks">
        <div className="container">
          <div className="p-2  flex justify-end">
            <SearchTask onSearch={handleSearch} />
          </div>

          <div className="rounded-xl border border-[rgba(206,206,206,0.12)] bg-[#1D212B] px-6 py-8 md:px-9 md:py-16">
            <TaskAction
              addTask={() => setModal(true)}
              tasks={tasks}
              handleDeleteAll={handleDeleteAll}
            />
            <div className="overflow-auto">
              {tasks.length > 0 ? (
                <TaskList
                  tasks={tasks}
                  onEditClick={handleEditClick}
                  onDelete={handleDeleteClick}
                  onFavorite={handleFavoriteClick}
                />
              ) : (
                <NoTaskFound />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
