import React from 'react'

export const Person = ({ name }: { name: string }) => {
    return (
        <div role="contentinfo">Name is {name}</div>
    )
}
