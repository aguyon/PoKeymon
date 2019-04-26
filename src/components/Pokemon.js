import React, { Component } from 'react';
import Axios from 'axios';
import { Button } from 'reactstrap';
import { Redirect } from 'react-router-dom';

const TYPE_COLORS = {
  bug: 'B1C12E',
  dark: '4F3A2D',
  dragon: '755EDF',
  electric: 'FCBC17',
  fairy: 'F4B1F4',
  fighting: '823551D',
  fire: 'E73B0C',
  flying: 'A3B3F7',
  ghost: '6060B2',
  grass: '74C236',
  ground: 'D3B357',
  ice: 'A3E7FD',
  normal: 'C8C4BC',
  poison: '934594',
  psychic: 'ED4882',
  rock: 'B9A156',
  steel: 'B5B5C3',
  water: '3295F6',
};

export default class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      imageUrl: '',
      statTitleWidth: 3,
      statBarWidth: 9,
      stats: {
        hp: '',
        attack: '',
        defense: '',
        speed: '',
      },
      themeColor: '#EF5350',
      redirect: false,
    };
  }

  async componentDidMount() {
    const { match } = this.props;
    const { pokemonIndex } = match.params;

    // Urls for pokemon information
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonIndex}/`;

    // Get Pokemon Information
    const pokemonRes = await Axios.get(pokemonUrl);

    // eslint-disable-next-line prefer-destructuring
    const name = pokemonRes.data.name;
    const imageUrl = pokemonRes.data.sprites.front_default;

    let {
      hp, attack, defense, speed,
    } = '';

    // eslint-disable-next-line array-callback-return
    pokemonRes.data.stats.map((stat) => {
      switch (stat.stat.name) {
        case 'hp':
          hp = stat.base_stat;
          break;
        case 'attack':
          attack = stat.base_stat;
          break;
        case 'defense':
          defense = stat.base_stat;
          break;
        case 'speed':
          speed = stat.base_stat;
          break;
        default:
          break;
      }
    });

    // eslint-disable-next-line max-len
    const types = pokemonRes.data.types.map(type => type.type.name);

    const themeColor = `${TYPE_COLORS[types[types.length - 1]]}`;

    this.setState({
      imageUrl,
      name,
      stats: {
        hp,
        attack,
        defense,
        speed,
      },
      themeColor,
    });
  }

  setRedirect = () => {
    this.setState({
      redirect: true,
    });
  }

  // eslint-disable-next-line consistent-return
  renderRedirect = () => {
    const { redirect } = this.state;
    if (redirect) {
      return <Redirect to="/" />;
    }
  }

  render() {
    const {
      imageUrl,
      name,
      statTitleWidth,
      statBarWidth,
      stats,
      themeColor,
    } = this.state;
    return (
      <div className="col customCol">
        <div className="btnRedirect">
          {this.renderRedirect()}
          <Button color="danger" size="lg" type="button" onClick={this.setRedirect}>Back to Pokedex</Button>
        </div>
        <div className="card">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col-md-12">
                <h1 className="namePokemon">
                  {name
                    .toLowerCase()
                    .split(' ')
                    .map(s => s.charAt(0).toUpperCase() + s.substring(1))
                    .join(' ')}
                </h1>
              </div>
              <div className="col-md-3">
                <img
                  src={imageUrl}
                  className="card-img-top rounded mx-auto mt-2 imgPokemon"
                  alt=""
                />
              </div>
              <div className="col-md-9">
                <div className="row align-items-center customStats">
                  <div className={`col-12 col-md-${statTitleWidth}`}>
                    HP
                  </div>
                  <div className={`col-12 col-md-${statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${stats.hp}%`,
                          backgroundColor: `#${themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{stats.hp}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center customStats">
                  <div className={`col-12 col-md-${statTitleWidth}`}>
                    Attack
                  </div>
                  <div className={`col-12 col-md-${statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${stats.attack}%`,
                          backgroundColor: `#${themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{stats.attack}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center customStats">
                  <div className={`col-12 col-md-${statTitleWidth}`}>
                    Defense
                  </div>
                  <div className={`col-12 col-md-${statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar "
                        role="progressbar"
                        style={{
                          width: `${stats.defense}%`,
                          backgroundColor: `#${themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{stats.defense}</small>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row align-items-center customStats">
                  <div className={`col-12 col-md-${statTitleWidth}`}>
                    Speed
                  </div>
                  <div className={`col-12 col-md-${statBarWidth}`}>
                    <div className="progress">
                      <div
                        className="progress-bar"
                        role="progressbar"
                        style={{
                          width: `${stats.speed}%`,
                          backgroundColor: `#${themeColor}`,
                        }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      >
                        <small>{stats.speed}</small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
