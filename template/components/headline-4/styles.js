import css from 'styled-jsx/css';

import { fonts, mq } from '../../tokens';

export default css`
  .h4-container {
    margin-bottom: 1.2rem;
    margin-left: -0.25rem;
    margin-top: 1.5rem;
  }

  @media ${mq.tablet} {
    .h4-container {
      margin-bottom: 1.3rem;
      margin-left: -0.5rem;
      margin-top: 2.8rem;
    }
  }

  .h4 {
    background-color: black;
    box-decoration-break: clone;
    color: white;
    display: inline;
    font-family: ${fonts.sansSerif.family};
    font-size: 1.25rem;
    font-weight: ${fonts.sansSerif.weight.bold};
    hyphens: auto;
    letter-spacing: 1px;
    line-height: 1.4;
    margin-bottom: 0;
    margin-top: 0;
    overflow-wrap: break-word;
    padding: 0.1rem 0.25rem;
    word-wrap: break-word;
  }

  @media ${mq.tablet} {
    .h4 {
      font-size: 1.45rem;
      line-height: 1.25;
      padding: 0.15rem 0.5rem;
    }
  }
`;
