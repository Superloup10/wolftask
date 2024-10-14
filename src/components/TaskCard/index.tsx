import Modal from '@/components/Modal';
import TaskForm from '@/components/TaskForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Task } from '@/domain/model/Task';
import { Pencil } from 'lucide-react';
import { useRef, useState } from 'react';

export default function TaskCard({ task }: { task: Task }) {
    const taskFormRef = useRef<HTMLFormElement>(null);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const handleAddClick = () => {
        if (taskFormRef.current) {
            taskFormRef.current.requestSubmit();
        }
        setIsEditModalOpen(false);
    };

    const openEditModal = () => setIsEditModalOpen(true);
    const closeEditModal = () => setIsEditModalOpen(false);
    const openCloseModal = () => setIsDeleteModalOpen(true);
    const closeCloseModal = () => setIsDeleteModalOpen(false);
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                    {task.name}
                    <Modal action={
                        <Button variant="ghost" size="icon" onClick={openEditModal}>
                            <Pencil/>
                        </Button>
                    }
                           title="Modifier une tâche"
                           description="Formulaire de modification de tâche" isOpen={isEditModalOpen}
                           onClose={closeEditModal}
                           footer={
                               <>
                                   <Button variant="default" onClick={handleAddClick}>Modifier</Button>
                                   <Button variant="destructive" onClick={closeEditModal}>Annuler</Button>
                               </>
                           }>
                        <TaskForm formRef={taskFormRef} editMode={true} taskToUpdate={task}/>
                    </Modal>
                </CardTitle>
                <CardDescription>{task.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Card Content</p>
            </CardContent>
            <CardFooter>
                <Modal action={<Button variant="destructive" onClick={openCloseModal}>Supprimer</Button>}
                       title={`Voulez-vous vraiment supprimer la tâche #${task.id} ?`}
                       description="Cette action ne peut-être annuler." isOpen={isDeleteModalOpen} onClose={closeCloseModal}
                       footer={
                           <>
                               <Button variant="default" onClick={openCloseModal}>Confirmer</Button>
                               <Button variant="destructive" onClick={closeCloseModal}>Annuler</Button>
                           </>
                       }/>
            </CardFooter>
        </Card>
    )
}
