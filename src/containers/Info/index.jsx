import React from 'react'
import './index.css'
import { InputText } from 'primereact/inputtext';
import { InputNumber } from 'primereact/inputnumber';
import Box from '../../components/Box'
import { Button } from 'primereact/button';

const Info = () => {

    return (
        <Box>

            <div style={{ marginTop: "100px" }}>
                <h1 style={{ fontWeight: "bold", textAlign: "center" }}>Tell us a little more about you.</h1>
                <h2 style={{ fontWeight: "bold" }}>Your Business</h2>
                <div className="p-fluid">
                    <div className="p-field">
                        <label className="input-label" htmlFor="firstname2">Business Name</label>
                        <InputText id="firstname2" type="text" />
                    </div>
                    <div className="p-field">
                        <label className="input-label" htmlFor="lastname2">Street Address</label>
                        <InputText id="lastname2" type="text" />
                    </div>
                    <h2 style={{ fontWeight: "bold" }}>Your information</h2>
                    <div className="p-field">
                        <label className="input-label" htmlFor="lastname2">Email</label>
                        <InputText id="lastname2" type="text" />
                    </div>
                </div>
                <div className="p-fluid p-formgrid p-grid">
                    <div className="p-field p-col-12 p-md-6">
                        <label className="input-label" htmlFor="firstname6">Firstname</label>
                        <InputText id="firstname6" type="text" />
                    </div>
                    <div className="p-field p-col-12 p-md-6">
                        <label className="input-label" htmlFor="lastname6">Lastname</label>
                        <InputText id="lastname6" type="text" />
                    </div>
                </div>
                <div className="p-fluid">
                    <div className="p-field">
                        <label className="input-label" htmlFor="firstname2">Phone Number</label>
                        <InputNumber id="firstname2" type="text" />
                    </div>
                </div>
                <div style={{ textAlign: 'center' }} >
                    <Button style={{ paddingRight: "30px", paddingLeft: "30px" }} label="Next" />
                </div>
                <div style={{ textAlign: 'center', marginTop: "20px" }}>
                    Need more info?<a href="">Set up a phone call</a>
                </div>
            </div>
        </Box>

    )
}

export default Info