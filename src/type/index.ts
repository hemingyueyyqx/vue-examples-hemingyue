export interface Course {
    id?: number
    name?: string
    createTime?: string
  }
  
  export interface User {
    id?: number
    level?: number
    name?: string
    address?: string
    insertTime?: string
    sex?: string
    title?: Title
    courses?: Course[]
  }
  
  export interface Title {
    id?: number
    name?: string
  }