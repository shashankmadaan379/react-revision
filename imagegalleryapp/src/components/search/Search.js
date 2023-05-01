import React, { Component } from "react";
import "../../index.css";
import axios from "axios";
import ImageResult from "../imageResult/imageResult";
export default class Search extends Component {
  state = {
    inputText: "",
    apiUrl: "https://pixabay.com/api",
    apiKey: "35941562-0f03e1b6214148eedbdaa29e3",
    images: [],
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value }, async () => {
      await axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.apiKey}&q=${this.state.inputText}&image_type=photo&safesearch=true`
        )
        .then((res) => this.setState({ images: res.data.hits }))
        .catch((err) => console.log(err));
    });
  };
  render() {
    // console.log(this.state.images);
    return (
      <div>
        <input
          style={{
            borderLeftStyle: "hidden",
            borderTopStyle: "hidden",
            borderRightStyle: "hidden",
            borderBottomStyle: "groove",
            outine: "none",
          }}
          type="text"
          className="input-text"
          placeholder="Search images .."
          name="inputText"
          value={this.inputText}
          onChange={this.handleChange}
        />
        {this.state.images.length > 0 ? (
          <ImageResult images={this.state.images} />
        ) : null}
      </div>
    );
  }
}
