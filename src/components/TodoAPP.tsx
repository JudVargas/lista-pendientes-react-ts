// type Props = {}
import { useState } from "react";
import { ListaTareas } from "./ListaTareas";
export const TodoAPP = () => {
  const [nuevaTarea, setNuevaTarea] = useState<string>("");

  const [listaTareas, setlistaTareas] = useState<string[]>([]);
  
  const handleAddTask = () => {
    if (nuevaTarea.trim() === "") return; // Evita agregar tareas vacías
    setlistaTareas(tareasAnterior => [...tareasAnterior, nuevaTarea]);
    setNuevaTarea(""); // Limpia el campo de entrada después de agregar la tarea
  }

  const handleBorrarTarea = (index: number) => {
    setlistaTareas(tareas => tareas.filter((_, i) => i !== index));
  }


  return (
    <div>
      <h1>Lista Tareas</h1>
      <div>
        <input
          type="text"
          value={nuevaTarea}
          onChange={(e) => setNuevaTarea(e.target.value)}
          placeholder="Nueva Tarea"
        />
        <button onClick={(handleAddTask)}>Agregar</button>

      </div>
      <ListaTareas listaTareas={listaTareas} borrarTarea={handleBorrarTarea}></ListaTareas>
    </div>
  );
};
