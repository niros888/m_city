import React, { useState } from 'react';
import { auth, login } from '../../firebase';

import { CircularProgress } from '@material-ui/core'
import { Redirect } from 'react-router-dom'

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PinDropSharp } from '@material-ui/icons';



const SignIn = (props) => {

    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            email: '',
            passowrd: ''
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Invalid email address')
                .required('The email is required'),
            password: Yup.string()
                .required('The password is required')

        }),
        onSubmit: (values) => {
            // setLoading(true) 
            console.log(values)
            submitForm(values)
        }
    })

    const submitForm = (values) => {

        alert("whataaat");

        // alert("try logging in");
        login(values.email, values.password)
        .then(() => {
            //show success toast
            props.history.push('/dashboard');
        })
        .catch(error => {
            setLoading(false);
            alert(error);
            //show toasts
        })
        // auth()
        // .signInWithEmailAndPassword(
        //     values.email,
        //     values.password
        // ).then(() =>{
        //     //show success toast
        //     props.history.push('/dashboard')

        // }).catch(error=>{
        //     setLoading(false);
        //     alert(error)
        //     //show toasts
        // })


    }

        return (

            <div className='container'>
                <div className='signin_wrapper' style={{ margin: '100px' }}>
                    <form onSubmit={formik.handleSubmit}>
                        <h2>Please login</h2>
                        <input name='email'
                            placeholder='Email'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email} />

                        {formik.touched.email && formik.errors.email ?
                            <div className="error_label">
                                {formik.errors.email}
                            </div>
                            : null}

                        <input name='password'
                            type="password"
                            placeholder='Password'
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password} />

                        {formik.touched.passowrd && formik.errors.password ?
                            <div className="error_label">
                                {formik.errors.password}
                            </div>
                            : null}

                        {loading ?

                            <CircularProgress color="secondary" className="progress" />

                            :

                            <button type="submit"> Log In </button>


                        }

                    </form>

                </div>
            </div>
        )
    }

    export default SignIn