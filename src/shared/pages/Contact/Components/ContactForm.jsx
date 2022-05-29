// import React, { useRef } from "react";
// import emailjs, { init } from "@emailjs/browser";
import { Form, Input, TextArea, Button, Select } from 'semantic-ui-react'
import './Contact.css';



// const ContactForm = () => {
//     init("user_xxxxxxxxxxxxxxxxxxx");
//   const form = useRef();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     emailjs.sendForm("SERVICE_D", "TEMPLAE_ID", form.current, "USER_ID").then(
//       (result) => {
//         alert("Message Sent Successfully");
//         console.log(result.text);
//       },
//       (error) => {
//         console.log(error.text);
//       }
//     );
//   };

//   return(
//     <div className='ContactForm'>
//   <Form>
//     <Form.Group widths='equal'>
//       <Form.Field
//         id='form-input-control-first-name'
//         control={Input}
//         label='Name'
//         placeholder='Name'
//       />
//        <Form.Field
//         id='form-input-control-cell-number'
//         control={Input}
//         label='Phone Number'
//         placeholder='Phone Number'
//       />
//     </Form.Group>
//     <Form.Field
//       id='form-textarea-control-opinion'
//       control={TextArea}
//       label='Query/Message'
//       placeholder='Message'
//     />
//     <Form.Field
//       id='form-input-control-error-email'
//       control={Input}
//       label='Email'
//       placeholder='joe@schmoe.com'
//       error={{
//         content: 'Please enter a valid email address',
//         pointing: 'below',
//       }}
//     />
//     <Form.Field
//       id='form-button-control-public'
//       control={Button}
//       content='Send Mail'
//     />
//   </Form>
//   </div>)
// }

// export default ContactForm

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_gom7mmn', 'template_qj3kv3h', form.current, 'Yu37AMFwgw0ngGyIZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        // <form ref={form} onSubmit={sendEmail}>
        //   <label>Name</label>
        //   <input type="text" name="user_name" />
        //   <label>Email</label>
        //   <input type="email" name="user_email" />
        //   <label>Message</label>
        //   <textarea name="message" />
        //   <input type="submit" value="Send" />
        // </form>
        <div className='ContactForm'>
        <form ref={form} onSubmit={sendEmail}>
<Form>
            <Form.Field
                id='form-input-control-first-name'
                control={Input}
                label='Name'
                placeholder='Name'
                name="user_name"
            />
            <Form.Field
                id='form-input-control-error-email'
                control={Input}
                label='Email'
                placeholder='joe@schmoe.com'
                name="user_email"
                error={{
                    content: 'Please enter a valid email address',
                    pointing: 'below',
                }} />

            <Form.Field
                id='form-textarea-control-opinion'
                control={TextArea}
                label='Query/Message'
                placeholder='Message'
                name="message"
            />
                      <Form.Field
               id='form-button-control-public'
               control={Button}
               content='Send Mail'

             />
             </Form>
        </form>
</div>

        //    
        //   <Form ref={form} onSubmit={sendEmail}>
        //     <Form.Group widths='equal'>
        //       <Form.Field
        //         id='form-input-control-first-name'
        //         control={Input}
        //         label='Name'
        //         placeholder='Name'
        //         name="user_name"
        //       />
        //     </Form.Group>
        //     <Form.Field
        //       id='form-textarea-control-opinion'
        //       control={TextArea}
        //       label='Query/Message'
        //       placeholder='Message'
        //       name="message"
        //     />
        //     <Form.Field
        //       id='form-input-control-error-email'
        //       control={Input}
        //       label='Email'
        //       placeholder='joe@schmoe.com'
        //       name="user_email"
        //       error={{
        //         content: 'Please enter a valid email address',
        //         pointing: 'below',
        //       }}
        //     />
        //     <Form.Field
        //       id='form-button-control-public'
        //       control={Button}
        //       content='Send Mail'

        //     />
        //   </Form>
        //   </div>
    );
};

export default ContactForm