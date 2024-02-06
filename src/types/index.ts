export type DataType = {
    id:           number;
    image:        string;
    title:        string;
    description:  string;
    category:     string;
    link:         string;
    repository?:   string;
    technologies: string[];
    date?: string;
}

export enum Category {
    Freelance = "freelance",
    Personales = "personales",
}

export type ChildProps = {
    name: string;
    path: string;
    data: string;
  };