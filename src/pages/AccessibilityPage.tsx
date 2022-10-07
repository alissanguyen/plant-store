import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {

}

const AccessibilityPage: React.FC<Props> = ({ }) => {
    return (
        <div className='flex flex-col gap-3 px-[10%] my-12 custom:my-20 font-light'>
            <span className="font-semibold text-4xl sm:text-6xl md:text-7xl sm:mb-5">Accessibility Statement</span>
            <span>October 6th, 2022</span>
            <span>At Alissa's Garden, we firmly believe that the internet should be available and accessible to anyone and are committed to providing a website that is accessible to the broadest possible audience, regardless of ability.</span>
            <span>We are making consistent efforts as a small business to maintain and increase the accessibility of our digital properties to ensure that persons with disabilities have full and equal enjoyment of our online goods, services, facilities, privileges, advantages, and accommodations. </span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Accessibility Contact Information</span>
            <span>We welcome any feedback, questions, or concerns from our visitors on how the accessibility of our digital properties can be improved. You can reach us anytime by emailing your feedback to our email provided on our <Link to="/contactus" className="underline hover:text-emerald-600"><strong>Contact Us</strong></Link> page.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Compliance Status</span>
            <span>To fulfill our mission of making our digital properties accessible to the broadest possible audience, regardless of ability, we aim to adhere as strictly as possible to the World Wide Web Consortium’s (W3C) Web Content Accessibility Guidelines 2.1 (WCAG 2.1) at the AA level. These guidelines explain how to make web content accessible to people with a wide array of disabilities. Complying with those guidelines helps us ensure that the website is accessible to blind people, people with motor impairments, visual impairment, cognitive disabilities, and more.</span>
            <span>This website utilizes various technologies that are meant to make it as accessible as possible at all times. We utilize an accessibility interface that allows persons with specific disabilities to adjust the website’s UI (user interface) and design it to their personal needs.</span>
            <span>Additionally, the website utilizes an AI-based application that runs in the background and optimizes its accessibility level constantly. This application remediates the website’s HTML, adapts its functionality and behavior for screen- readers used by blind users, and for keyboard functions used by individuals with motor impairments.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Screen-reader and keyboard navigation</span>
            <span>Our website implements the ARIA attributes (Accessible Rich Internet Applications) technique, alongside various behavioral changes, to ensure blind users visiting with screen-readers can read, comprehend, and enjoy the website’s functions. As soon as a user with a screen-reader enters your site, they immediately receive a prompt to enter the Screen-Reader Profile so they can browse and operate your site effectively. Here’s how our website covers some of the most important screen-reader requirements:</span>
            <span><strong>Screen-reader optimization:</strong> we run a process that learns the website’s components from top to bottom, to ensure ongoing compliance even when updating the website. In this process, we provide screen-readers with meaningful data using the ARIA set of attributes. For example, we provide accurate form labels; descriptions for actionable icons (social media icons, search icons, cart icons, etc.); validation guidance for form inputs; element roles such as buttons, menus, modal dialogues (pop ups), and others.</span>
            <span>Additionally, the background process scans all of the website’s images. It provides an accurate and meaningful image-object-recognition-based description as an ALT (alternate text) tag for images that are not described. It will also extract texts embedded within the image using an OCR (optical character recognition) technology. To turn on screen-reader adjustments at any time, users need only to press the Alt+1 keyboard combination. Screen- reader users also get automatic announcements to turn the Screen-reader mode on as soon as they enter the website.</span>
            <span>These adjustments are compatible with popular screen readers such as JAWS, NVDA, VoiceOver, and TalkBack.</span>
            <span><strong>Keyboard navigation optimization:</strong> The background process also adjusts the website’s HTML and adds various behaviors using JavaScript code to make the website operable by the keyboard. This includes the ability to navigate the website using the Tab and Shift+Tab keys, operate dropdowns with the arrow keys, close them with Esc, trigger buttons and links using the Enter key, navigate between radio and checkbox elements using the arrow keys, and fill them in with the Spacebar or Enter key.</span>
            <span>Additionally, keyboard users will find content-skip menus available at any time by clicking Alt+2, or as the first element of the site while navigating with the keyboard. The background process also handles triggered popups by moving the keyboard focus towards them as soon as they appear, not allowing the focus to drift outside.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Assistive technology and browser compatibility</span>
            <span>We aim to support as many browsers and assistive technologies as possible, so our users can choose the best fitting tools for them, with as few limitations as possible. Therefore, we have worked very hard to be able to support all major systems that comprise over 95% of the user market share, including Google Chrome, Mozilla Firefox, Apple Safari, Opera and Microsoft Edge, JAWS, and NVDA (screen readers), both for Windows and Mac users.</span>

            {/* SECTION SEPARATED */}
            <span className="font-semibold text-3xl mt-10">Notes, comments, and feedback</span>
            <span>Despite our very best efforts to allow anybody to adjust the website to their needs, there may still be pages or sections that are not fully accessible, are in the process of becoming accessible, or are lacking an adequate technological solution to make them accessible. Still, we are continually improving our accessibility, adding, updating, improving its options and features, and developing and adopting new technologies. All this is meant to reach the optimal level of accessibility following technological advancements. If you wish to contact us, please email us via our email provided on our Contact Page.</span>

            <span className="mt-10">Best,</span>
            <span className="mt-10 italic">Alissa's Garden Team</span>
        </div>
    )
}

export default AccessibilityPage