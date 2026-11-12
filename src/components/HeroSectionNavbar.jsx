import React from 'react'
import { ChevronRight } from "lucide-react";

const HeroSectionNavbar = ({text, blueText}) => {
  return (
        <nav className="phoneSectionNav">
            <p className="deal">
              {text} <span className="phone">{blueText}</span>
            </p>
            <button className="viewBtn">
              View All
              <ChevronRight className="viewBtnSign icons" />
            </button>
          </nav>
  )
}

export default HeroSectionNavbar