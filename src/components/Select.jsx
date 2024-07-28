import React, { useId } from 'react'

const Select = React.forwardRef( function Select({
    label,
    options,
    className ='',
    ...props
}, ref){
    const id = useId();
    return (
        <div className="w-100 w-full">
            {label && 
                <label 
                className={`${className}`} 
                htmlFor={id}
                {...props}
                >
                    {label}
                </label>
            }
            <select 
                // name=""
                label={label}
                className={`px-3 py-2 rounded-lg bg-white text-black outline-none border w-full w-100 ${className}`}
                id={id}
                {...props}
                ref={ref}
                >
                    {options?.map((option)=>(
                        <option 
                        key={option}
                        value={option}>
                            {option}
                        </option>
                    ))}
            </select>
        </div>
    )
})

export default Select