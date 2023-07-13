type GuestArray = {
    names: {
         first: string
         last: string
     }[]
 }

export const Persons = (props: GuestArray) =>{
    return (
       <div>
       {  props.names.map((name)=>
        { return (<h2 key={name.first}>Welcome {name.first} {name.last}</h2>)})}
       </div>
    )
}