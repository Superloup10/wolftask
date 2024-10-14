'use client'

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';
import { Priority } from '@/domain/model/Priority';
import { Status } from '@/domain/model/Status';
import { cn } from '@/lib/utils';
import { zodResolver } from '@hookform/resolvers/zod';
import { format } from 'date-fns';
import { CalendarIcon } from 'lucide-react';
import { RefObject } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const formSchema = z.object({
    name: z.string(),
    description: z.string(),
    status: z.nativeEnum(Status),
    priority: z.nativeEnum(Priority),
    dueDate: z.date(),
});

export default function TaskForm({ formRef }: { formRef: RefObject<HTMLFormElement> }) {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: '',
            description: '',
            status: Status.PENDING,
            priority: Priority.LOW,
            dueDate: new Date(),
        }
    });

    const onSubmit = (data: z.infer<typeof formSchema>) => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} ref={formRef}>
                <FormField control={form.control} name="name" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                            <Input {...field} placeholder="Name"/>
                        </FormControl>
                        <FormDescription>This is name of task</FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField control={form.control} name="description" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Description</FormLabel>
                        <FormControl>
                            <Textarea {...field} placeholder="Description"/>
                        </FormControl>
                        <FormDescription>This is description of task</FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField control={form.control} name="status" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a status"/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={Status.PENDING}>Pending</SelectItem>
                                <SelectItem value={Status.IN_PROGRESS}>In progress</SelectItem>
                                <SelectItem value={Status.COMPLETED}>Completed</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormDescription>This is status of task</FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField control={form.control} name="priority" render={({ field }) => (
                    <FormItem>
                        <FormLabel>Priority</FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value}>
                            <FormControl>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select a priority"/>
                                </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                                <SelectItem value={Priority.LOW}>Low</SelectItem>
                                <SelectItem value={Priority.MEDIUM}>Medium</SelectItem>
                                <SelectItem value={Priority.HIGH}>High</SelectItem>
                            </SelectContent>
                        </Select>
                        <FormDescription>This is priority of task</FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}/>
                <FormField control={form.control} name="dueDate" render={({ field }) => (
                    <FormItem className="flex flex-col">
                        <FormLabel>DueDate</FormLabel>
                        <Popover modal>
                            <PopoverTrigger asChild>
                                <FormControl>
                                    <Button variant="outline"
                                            className={cn('w-[240px] pl-3 text-left font-normal', !field.value && 'text-muted-foreground')}>
                                        {field.value ? (format(field.value, 'PPP')) : (<span>Pick a date</span>)}
                                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50"/>
                                    </Button>
                                </FormControl>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0" align="start">
                                <Calendar mode="single" selected={field.value} onSelect={field.onChange}
                                          disabled={(date) => date < new Date()}
                                          initialFocus/>
                            </PopoverContent>
                        </Popover>
                        <FormDescription>This is due date of task</FormDescription>
                        <FormMessage/>
                    </FormItem>
                )}/>
            </form>
        </Form>
    );
}
