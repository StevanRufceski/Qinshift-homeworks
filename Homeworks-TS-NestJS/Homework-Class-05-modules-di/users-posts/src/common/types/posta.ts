export interface Posta {
    id: number;
    title: string;
    content: string;
    authorId: number;
}

export type CreatePosta = Omit<Posta, 'id'>;
export type UpdatePosta = Omit<Posta, 'id' | 'authorId'>;