import React from 'react'
import { Formik, Form} from 'formik'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

function FormikContainer() {

    const dropdownOptions = [
        { key: 'Select an option', value:''},
        { key: 'Birthday', value:'birthday'},
        { key: 'Anniversary', value:'anniversary'},
        { key: 'Other', value:'other'}
    ]

    const guestOptions = [
        { key: 'Select number of guests', value:''},
        { key: '1', value:'1'},
        { key: '2', value:'2'},
        { key: '3', value:'3'},
        { key: '4', value:'4'},
        { key: '5', value:'5'},
        { key: '6', value:'6'},
        { key: '7', value:'7'},
        { key: '8', value:'8'},
        { key: '9', value:'9'},
        { key: '10', value:'10'},
    ]

    const availableTimes = [
        { key: 'Select Time', value:''},
        { key: '17:00', value:'17:00'},
        { key: '18:00', value:'18:00'},
        { key: '19:00', value:'19:00'},
        { key: '20:00', value:'20:00'},
        { key: '21:00', value:'21:00'},
        { key: '22:00', value:'22:00'},
    ]

    const initialValues = {
        name:'',
        email:'',
        guests:'',
        description:'',
        selectOption: '',
        guestOptions:'',
        availableTimes:'',
        date:''

    }
    const validationSchema = Yup.object({
        name:Yup.string().required('Name is required'),
        email:Yup.string().required('Email is required'),
        guests:Yup.number()
                .required('Number of guests is required'),
        date: Yup.string().required('Date is required'),
        availableTimes: Yup.string().required('Time is required'),
    })

    const onSubmit = values => console.log('Form data',values)
    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        >


    {
    formik =>

    <Form>
    <FormikControl
    control='input'
    type='name'
    label='Name'
    name='name'
    />

    <FormikControl
    control='input'
    type='email'
    label='Email'
    name='email'
    />

    <FormikControl
    control='select'
    label='Number of Guests'
    name='guests'
    options={guestOptions}
    />

    <FormikControl
    control='date'
    label='Choose Date'
    name='date'
    />



    <FormikControl
    control='select'
    label='Occasion'
    name='dropdownOptions'
    options={dropdownOptions}
    />

    <FormikControl
    control='textarea'
    label='Comments'
    name='description'
    />

    <button type='submit' aria-label='On Click' className='booking-button'>Submit</button>
    </Form>
    }
    </Formik>
    )
    }
    export default FormikContainer