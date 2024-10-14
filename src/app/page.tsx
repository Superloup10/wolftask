'use client'
import Modal from '@/components/Modal';
import TaskForm from '@/components/TaskForm';
import TaskList from '@/components/TaskList';
import { ToggleMode } from '@/components/ToggleMode';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { useRef, useState } from 'react';

export default function Home() {
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
        <>
            <header className="px-6 pt-6 flex justify-between items-center">
                <div className="flex flex-col items-center justify-center col-2">
                    <h1>WolfTask</h1>
                    <p>Un simple gestionnaire de tâche</p>
                    <Separator className="my-4"/>
                </div>
                <ToggleMode/>
            </header>
            <main className="px-6">
                <div className="flex gap-4 items-center justify-center">
                    <h2>Tasks</h2>
                    <Modal action={<Button variant="default" onClick={openModal}>Ajouter une tâche</Button>}
                           title="Nouvelle tâche"
                           description="Formulaire de création d'une tâche" isOpen={isModalOpen} onClose={closeModal}
                           footer={<>
                               <Button variant="default" onClick={handleAddClick}>Ajouter</Button>
                               <Button variant="destructive" onClick={closeModal}>Annuler</Button>
                           </>}>
                        <TaskForm formRef={taskFormRef} editMode={false}/>
                    </Modal>
                </div>
                <TaskList />
            </main>
        </>
    );
}
