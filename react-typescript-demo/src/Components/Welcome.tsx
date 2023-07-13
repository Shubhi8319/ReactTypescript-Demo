type GuestName = {
    name: string,
    nameCount?: number
}

export const Welcome = (props: GuestName) => {
    const {nameCount = 0} = props
    return(
        <div>
            <h1>Welcome {props.name} to the React Typescript Demo Application !!!!! Your score is {nameCount}</h1>                 
        </div>
    )
}