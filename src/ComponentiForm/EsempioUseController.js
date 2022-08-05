import React from 'react'
import { useForm, useWatch } from 'react-hook-form'

const Controller = ({ control,register, name, rules, render }) => {
    const value = useWatch({
        control,
        name
    })
    const props = register(name,rules);
    return render({
        value,
        onChange: (e) => 
        props.onChange({
            target: {
                name,
                value: e.target.value
            }
        }),
        onBlur: props.onBlur,
        name: props.name
    })
}

const Input = (props) => {
    const [value, setValue] = React.useState(props.value || "")

    React.useEffect(() => {
        setValue(props.value)
    },[props.value])

    return (
        <input
        name={props.name}
        onChange={(e) => {
            setValue(e.target,value) ;
        props.onChange && props.onChange(e)
        }}
        value={value}
        />
    )
}

function EsempioUseController() {
    const { register, handleSubmit, control, setValue, formState:{errors} } = useForm({
        defaultValues:{
            firstName: '',
            lastName:'test1'
        }
    })
    console.log('errors' , errors);

    React.useEffect(() => {
        setTimeout(() => {
            setValue('lastName', 'test')
        },1000)
    },[setValue])
  return (
    <div>
        <h1>UseController</h1>
        <form onSubmit={handleSubmit((data) => console.log('submitted', data))}>
            <input {...register('firstName')} placeholder='FirstName'/>

            <Controller {...{control, register, name:'lastName', rules:{required:true}, render: (props) => <Input {...props}/> }}/>

            <input type='submit'/>
        </form>
    </div>
  )
}

export default EsempioUseController