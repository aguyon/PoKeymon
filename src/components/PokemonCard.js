import React, { Component } from 'react';
import styled from 'styled-components';

import pokeball from '../media/pokeball.png';

const Sprite = styled.img`
    width: 5em !important;
    height: 5em;
    display: none;
`;

class PokemonCard extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      imageUrl: '',
      /* pokemonIndex: '', */
      imageLoading: true,
      toManyRequests: false,
    };
  }

  componentDidMount() {
    const { name, url } = this.props;
    const pokemonIndex = url.split('/')[url.split('/').length - 2];
    const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

    this.setState({ name, imageUrl /* pokemonIndex */ });
  }

  render() {
    const {
      name,
      /* pokemonIndex, */
      imageUrl,
      imageLoading,
      toManyRequests,
    } = this.state;
    return (
      <div className="col-md-3 col-sm-6 mb-3">
        <div className="card">
          {/* <h5 className="card-header">{pokemonIndex}</h5> */}
          {imageLoading ? (
            <img
              src={pokeball}
              alt=""
              className="card-img rounded mx-auto mt-2"
              style={{ width: '5em', height: '5em', opacity: '0.7' }}
            />
          ) : null}
          <Sprite
            className="card-img-top rounded mx-auto mt-2"
            onLoad={() => this.setState({ imageLoading: false })}
            onError={() => this.setState({ toManyRequests: true })}
            src={imageUrl}
            style={
                // eslint-disable-next-line no-nested-ternary
                toManyRequests
                  ? { display: 'none' }
                  : imageLoading
                    ? null
                    : { display: 'block' }
            }
          />
          {toManyRequests ? (
            <h6 className="mx-auto">
              <span className="badge badge-danger mt-2">To Many Requests</span>
            </h6>
          ) : null}
          <div className="card-body mx-auto">
            <h6 className="card-title">
              {name
                .toLowerCase()
                .split(' ')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
            </h6>
          </div>
        </div>
      </div>
    );
  }
}

export default PokemonCard;
