import React from 'react';
import { useForm } from 'react-hook-form';
import { Button } from '../ui/button';

const ContactForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Voornaam"
                    {...register('voornaam', { required: true })}
                    className="input-class"
                />
                {errors.voornaam && <span className="error-text">Voornaam is required</span>}
            </div>
            <div className="form-group">
                <input
                    type="text"
                    placeholder="Achternaam"
                    {...register('achternaam', { required: true })}
                    className="input-class"
                />
                {errors.achternaam && <span className="error-text">Achternaam is required</span>}
            </div>
            <div className="form-group">
                <input
                    type="email"
                    placeholder="Email"
                    {...register('email', { required: true })}
                    className="input-class"
                />
                {errors.email && <span className="error-text">Email is required</span>}
            </div>
            <Button type="submit" className="bg-red-500 text-white">Verzend</Button>
        </form>
    );
};

export default ContactForm;
