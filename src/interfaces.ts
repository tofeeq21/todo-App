export interface TaskType{
    id: string;
    text: string;
    date: Date;
}

interface Add{
    type:'add'
    payload:TaskType
    
}

interface Delete{
    type:'delete'
    payload:{
        id: string
    }  
}

interface Update{
    type:'update'
}

interface Edit{
    type:'edit'
    payload:TaskType
}

export type Action = Add | Delete | Update | Edit;