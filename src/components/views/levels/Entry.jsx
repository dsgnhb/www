import React from 'react';

export default class LevelEntry extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            avatar: this.props.avatar
        };
    }

    render() {
        let username = this.props.username;
        if (username.length > 14) {
            username = username.slice(0, 12) + "...";
        }
        username += " ";

        let level = xpToLevel(this.props.xp);
        let xpProgress = this.props.xp;
        for (let lvl = 0; lvl < level; lvl++) {
            xpProgress -= xpForLevel(lvl);
        }

        let place;

        switch (this.props.rank) {
            case 1:
                place = "color one";
                break;
            case 2:
                place = "color two";
                break;
            case 3:
                place = "color three";
                break;
            default:
                place = "";
        }

        return (
            <div className={`item ${place}`}>
                <h3>#{this.props.rank} {username}</h3>
                <p>
                    <b>Level {level}</b>
                    <br />
                    <b>{xpProgress}/{xpForLevel(level)} XP</b>
                    {this.props.xp}
                    <br />
                    <b>{this.props.chests} Chests</b>
                </p>
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
