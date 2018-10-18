import css from 'styled-jsx/css';

import { fonts } from '../../../../tokens';

export default css`
  .toolbar {
    color: black;
    display: none;
    flex-direction: row;
    font-family: ${fonts.inter.family};
    font-size: 0.75rem;
    font-weight: ${fonts.inter.weight.black};
    justify-content: flex-end;
    left: 0;
    padding: 0.25rem 1.5rem;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: 100;
  }

  .toolbar--is-visible {
    display: flex;
  }

  .block-label {
    margin-right: 1rem;
  }

  .button {
    align-items: center;
    background: transparent;
    border: none;
    color: black;
    cursor: pointer;
    display: flex;
    font-family: ${fonts.inter.family};
    font-size: 0.8rem;
    font-weight: ${fonts.inter.weight.medium};
    margin-left: 0.5rem;
    padding: 0;
  }

  :global(.toolbar .button svg) {
    height: 0.8rem;
    margin-right: 0.35rem;
    width: 0.8rem;
  }

  :global(.toolbar .button svg path) {
    fill: #7d7d7d;
  }

  .button:hover,
  .button:focus {
    text-decoration: underline;
  }
`;
