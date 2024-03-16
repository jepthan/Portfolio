import { useTranslation } from "react-i18next"
import { useState } from "react"
import emailjs from "@emailjs/browser"


export default function Contact(props) {

    const [form, setForm] = useState({name: '', email: '', message: ''})

    const [loading, setLoading] = useState(false)

    
    const handlesend = (e) => {
        e.preventDefault();

        setLoading(true);

        emailjs.send('service_kktcd6c', 'template_686j9y8',
        {
            from_name: form.name,
            to_name: 'Jefte Hidalgo',
            from_email: form.email,
            to_email: 'contact@jeftehidalgo.tech',
            message: form.message
        },
        'qNPR6vk3Y11KIwA6j')
            .then(()=>{
                setLoading(false);
                console.log('success')
                setForm({name: '', email: '', message: ''})
                alert('Message Sent, I will get back to you shortly', 'success')

            }, (error) => {
                setLoading(false);
                console.log(error.text)
                alert('An error occured, Please try again', 'error')
            })
        

    }

    const handlechange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
        
    }
    
    

    const { t } = useTranslation()
    return (
        <div className='text-col_text w-11/12 max-w-7xl' name={props.name}>
            
                <h1 className=" text-center text-4xl mb-4">{t('nav_contact')}</h1>
                <p className=" text-center mb-6 text-2xl"> Feel free to Contact me by submitting the form below and I will get back to you as soon as possible </p>
           
            <form className="grid text-dark_grey bg-secondary px-6 py-6 rounded-lg" onChange={handlechange} onSubmit={handlesend}>

                <label className="w-full" htmlFor="name">Name</label>
                <input value={form.name} className="px-2 py-3 rounded-lg" type="text" id="name" name="name" placeholder="Enter Your Name.." />


                <label htmlFor="email">Email</label>
                <input value={form.email} className="px-2 py-3 rounded-lg" type="text" id="email" name="email" placeholder="Enter Your Email.." />

                <label htmlFor="message">Message</label>
                <textarea value={form.message} className="px-2 py-3 rounded-lg h-64" id="Message" name="message" placeholder="Enter Your Message.." ></textarea>

                <button className="bg-primary text-white px-4 py-2 rounded-lg mt-5 justify-self-end w-60 h-14" type="submit">{loading?'Submiting...' : 'Submit'}</button>
            </form>
        </div>
    )
}