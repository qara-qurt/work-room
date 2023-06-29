interface IInput {
    type?: 'text' |'password'
    label?: string
    placeholder?: string
    name: string
    value?: string
    onChange?: (val:string)=>void
}