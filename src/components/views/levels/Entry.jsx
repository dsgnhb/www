import React from 'react';
import defaultAvatar from '../../../files/img/defaultAvatar.jpg';

export default class LevelEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      avatar: this.props.avatar
    };

    this.handleError = this.handleError.bind(this);
  }

  handleError() {
    this.setState({
      avatar: defaultAvatar
    });
  }

  render() {
    let username = this.props.username;
    if (username.length > 14) {
      username = username.slice(0, 12) + '...';
    }
    username += ' ';

    let level = xpToLevel(this.props.xp);
    let xpProgress = this.props.xp;
    for (let lvl = 0; lvl < level; lvl++) {
      xpProgress -= xpForLevel(lvl);
    }

    return (
      <div className="row">
        <div className="item id">
          <h3>{this.props.rank}</h3>
        </div>
        <div className="item pp">
          <img src={this.state.avatar} alt={`Avatar from ${this.props.username}`} onError={this.handleError} />
        </div>
        <div className="item username">
          <h3>
            {username}
            <span>{this.props.discriminator}</span>
          </h3>
        </div>
        <div className="item stats">
          <p>
            <b>Level {level}</b>
            <br />
            <b>
              {xpProgress}/{xpForLevel(level)} XP
            </b>
            <em>({this.props.xp} XP)</em>
            <br />
            <b>{this.props.chests} Chests</b>
          </p>
        </div>
      </div>
    );
  }
}

function xpForLevel(level) {
  return 5 * (level ^ 2) + 50 * level + 100;
}

function xpToLevel(xp) {
  let level = 0;

  for (let levelXP = xpForLevel(0); xp > levelXP; levelXP = xpForLevel(level)) {
    xp -= levelXP;
    level++;
  }

  return level;
}
