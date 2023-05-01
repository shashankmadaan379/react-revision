import React, { Component } from "react";
import PropTypes from "prop-types";
import { GridList, GridListTile } from "@material-ui/core";
export default class ImageResult extends Component {
  render() {
    let imageList;
    const { images } = this.props;
    if (images) {
      imageList = (
        <GridList cols={4}>
          {images.map((img) => (
            <GridListTile title={img.tags} key={img.id}>
              <img src={img.largeImageURL} alt="" />
            </GridListTile>
          ))}
        </GridList>
      );
    } else {
    }
    return <div>{imageList}</div>;
  }
}

ImageResult.propTypes = { images: PropTypes.array.isRequired };
