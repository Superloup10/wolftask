"use client"
import Modal from '@/components/Modal';
import TaskForm from '@/components/TaskForm';
import { Button } from '@/components/ui/button';
import { Task } from '@/domain/model/Task';
import { Pencil } from 'lucide-react';
import { useRef, useState } from 'react';

interface ModalFormProps {
    task?: Task;
    editMode: boolean;
    titleModal: string;
    description: string;
    titleSuccessButton: string;
    titleActionButton?: string;
}

export default function ModalForm(props: ModalFormProps) {
    const taskFormRef = useRef<HTMLFormElement>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleAddClick = () => {
        if (taskFormRef.current) {
            taskFormRef.current.requestSubmit();
        }
        setIsModalOpen(false);
    };

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    return (
        <Modal action={
            <Button variant={props.editMode ? 'ghost' : 'default'}
                    size={props.editMode ? 'icon' : 'default'}
                    onClick={openModal}>
                {props.editMode ? <Pencil/> : props.titleActionButton}
            </Button>
        }
               title={props.titleModal}
               description={props.description} isOpen={isModalOpen}
               onClose={closeModal}
               footer={
                   <>
                       <Button variant="default" onClick={handleAddClick}>{props.titleSuccessButton}</Button>
                       <Button variant="destructive" onClick={closeModal}>Annuler</Button>
                   </>
               }>
            <TaskForm formRef={taskFormRef} editMode={props.editMode} taskToUpdate={props.task}/>
        </Modal>
    );
}
