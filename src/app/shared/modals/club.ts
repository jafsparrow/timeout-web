

export interface Club {
    name: string;
    address1: string;
    address2?: string;
    pin?: number;
    description?: string;

}

export interface ClubManagement {
    name: string;
    role: string;
    permission: object;
}
