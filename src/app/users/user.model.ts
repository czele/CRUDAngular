export interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface ResponseUsers {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
}

export interface RequestCreate {
  name: string;
  job: string;
}
export interface ResponseCreate {
  name: string;
  job: string;
  id: string;
  createdAt: Date;
}

//Para o getUser - Não é o mais recomendável

export interface ResponseUser {
  data: User
}

//Para o update - Não é a melhor prática
export interface RequestUpdate {
  name: string;
  job: string;
}

export interface ResponseUpdate {
  name: string;
  job: string;
  updateAt: Date;
}

