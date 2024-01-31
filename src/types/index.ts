export type DataType = {
    id:           number;
    image:        string;
    title:        string;
    description:  string;
    category:     string;
    link:         string;
    technologies: string[];
}

export enum Category {
    Freelance = "freelance",
    Personales = "personales",
}
