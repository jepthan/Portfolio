import { useTranslation } from "react-i18next"
export default function Contact(props) {

    const { t } = useTranslation()
    return (
        <div className='text-col_text w-11/12 max-w-7xl' name={props.name}>
            
                <h1 className=" text-center text-4xl mb-4">{t('nav_contact')}</h1>
                <p className=" text-center mb-6 text-2xl"> Feel free to Contact me by submitting the form below and I will get back to you as soon as possible </p>
           
            <form className="grid mx-7 text-dark_grey bg-secondary px-6 py-6 rounded-lg">

                <label className="w-full" htmlFor="name">Name</label>
                <input className="px-2 py-3 rounded-lg" type="text" id="name" name="name" placeholder="Enter Your Name.." />


                <label htmlFor="email">Email</label>
                <input className="px-2 py-3 rounded-lg" type="text" id="email" name="email" placeholder="Enter Your Email.." />

                <label htmlFor="Message">Message</label>
                <textarea className="px-2 py-3 rounded-lg h-64" id="Message" name="Message" placeholder="Enter Your Message.." ></textarea>

                <button className="bg-primary text-white px-4 py-2 rounded-lg mt-5 justify-self-end w-60 h-14" type="submit">Submit</button>
            </form>
        </div>
    )
}