type GuestName = {
    name: string,
    nameCount?: number
}

export const Welcome = ({name, nameCount = 0}: GuestName) => {
    return(
        <div>
            <h1>Welcome {name} to the React Typescript Demo Application !!!!! Your score is {nameCount}</h1>                 
        </div>
    )
}