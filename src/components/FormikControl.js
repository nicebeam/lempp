import React from 'react'
import Textarea from './Textarea'
import Input from './Input'
import Select from './Select'
import DatePicker from './DatePicker'

function FormikControl(props) {
const {control, ...rest} = props
switch (control) {
case 'input':
    return <Input {...rest} />
case 'textarea':
    return <Textarea {...rest} />
case 'select':
    return <Select {...rest} />
case 'date':
    return <DatePicker {...rest} />
default: return null
}

}

export default FormikControl