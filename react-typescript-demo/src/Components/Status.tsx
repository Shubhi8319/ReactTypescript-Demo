type StatusProps = {
    status: 'success' | 'error' | 'loading'
} 

export const Status = ({status}: StatusProps) => {
    let message;
    if(status === 'loading'){
        message = "Loading...."
    }
    else if(status === 'success'){
        message = "Loading successfully !!"
    }
    else if(status === 'error'){
        message = 'Error in loading'
    }
    return(
       <div>{message}</div>        
    )
}