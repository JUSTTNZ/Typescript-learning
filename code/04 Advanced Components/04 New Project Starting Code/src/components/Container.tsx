import { ElementType } from "react"

type ContainerProps = {
    as: ElementType
}

export const Container = ({as}: ContainerProps) => {
    const Component = as;
    return <Component/>
}