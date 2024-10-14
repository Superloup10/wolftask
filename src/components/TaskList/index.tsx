import TaskCard from '@/components/TaskCard';
import useTask from '@/hooks/useTask';

export default function TaskList() {
    const { tasks } = useTask();

    return (
        <div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-4">
            {tasks.map(task => (
                <TaskCard key={task.id} task={task}/>
            ))}
        </div>
    )
}
