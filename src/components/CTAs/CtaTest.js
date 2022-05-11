import React from "react"
import { CtaButton } from "../CtaButton"

export default function CtaTest({
  ctaTitle = "Title",
  ctaSubtitle = "Subtitle",
  textBtn = "Text Button",
}) {
  return (
    <div className="cta gradient">
      <div className="container">
        <div className="cta__container">
          <div className="cta__content">
            <h3>{ctaTitle}</h3>
            <h4>{ctaSubtitle}</h4>
          </div>
          <div className="cta__button">
            <CtaButton
              textBtn={textBtn}
              classBtn={"btn btn-lg btn-light text-uppercase"}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
