import React from 'react'
import Q from './faqquestions'
import './scss/faq.scss'

export default function FAQ() {

const [qData, setQdData] = React.useState(Q)


const frequentlyAskedQuestions = qData.map(data =>{
    
    return(
        <div className="qcard">
            <div className="front">
                <p>{data.question}</p>
            </div>
            <div className="back">
                <p>{data.answer}</p>
            </div>
        </div>
    )
})

    return (
        <div className="faqs">

        <h1 className="ccare-title fq">
            Frequently Asked Questions
        </h1>
           
        <div className="con-90-res">

           <div className="qcard-grid">
               {frequentlyAskedQuestions}
           </div>

        </div>


        </div>
    )
}
