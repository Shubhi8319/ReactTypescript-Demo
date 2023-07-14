import { Name } from "./Person.types"

type GuestArray = {
    names: Name[]
 }

export const PersonsList = ({ names }: GuestArray) =>{
    return (
       <div>
       {  names.map((name)=>
        { return (<h2 key={name.first}>Welcome {name.first} {name.last}</h2>)})}
       </div>
    )
}