import styled from "styled-components"

export const AccordionStyle = styled.div`
  /* Style the accordion section */
  display: flex;
  flex-direction: column;

  &.accordion__section + &.accordion__section {
    margin-top: 16px;
  }

  /* Style the buttons that are used to open and close the accordion panel */
  .accordion {
    background: rgba(113, 70, 104, 0.1);
    border-radius: 4px;
    cursor: pointer;
    padding: 14px 24px;
    display: flex;
    align-items: center;
    border: none;
    outline: none;
    transition: background-color 0.6s ease;
  }

  /* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */
  .accordion:hover,
  .active {
    
  }

  /* Style the accordion chevron icon */
  .accordion__icon {
    margin-left: 8px;
    transition: transform 0.6s ease;
  }

  /* Style to rotate icon when state is active */
  .rotate {
    transform: rotate(180deg);
  }

  /* Style the accordion content panel. Note: hidden by default */
  .accordion__content {
    padding-left: 16px;
    overflow: hidden;
    transition: max-height 0.6s ease;
  }

  /* Style the accordion content text */
  .accordion__item {
    margin-top: 16px;
  }
`

export default AccordionStyle
