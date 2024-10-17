import { Priority } from '@/domain/model/Priority';
import { Status } from '@/domain/model/Status';
import { User } from '@/domain/model/User';

export interface Task {
    id: number;
    name: string;
    description: string;
    content: string;
    tags: string[];
    status: Status;
    priority: Priority;
    assignTo?: User;
    createdAt: Date;
    updatedAt?: Date;
    dueDate: Date;
}

export type TaskWithoutId = Omit<Task, 'id'>;
