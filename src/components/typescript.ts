
export interface IState {
    key : string,
    secret : string,
    setSecret : React.Dispatch<React.SetStateAction<string>>
    setKey : React.Dispatch<React.SetStateAction<string>>
}