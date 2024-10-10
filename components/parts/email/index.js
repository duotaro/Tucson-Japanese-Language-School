import * as React from 'react';

export const EmailTemplate = ({ formData }) => (
    <div>
        <h1 className="text-2xl font-bold">Appointment Confirmation</h1>
        <p><strong>Name:</strong> {formData.name}</p>
        <p><strong>Email:</strong> {formData.email}</p>
        <p><strong>Phone Number:</strong> {formData.phone}</p>
        <p><strong>Date:</strong> {formData.date}</p>
        <p><strong>Time:</strong> {formData.time}</p>
        <p><strong>Service:</strong> {formData.service}</p>
        <p><strong>Message:</strong> {formData.message}</p>
    </div>
);
