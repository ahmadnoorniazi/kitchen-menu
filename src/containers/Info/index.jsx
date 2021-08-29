import React, { useState } from 'react'
import './index.css'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import Box from '../../components/Box'
import { Button } from 'primereact/button';
import { useHistory } from 'react-router-dom'

const Info = () => {
    const history = useHistory()
    const [formValues, setFormValues] = useState({})

    const handleFormChange = (e) => {
        setFormValues({ ...formValues, [e.target?.name]: e.target?.value })
    }

    const onNext = () => {
        if (formValues["firstName"] && formValues["lastName"] && formValues["businessName"] && formValues["phoneNumber"] && formValues["streetAddress"] && formValues["email"]) {
            history.push('/cuisine')
        }
    }

    console.log("formValues", formValues)

    return (
        <Box>
            <div style={{ marginTop: "100px" }}>
                <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Tell us a little more about you.</h1>
                <h2 style={{ fontWeight: "bold" }}>Your Business</h2>
                <div className="p-fluid">
                    <div className="p-field">
                        <label className="input-label" htmlFor="businessName">Business Name</label>
                        <InputText onChange={handleFormChange} name="businessName" id="businessName" type="text" />
                    </div>
                    <div className="p-field">
                        <label className="input-label" htmlFor="streetAddress">Street Address</label>
                        <InputText onChange={handleFormChange} name="streetAddress" id="streetAddress" type="text" />
                    </div>
                    <h2 style={{ fontWeight: "bold" }}>Your information</h2>
                    <div className="p-field">
                        <label className="input-label" htmlFor="email">Email</label>
                        <InputText onChange={handleFormChange} name="email" id="email" type="text" />
                    </div>
                </div>
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-6">
                        <label className="input-label" htmlFor="firstName">Firstname</label>
                        <InputText onChange={handleFormChange} name="firstName" id="firstname6" type="text" />
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label className="input-label" htmlFor="lastName">Lastname</label>
                        <InputText onChange={handleFormChange} name="lastName" id="lastname6" type="text" />
                    </div>
                </div>
                <div className="p-fluid">
                    <div className="p-field">
                        <label className="input-label" htmlFor="firstname2">Phone Number</label>
                        <InputText onChange={handleFormChange} name="phoneNumber" id="firstname2" type="text" />
                    </div>
                </div>
                <div style={{ textAlign: 'center' }} >
                    <Button onClick={onNext} style={{ paddingRight: "30px", paddingLeft: "30px" }} label="Next" />
                </div>
                <div style={{ textAlign: 'center', marginTop: "20px" }}>
                    Need more info?<a href="">Set up a phone call</a>
                </div>
            </div>
        </Box>

    )
}

export default Info