import { type PropsWithChildren, type ReactNode } from 'react'

// type GoalList = PropsWithChildren<{image: {
//     src: string;
//     alt: string;
// }}>

type GoalList = {
    image: {
        src: string;
        alt: string;
    };
    children: ReactNode
}
export default function Header ({image, children}: 
    GoalList
) {
    return  (
        <header>
            <img src={image.src}  alt={image.alt} />
            <p>{children}</p>
        </header>
    )
}