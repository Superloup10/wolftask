import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Task } from '@/domain/model/Task';
import { Pencil } from 'lucide-react';

export default function TaskCard({ task }: { task: Task }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex">
                    {task.name}
                    {/*<Pencil/>*/}
                </CardTitle>
                <CardDescription>{task.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <p>Card Footer</p>
            </CardFooter>
        </Card>
    )
}
