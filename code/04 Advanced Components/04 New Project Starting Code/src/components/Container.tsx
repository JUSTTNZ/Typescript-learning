// import { type ReactNode, type ElementType, ComponentPropsWithoutRef } from "react"

// type ContainerProps<T extends ElementType> = {
//     as: T;
//     children: ReactNode;
// } & ComponentPropsWithoutRef<T>;

// export const Container = <C extends ElementType>({as, children, ...props}: ContainerProps<C>) => {
//     const Component = as || 'div';
//     return <Component className="container"{...props}>{children}</Component>;
// }


import { type ReactNode, type ElementType as ReactElementType, ComponentPropsWithoutRef } from "react";

type ContainerProps<T extends ReactElementType> = {
    as?: T; // Make 'as' optional so that it defaults to 'div'
    children: ReactNode;
} & ComponentPropsWithoutRef<T>;

export const Container = <C extends ReactElementType = "div">({ as, children, ...props }: ContainerProps<C>) => {
    const Component = as || "div"; // Default to 'div' if 'as' is not provided
    return <Component className="container"{...(props as ComponentPropsWithoutRef<C>)}>{children}</Component>;
};
