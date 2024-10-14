import {
    Dialog,
    DialogContent,
    DialogDescription, DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from '@/components/ui/dialog';
import { ReactNode } from 'react';

interface ModalProps {
    action: ReactNode;
    title: string;
    description: string;
    children: ReactNode;
    footer: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal(props: ModalProps) {
    return (
        <Dialog open={props.isOpen} onOpenChange={(open) => (!open && props.onClose())}>
            <DialogTrigger asChild>{props.action}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{props.title}</DialogTitle>
                    <DialogDescription>{props.description}</DialogDescription>
                </DialogHeader>
                {props.children}
                <DialogFooter>
                    {props.footer}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
