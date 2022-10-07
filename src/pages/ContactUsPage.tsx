import * as React from 'react';
import ContactThumbImage from "../assets/contactthumb.png"

interface Props {

}

const ContactUsPage: React.FC<Props> = ({ }) => {
    return (
        <div className='px-[10%] my-12 custom:my-20 text-xl font-light grid grid-cols-5 gap-20'>
            <div className="flex flex-col gap-4 col-span-2">
                <span className="font-semibold text-4xl sm:text-6xl md:text-7xl sm:mb-5">Contact Us</span>
                <span>If you have questions or feedback about an order, here's how to get in touch.</span>
                <span>Our working hours is 10am-6pm Monday through Friday. Please allow 1-3 business days to receive a response 🌿</span>
                <span className="mb-4"><strong>You can email us at:</strong> support@alissagarden.com or by filling out the contact form below.</span>
                <input className="rounded-lg shadow-lg px-4 py-2" placeholder='Your full name' required type="text" />
                <input className="rounded-lg shadow-lg px-4 py-2" placeholder='Your email' required type="email"></input>
                <input className="rounded-lg shadow-lg px-4 py-2" placeholder='Your order number (optional)' />
                <textarea className="rounded-lg shadow-lg px-4 py-2 min-h-[150px]" placeholder='Your message' required />
            </div>
            <img src={ContactThumbImage} className="ContactPageThumb col-span-3 rounded-2xl" alt=""/>
        </div>
    )
}

export default ContactUsPage