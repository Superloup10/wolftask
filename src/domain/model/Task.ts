import { Priority } from '@/domain/model/Priority';
import { Status } from '@/domain/model/Status';

export interface Task {
    id: number;
    name: string;
    description: string;
    status: Status;
    priority: Priority;
    dueDate: Date;
}
