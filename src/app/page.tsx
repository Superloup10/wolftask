import ModalForm from '@/components/ModalForm';
import TaskList from '@/components/TaskList';
import { ToggleMode } from '@/components/ToggleMode';
import { Separator } from '@/components/ui/separator';

export default function Home() {
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
                    <ModalForm description="Formulaire de création d'une tâche"
                               editMode={false}
                               titleModal="Nouvelle tâche"
                               titleSuccessButton="Ajouter"
                               titleActionButton="Ajouter une tâche"
                    />
                </div>
                <TaskList/>
            </main>
        </>
    );
}
