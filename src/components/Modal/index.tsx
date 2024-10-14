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
    children?: ReactNode;
    footer: ReactNode;
    isOpen: boolean;
    onClose: () => void;
}

export default function Modal({ action, title, description, children = null, footer, isOpen, onClose }: ModalProps) {
    return (
        <Dialog open={isOpen} onOpenChange={(open) => (!open && onClose())}>
            <DialogTrigger asChild>{action}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    {description !== '' && <DialogDescription>{description}</DialogDescription>}
                </DialogHeader>
                {children}
                <DialogFooter>
                    {footer}
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
