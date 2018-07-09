import React from 'react';
import tableStyle from '../css/tables.css';

const remCalculator = elementName => {
  let pixels;
  try {
    const elem = document.querySelector(elementName);
    pixels = getComputedStyle(elem).getPropertyValue('font-size');
  } catch (e) {
    /* hack around the fact that the elements may not be in the DOM yet
  Create the element, attach it to the DOM, then perform any calculations.
  Finally tidy up, by removing the newly created element
  */
    const elem = document.createElement(elementName);
    document.body.appendChild(elem);
    pixels = getComputedStyle(elem).getPropertyValue('font-size');
    elem.remove();
  }

  const x = parseInt(pixels);
  const y = parseInt(
    getComputedStyle(document.querySelector(':root')).getPropertyValue(
      'font-size',
    ),
  );

  return x / y;
};

// TODO: CreateElement doesn't work
export default () => {
  return (
    <div>
      <h2>Typography</h2>
      <p>
        Roboto is the foundation type family in all POP applications. With a
        wide range of weights, and a large diverse character set, the uniform
        simplicity and legibility over other font families makes ROBOTO a great
        compliment to POP applications
      </p>
      <div>
        <table className={tableStyle.table}>
          <tbody>
            <tr>
              <td>
                <h1>Heading Level 1</h1>
              </td>
              <td>
                <strong>H1</strong> - {remCalculator('h1')}rem , light weight;
              </td>
            </tr>

            <tr>
              <td>
                <h2>Heading Level 2</h2>
              </td>
              <td>
                <strong>H2</strong> - {remCalculator('h2')}rem, regular weight;
              </td>
            </tr>

            <tr>
              <td>
                <h3>Heading Level 3</h3>
              </td>
              <td>
                <strong>H3</strong> - {remCalculator('h3')}rem, bold weight;
              </td>
            </tr>

            <tr>
              <td>
                <h4>Heading Level 4</h4>
              </td>
              <td>
                <strong>H4</strong> - {remCalculator('h4')}rem, bold weight;
              </td>
            </tr>

            <tr>
              <td>
                <h5>Heading Level 5</h5>
              </td>
              <td>
                <strong>H5</strong> - {remCalculator('h5')}rem, bold weight,
                uppercase;
              </td>
            </tr>

            <tr>
              <td>
                <h6>Heading Level 6</h6>
              </td>
              <td>
                <strong>H6</strong> - {remCalculator('h6')}rem, bold weight;
              </td>
            </tr>

            <tr>
              <td>Body</td>
              <td>Standard font size - {remCalculator('body')}rem</td>
            </tr>
            <tr>
              <td>
                <p>Paragraph</p>
              </td>
              <td>
                Standard font size - {remCalculator('p')}rem ({getComputedStyle(
                  document.querySelector('html'),
                ).getPropertyValue('font-size')}) light weight
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};
