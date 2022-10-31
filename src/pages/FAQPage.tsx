import * as React from 'react';
import { Disclosure, Transition } from '@headlessui/react'
import { ChevronRightIcon, ChevronUpIcon } from '@heroicons/react/24/outline';
import { faq } from '../faq';

interface Props {

}

const FAQPage: React.FC<Props> = ({ }) => {
    return (
        <div className="w-full px-[10%] my-12 custom:my-20 text-base sm:text-lg xl:text-xl">
            <span className="font-semibold text-4xl sm:text-6xl md:text-7xl">FAQ - Frequently Asked Question</span>
            <div className="mx-auto w-full font-light mt-12">{faq.map((question) => (
            <Disclosure as="div" className="mt-2 border-b-2">
                {({ open }) => (
                    <>
                        <Disclosure.Button className="flex w-full justify-between rounded-lg py-2 text-left font-medium text-green-900">
                            <span>{question.question}</span>
                            <ChevronUpIcon
                                className={`${open ? 'rotate-180 transform' : ''
                                    } h-5 w-5 text-green-500`}
                            />
                        </Disclosure.Button>
                        <Disclosure.Panel className="pb-2 text-gray-500">
                            {question.answer}
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        ))}</div>
        </div>
    )
}

export default FAQPage
