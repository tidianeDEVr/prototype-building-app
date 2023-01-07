export interface USER {
    id?: string;
    firstName?: string;
    lastName?: string;
    registeredAt?: any;
    role?: USER_ROLE;
}

export interface USER_ROLE {

}

export interface ONBOARD_SLIDE {
    title: string,
    image: string,
    description: string,
  }