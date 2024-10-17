'use client'
import Modal from '@/components/Modal';
import ModalForm from '@/components/ModalForm';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Task } from '@/domain/model/Task';
import Link from 'next/link';
import { useState } from 'react';

export default function TaskCard({ task }: { task: Task }) {
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openCloseModal = () => setIsDeleteModalOpen(true);
    const closeCloseModal = () => setIsDeleteModalOpen(false);
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex gap-2 items-center">
                    {task.name}
                    <ModalForm
                        titleModal="Modifier une tâche"
                        description="Formulaire de modification de tâche"
                        titleSuccessButton="Modifier"
                        task={task}
                        editMode={true}
                    />
                </CardTitle>
                <CardDescription>{task.description}</CardDescription>
            </CardHeader>
            <CardContent>
                <p><strong>Contenu:</strong> {task.content}</p>
                <p><strong>Status:</strong> {task.status}</p>
                <p><strong>Priorité:</strong> {task.priority}</p>
                <p><strong>Date de création:</strong> {task.createdAt.toLocaleDateString()}</p>
                {task.updatedAt && <p><strong>Date de modification:</strong> {task.updatedAt.toLocaleDateString()}</p>}
                <p><strong>Date d'échéance:</strong> {task.dueDate.toLocaleDateString()}</p>
                {task.assignTo &&
                    <p>
                        <strong>Assigné à:</strong>
                        <Link href={`/users/${task.assignTo.id}`}> {task.assignTo.name}</Link>
                    </p>}
                {task.tags.length > 0 && <p><strong>Tags:</strong> {task.tags.join(', ')}</p>}
            </CardContent>
            <CardFooter>
                <Modal action={<Button variant="destructive" onClick={openCloseModal}>Supprimer</Button>}
                       title={`Voulez-vous vraiment supprimer la tâche #${task.id} ?`}
                       description="Cette action ne peut être annuler." isOpen={isDeleteModalOpen}
                       onClose={closeCloseModal}
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
