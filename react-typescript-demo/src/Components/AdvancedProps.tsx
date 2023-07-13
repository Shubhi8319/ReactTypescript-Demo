import React from "react"

type AdvancedPropTypes = {
    children: React.ReactNode
}

export const AdvancedProps = (props: AdvancedPropTypes) => {
    return(
        <a>{props.children}</a>
    ) 
}