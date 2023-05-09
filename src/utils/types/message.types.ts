import { User } from './user.type';

export type TMessage = {
    id?: string;
    receiverId?: string;
    message: string;
    sender?: User;
    senderId?: string;
    isSelf?: boolean
}
