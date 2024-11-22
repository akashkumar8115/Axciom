import { format, addDays, isAfter, isBefore } from 'date-fns';

export const formatDate = (date) => {
    return format(new Date(date), 'MM/dd/yyyy');
};

export const calculateDueDate = (checkoutDate, durationDays = 14) => {
    return addDays(new Date(checkoutDate), durationDays);
};

export const isOverdue = (dueDate) => {
    return isAfter(new Date(), new Date(dueDate));
};

export const isWithinDueDate = (checkoutDate, dueDate) => {
    const now = new Date();
    return isAfter(now, new Date(checkoutDate)) && isBefore(now, new Date(dueDate));
};
