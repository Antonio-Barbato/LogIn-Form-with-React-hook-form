import React from 'react'
import { useFormContext } from 'react-hook-form'

const Child = () => {
    const method = useFormContext()
  return (
    <div>
      <input {...method.register('lastName')}/>
    </div>
  )
}

export default Child
