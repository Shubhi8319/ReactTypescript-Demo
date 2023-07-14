import React from "react"

type AdvancedPropTypes = {
    children: React.ReactNode
}

export const AdvancedProps = (props: AdvancedPropTypes) => {
    return(
        <div>{props.children}</div>
    ) 
}