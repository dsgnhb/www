import React from 'react';

export default function LevelEntry(props) {

    let username = props.username;
    if (username.length > 14) {
        username = username.slice(0, 12) + "...";
    }
    username += " ";

    let level = xpToLevel(props.xp);
    let xpProgress = props.xp;
    for (let lvl = 0; lvl < level; lvl++) {
        xpProgress -= xpForLevel(lvl);
    }

    return (
        <div className="row">
            <div className="item id">
                <h3>{props.rank}</h3>
            </div>
            <div className="item pp">
                <img src={props.avatar} alt={`Avatar from ${props.username}`} />
            </div>
            <div className="item username">
                <h3>
                    {username}
                    <span>
                        {props.discriminator}
                    </span>
                </h3>
            </div>
            <div className="item stats">
                <p>
                    <b>Level {level}</b><br />
                    <b>{xpProgress}/{xpForLevel(level)} XP</b>
                    <em>({props.xp} XP)</em><br />
                    <b>{props.chests} Chests</b>
                </p>
            </div>
        </div>
    );
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