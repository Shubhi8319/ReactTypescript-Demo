import { useEffect, useRef, useState } from "react"

export const MutableRef = () => {

    const [timer, setTimer] = useState(0)
    const intervalRef = useRef<number | undefined>(undefined)
    useEffect(() => {
        intervalRef.current = window.setInterval(() => {
            setTimer((timer) => timer +1 )
        }, 1000)
        return () => {
            stop()
        }
    },[])
    
    const stop = () => {
        window.clearInterval(intervalRef.current)
    }

    return(
        <>
        <div> Timer: {timer} </div>  
        <button onClick={() => stop()}>Stop Time</button>
        </>
    )
} 