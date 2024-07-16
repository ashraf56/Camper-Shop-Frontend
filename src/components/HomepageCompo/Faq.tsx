import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const faqData = [
    {
        value: "product-1",
        question: "What types of products do you offer?",
        answer: "We offer a wide range of camping gear, including tents, sleeping bags, backpacks, cooking equipment, clothing, and more."
    },
    {
        value: "shipping-1",
        question: "What are your shipping options?",
        answer: "We offer standard, expedited, and overnight shipping options. You can select your preferred shipping method at checkout."
    },
    {
        value: "shipping-2",
        question: "How long will it take for my order to arrive?",
        answer: "Standard shipping typically takes 5-7 business days, while expedited and overnight shipping options are faster. Shipping times may vary based on your location and product availability."
    },
    {
        value: "return-1",
        question: "What is your return policy?",
        answer: "We offer a 30-day return policy for most items. If you are not satisfied with your purchase, you can return it for a refund or exchange. Some exclusions apply."
    },
    {
        value: "general-2",
        question: "Do you have a physical store?",
        answer: "Currently, we are an online-only store, providing a comprehensive shopping experience through our website."
    }
];



export const Faq = () => {
    return (
        <div className="py-7">
            <h1 className="text-center font-CustomFont text-3xl py-2 font-bold">FAQ</h1>

            <Accordion type="single" collapsible className="w-ful max-w-2xl mx-auto font-CustomFont">
                {
                    faqData.map(fq => (
                        <AccordionItem value={fq.value} key={fq.value}>
                            <AccordionTrigger>{fq.question}</AccordionTrigger>
                            <AccordionContent>
                                {fq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))
                }
            </Accordion>
        </div>
    )
}
