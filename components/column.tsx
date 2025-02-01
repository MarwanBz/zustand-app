import { Status, useTaskStore } from '@/store/task-store'

import Task from './task'
import { useMemo } from 'react'

// const tasks = [
//   {
//     id: '1234',
//     title: 'Our first task',
//     description: 'Some description',
//     status: Status,
//   }
// ]

export default function Column({
  title,
  status
}: {
  title: string
  status: Status
  }) {
  const tasks = useTaskStore(state => state.tasks)
  
  const filteredTasks = useMemo( () => tasks.filter(task => task.status === status),[tasks, status])
console.log("column",filteredTasks);
  const updateTask = useTaskStore(state => state.updateTask)
  const draggedTask = useTaskStore(state => state.draggedTask)
  const dragTask = useTaskStore(state => state.dragTask)
  
  const handelDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (!draggedTask) return
    updateTask(draggedTask, status)
    dragTask(null)
    // console.log("dropped");
    
   }

  return (
    <section className='h-[600px] flex-1'>
      <h2 className='ml-1 font-serif text-2xl font-semibold'>{title}</h2>

      <div className='mt-3.5 h-full w-full flex-1 rounded-xl bg-gray-700/50 p-4'>
        <div className='flex flex-col gap-4' onDrop={handelDrop} onDragOver={e => e.preventDefault()}>
          {filteredTasks.map(task => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </section>
  )   
}
