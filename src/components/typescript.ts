
export interface IState {
    key : string,
    secret : string,
    setSecret : React.Dispatch<React.SetStateAction<string>>
    setKey : React.Dispatch<React.SetStateAction<string>>
}

export interface IBook {
    book : {
      author : string,
      cover : string,
      id : number,
      isbn : string,
      pages : number,
      published : number,
      title : string
    }
    status : number
}

export interface IId {
  id : number | string,
  setId : React.Dispatch<React.SetStateAction<number | string>>
}