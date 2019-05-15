import React, { Component } from 'react';
import styled from 'styled-components';

import pokeball from '../media/pokeball.png';

const pokemonsImg = require.context('../media/PokemonACapturer');

const Sprite = styled.img`
  width: 5em;
  height: 5em;
  display: none;
`;

const Card = styled.div`
  opacity: 0.95;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  &:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
  -moz-user-select: none;
  -website-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -o-user-select: none;
`;

export default class PokemonCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageLoading: true,
    };
  }

  componentDidMount() {
    const { name } = this.props;

    this.setState({ name });
  }

  render() {
    const { style } = this.props;
    const {
      name,
      imageLoading,
    } = this.state;

    return (
      <div className="col-md-3 col-sm-6 mb-5" style={style}>
        <Card className="card">
          {/* <h5 className="card-header">{pokemonIndex}</h5> */}
          {imageLoading ? (
            <img
              src={pokeball}
              style={{ width: '5em', height: '5em' }}
              className="poke card-img-top rounded mx-auto d-block mt-2"
              alt=""
            />
          ) : null}
          <Sprite
            className="card-img-top rounded mx-auto imgPokedex"
            src={pokemonsImg(pokemonsImg.keys().find(img => img.indexOf(name) >= 0))}
            onLoad={() => this.setState({ imageLoading: false })}
            style={imageLoading ? null : { display: 'block' }}
          />
          <div className="card-body mx-auto">
            <h6 className="card-title">
              {name
                .toLowerCase()
                .split(' ')
                .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                .join(' ')}
            </h6>
          </div>
        </Card>
      </div>
    );
  }
}
