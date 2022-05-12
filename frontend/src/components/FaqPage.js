/* eslint-disable */

import React, { useState } from "react";

import "../pages/faq.css";
import faqData from "../datas/faq-data";
import planetfaq from "../assets/planetfaq.png";

/**
 *
 * @returns FAQ content
 */
function FaqPage() {
  const [faqs, setFaqs] = useState(faqData);

  const handleChange = (index) => {
    const newFaqs = [...faqs];
    newFaqs[index].open = !newFaqs[index].open;
    setFaqs(newFaqs);
  };

  return (
    <div>
      <div>
        <div className="engagement_main_dd">
          <h1 className="engagement_h1_dd">
            Foire aux <span>Questions</span>{" "}
          </h1>
          {faqs.map((faq, index) => (
            <div className="actions_main_dd">
              <div className="actions_container_dd">
                <div className="actions_engagementType_dd">{faq.question}</div>
                <div className="actions_div_dd">
                  {faq.open === true ? (
                    <img
                      key={faq.id}
                      src={planetfaq}
                      alt="planet button"
                      role="presentation"
                      onClick={() => handleChange(index)}
                      onKeyPress={() => handleChange(index)}
                      className="actions_engagement_like_button_dd2"
                    />
                  ) : (
                    <img
                      src={planetfaq}
                      alt="planet button"
                      role="presentation"
                      onClick={() => handleChange(index)}
                      onKeyPress={() => handleChange(index)}
                      className="actions_engagement_like_button_dd"
                    />
                  )}
                </div>
              </div>
              <div className="actions_engagementExplanation_dd">
                {faq.open === true
                  ? faq.answer.split("\n").map((e) => (
                      <>
                        {e}
                        <br />
                      </>
                    ))
                  : ``}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FaqPage;
