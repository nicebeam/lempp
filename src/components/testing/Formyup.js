import React from "react";
import * as Yup from 'yup'
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextError from "./TextError";

const initialValues = {
    name:'',
    lastName:'',
    email:'',
    date:'',
    time:'',
    guests:'',
    occasion:'',
    comments:'',
}

const options = [
    { label:'Birthday', value: 'birthday'},
    { label:'Anniversary', value: 'anniversary'},
];

const onSubmit = values => {
    console.log('Form data',values)
}

const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    lastName: Yup.string().required('Required'),
    email: Yup.string()
            .email('Invalid email format')
            .required('Required'),
    date: Yup.string().required('Required'),
    time: Yup.string().required('Required'),
    guests: Yup.string().required('Required'),
    occasion: Yup.string().required('Required'),
})

export default function BookForm(props) {

    return (
        <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}>
            <Form>
            <div className="form-control">
            <label htmlFor='name'>Name</label>
            <Field type='text'
                    id='name'
                    name='name'
                    />
                    <ErrorMessage name='name' component={TextError}/>
                    </div>


        <div className="form-control">
        <label htmlFor='lastName'>Last Name</label>
        <Field type='text'
        id='lastName'
        name='lastName'
        />
        <ErrorMessage name='lastName' component={TextError} />
        </div>

        <div className="form-control">
        <label htmlFor='email'>Email</label>
        <Field type='text'
        id='email'
        name='email'
        />
        <ErrorMessage name='email' component={TextError}  />
        </div>

        <div className="form-control">
        <label htmlFor='date'>Date</label>
        <Field type='text'
        id='date'
        name='date'
        />
         <ErrorMessage name='date' component={TextError}  />
        </div>

        <div className="form-control">
        <label htmlFor='time'>Time</label>
        <Field type='text'
        id='time'
        name='time'
        />
        <ErrorMessage name='time' component={TextError}  />
        </div>

        <div className="form-control">
        <label htmlFor='guests'>Number of Guests</label>
        <Field type='number'
        id='guests'
        name='guests'
        placeholder='1'
        min='1'
        max='10'
        />
        <ErrorMessage name='guests' component={TextError}  />
        </div>


        <div className="form-control">
        <label htmlFor='occasion'>Occasion</label>
        <Field
        as='select'
        id='occasion'
        name='occasion'
        placeholder='Select'
        >
        {options}
        </Field>
         <ErrorMessage name='occasion' component={TextError}  />
        </div>

        <div className="form-control">
            <label htmlFor='comments'>Comments</label>
            <Field as='textarea' id='comments'
            name='comments' />
        </div>

        <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}