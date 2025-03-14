import React, { forwardRef, ComponentPropsWithoutRef } from 'react';

type InputProps = {
    label: string;
    id: string;
} & ComponentPropsWithoutRef<'input'>;

// export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, id, ...props }, ref) => {
//     return (
//         <p>
//             <label htmlFor={id}>{label}</label>
//             <input id={id} {...props} ref={ref} />
//         </p>
//     );
// });

const Input = forwardRef<HTMLInputElement, InputProps>(function Input({ label, id, ...props}, ref) {
    return (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} {...props} ref={ref} />
        </p>
    )
})

export default Input
