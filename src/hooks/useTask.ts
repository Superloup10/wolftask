'use client'

import { Priority } from '@/domain/model/Priority';
import { Status } from '@/domain/model/Status';
import { Task, TaskWithoutId } from '@/domain/model/Task';
import { useState } from 'react';

type TaskHook = {
    tasks: Task[];
    addTask: (task: TaskWithoutId) => void;
    editTask: (taskId: number, data: TaskWithoutId) => void;
    removeTask: (taskId: number) => void;
};

export default function useTask(): TaskHook {
    const [tasks, setTasks] = useState<Task[]>([
        {
            id: 1,
            name: 'Sample Task',
            description: 'This is a sample task description',
            content: 'This is a sample task content',
            tags: ['tag1', 'tag2'],
            status: Status.PENDING,
            priority: Priority.LOW,
            assignTo: undefined,
            createdAt: new Date(),
            updatedAt: undefined,
            dueDate: new Date()
        },
        {
            id: 2,
            name: 'Sample Task 2',
            description: 'This is a sample task description 2',
            content: 'This is a sample task content 2',
            tags: ['tag1', 'tag2'],
            status: Status.PENDING,
            priority: Priority.LOW,
            assignTo: undefined,
            createdAt: new Date(),
            updatedAt: undefined,
            dueDate: new Date()
        }
    ]);
    const addTask = (task: TaskWithoutId) => {
        setTasks([...tasks, { id: (tasks.length + 1), ...task }]);
    };

    const editTask = (taskId: number, data: TaskWithoutId) => {
        setTasks(tasks.map(t => t.id === taskId ? { id: taskId, ...data } : t));
    };

    const removeTask = (taskId: number) => {
        setTasks(tasks.filter(t => t.id !== taskId));
    };
    return {
        tasks,
        addTask,
        editTask,
        removeTask,
    }
}
