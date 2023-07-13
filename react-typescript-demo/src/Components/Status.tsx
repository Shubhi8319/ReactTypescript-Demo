type StatusProps = {
    status: 'success' | 'error' | 'loading'
} 

export const Status = (props: StatusProps) => {
    let message;
    if(props.status === 'loading'){
        message = "Loading...."
    }
    else if(props.status === 'success'){
        message = "Loading successfully !!"
    }
    else if(props.status === 'error'){
        message = 'Error in loading'
    }
    return(
       <div>{message}</div>        
    )
}