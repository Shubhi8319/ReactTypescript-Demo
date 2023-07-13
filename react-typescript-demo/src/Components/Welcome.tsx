type GuestName = {
    name: string
}

export const Welcome = (props: GuestName) => {
    return(
        <div>
            <h1>Welcome {props.name} to the React Typescript Demo Application !!!!!</h1>            
        </div>
    )
}