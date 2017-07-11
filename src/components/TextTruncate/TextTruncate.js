import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';

import './TextTruncate.scss';

export default class TextTruncate extends Component {

  constructor(props) {
    super(props);
    this.state = {
      truncatedText: this.props.children
    }
  }

  getTruncatedText() {
    const lines = this.props.lines;
    const smallestCharWidth = this.getElementWidth(findDOMNode(this.refs.truncateSmallestChar));
    const largestCharWidth = this.getElementWidth(findDOMNode(this.refs.truncateBiggestChar));
    const charWidth = (largestCharWidth + smallestCharWidth) / 2;
    const wrapperWidth = this.getElementWidth(findDOMNode(this.refs.truncateWrapper));
    const maxChars = this.getMaxChars(charWidth, wrapperWidth);
    console.log("Area: ", charWidth, wrapperWidth, maxChars);
    return this.state.truncatedText.substr(0, maxChars);
  }

  getMaxChars(charWidth, wrapperWidth) {
    const charsPerLine = Math.floor(wrapperWidth / charWidth);
    return (charsPerLine * this.props.lines) - 5;
  }

  getElementWidth(element) {
    const { width } = element.getBoundingClientRect();
    console.log("Rect: ", width);
    return parseInt(Math.ceil(width));
  }

  componentDidMount() {
    const truncatedText = this.getTruncatedText();
    this.setState({
      truncatedText
    });
  }

  render() {
    const styleProps = {
      height: `${this.props.lines * 1.2}em`
    };

    return (
      <div ref="truncateWrapper" className="TextTruncate--wrapper" style = { styleProps }>
        <span className="TextTruncate--wrapper-text">{ this.state.truncatedText }...More</span>
        <span ref="truncateSmallestChar" className="TextTruncate--elem-hidden">i</span>
        <span ref="truncateBiggestChar" className="TextTruncate--elem-hidden">x</span>
      </div>
    );
  }
}
