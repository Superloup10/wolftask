import TaskCard from '@/components/TaskCard';
import { Priority } from '@/domain/model/Priority';
import { Status } from '@/domain/model/Status';
import { Task } from '@/domain/model/Task';

export default function TaskList() {
    const tasks: Task[] = [
        {
            id: 1,
            name: 'Sample Task',
            description: 'This is a sample task description',
            status: Status.PENDING,
            priority: Priority.LOW,
            dueDate: new Date()
        },
        {
            id: 2,
            name: 'Sample Task 2',
            description: 'This is a sample task description 2',
            status: Status.PENDING,
            priority: Priority.LOW,
            dueDate: new Date()
        }
    ];

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {tasks.map(task => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    )
}
