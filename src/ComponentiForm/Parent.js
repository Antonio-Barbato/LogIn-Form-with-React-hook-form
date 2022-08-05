import React from 'react'
import { useForm, useFieldArray, Controller } from 'react-hook-form'


const Parent = () => {
    const { register, handleSubmit, control, reset } = useForm({
        defaultValues:{
            test: [{firstName: 'Bill', lastName: 'Luo'}]
        }
    })
const {fields, append, prepend, remove, swap, move, insert, replace} = useFieldArray({
    control, 
    name: 'test'
})

  return (
    <form onSubmit={handleSubmit((data) => console.log('submitted',data))}>
        <h1>Field Array</h1>
        <ul>
            {
                fields.map((item, index) => {
                    return (
                        <li key={item.id}>
                            <input {...register(`test.${index}.firstName`)}/>

                            <Controller
                            render={({field}) => <input {...field}/>}
                            name={`test.${index}.lastName`}
                            control={control}
                            />
                            <button type='button' onClick={() => remove(index)}>
                                delete
                            </button>
                        </li>
                    )
                })
            }
        </ul>
        <section>
            <button type='button'
            onClick={() => {
            append({firstName:'appendBill' , lastName: 'appendLuo'})
            }}>
                append
            </button>
            <button type='button' 
            onClick={() => {
                prepend({
                    firstName:'prependBill',
                    lastName:'prependBill'
                })
            }}>
                prepend
            </button>
            <button type='button' onClick={() => 
            insert(parseInt(2,10), {
                firstName:'InsertBill',
                lastName:'insertLuo'
            })}>
                insert at
            </button>
            <button type='button' onClick={() => swap(1,2)}>
                swap
            </button>
            <button type='button' onClick={() => move(1,2)}>
                move
            </button>
            <button type='button' onClick={() =>
            replace([
                {
                    firstName:'test1',
                    lastName:'test1',
                },{
                    firstName:'test2',
                    lastName:'test2'
                }
            ])}>
                replace
            </button>
            <button type='button' onClick={() => remove(1)}>
                remove at
            </button>
            <button type='button' onClick={() =>
             reset({
                test:[{firstName:'Bill' , lastName:'Luo'}]
             })}>
                 reset
            </button>

        </section>
    </form>   
  )
}

export default Parent
