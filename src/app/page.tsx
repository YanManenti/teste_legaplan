"use client";
import { useEffect, useMemo, useState } from "react";
import Option from "./custom_components/Option/Option";
import NovaTarefaButton from "./custom_components/NovaTarefaButton/NovaTarefaButton";
import DeletarTarefaButton from "./custom_components/DeletarTarefaButton/DeletarTarefaButton";
//@ts-expect-error uuid has no types
import { v4 as uuidv4 } from "uuid";
import Image from "next/image";

type Task = {
  id: string;
  name: string;
  done: boolean;
};

export default function Home() {
  const storageKey = "tasksFocalPoint";
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    if (localStorage.getItem(storageKey)) {
      const tasks = JSON.parse(localStorage.getItem(storageKey)!);
      setTasks(tasks);
    } else {
      setTasks([]);
    }
  }, []);

  function addTask(name: string) {
    const newTask = { id: uuidv4(), name, done: false };
    setTasks([...tasks, newTask]);
    localStorage.setItem(storageKey, JSON.stringify([...tasks, newTask]));
  }

  function deleteTask(id: string) {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem(storageKey, JSON.stringify(newTasks));
  }

  function toggleTask(id: string) {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setTasks(newTasks);
    localStorage.setItem(storageKey, JSON.stringify(newTasks));
  }

  const date = useMemo(() => new Date(), []);
  const locale = "pt-BR";

  const day = date.toLocaleString(locale, { day: "numeric" });
  const month = date.toLocaleString(locale, { month: "long" });
  const year = date.toLocaleString(locale, { year: "numeric" });
  const weekday = date.toLocaleString(locale, {
    weekday: "long",
  });
  const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);

  const tasksDone = tasks.filter((task) => task.done);
  const tasksNotDone = tasks.filter((task) => !task.done);

  return (
    <div className="flex flex-col items-center py-6 px-6 sm:px-14">
      <div className="flex w-full justify-between items-center pb-6 separatingBorder relative flex-wrap">
        <Image
          src="./icon.svg"
          width={"150"}
          height={"36"}
          alt="business logo"
        />
        <h1 className="text-[length:--titleSize] font-medium h-fit sm:absolute sm:left-1/2 sm:transform sm:-translate-x-1/2">
          Bem-vindo de volta, Marcus
        </h1>
        <h3 className="text-[--secondary] text-[length:--textSize] font-[--normalWeight] h-fit">
          {capitalizedWeekday}, {day} de {month} de {year}
        </h3>
      </div>
      <div className="my-8 px-2 sm:px-8 flex flex-col gap-6 w-full max-w-[450px] overflow-y-auto max-h-[calc(100vh-56px-157px-48px-64px)]">
        <h3 className="text-[--secondary] text-[length:--textSize] font-[--normalWeight] h-fit w-full text-center">
          Suas tarefas hoje
        </h3>
        {tasksNotDone.map((task) => (
          <Option
            key={task.id}
            text={task.name}
            checked={task.done}
            setChecked={() => toggleTask(task.id)}
            deleteComponent={
              <DeletarTarefaButton
                id={task.id}
                onDelete={() => deleteTask(task.id)}
              />
            }
          />
        ))}
        <h3 className="text-[--secondary] text-[length:--textSize] font-[--normalWeight] h-fit w-full text-center">
          Tarefas finalizadas
        </h3>
        {tasksDone.map((task) => (
          <Option
            key={task.id}
            text={task.name}
            checked={task.done}
            setChecked={() => toggleTask(task.id)}
            deleteComponent={
              <DeletarTarefaButton
                id={task.id}
                onDelete={() => deleteTask(task.id)}
              />
            }
          />
        ))}
      </div>
      <NovaTarefaButton onAdd={addTask} />
    </div>
  );
}
