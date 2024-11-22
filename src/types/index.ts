export interface User {
    id: string;
    username: string;
    role: 'admin' | 'user';
}

export interface Membership {
    id: string;
    memberName: string;
    email: string;
    phone: string;
    duration: '6months' | '1year' | '2years';
    startDate: string;
    endDate: string;
    status: 'active' | 'cancelled';
}
