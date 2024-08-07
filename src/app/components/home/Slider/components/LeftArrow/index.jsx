import React from 'react'
import { StyledLeftArrowContainer } from './styles'
// import './styles.css'

function LeftArrow(props) {
  const { className, onClick, arrowColor, category } = props
  return (
    <StyledLeftArrowContainer
      data-product-category={category}
    >
      <div hidden={className.includes('slick-disabled')}>
        <div className={`left-arrow__circle ${className}`} onClick={onClick}>
          <svg fill="#ffffff" height="64px" width="64px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330 330" >
            <path id="XMLID_6_" d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M205.606,234.394
	c5.858,5.857,5.858,15.355,0,21.213C202.678,258.535,198.839,260,195,260s-7.678-1.464-10.606-4.394l-80-79.998
	c-2.813-2.813-4.394-6.628-4.394-10.606c0-3.978,1.58-7.794,4.394-10.607l80-80.002c5.857-5.858,15.355-5.858,21.213,0
	c5.858,5.857,5.858,15.355,0,21.213l-69.393,69.396L205.606,234.394z"/>
          </svg>
        </div>
      </div>
    </StyledLeftArrowContainer>
  )
}

export default LeftArrow
