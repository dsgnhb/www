import React from 'react';

export default function Features() {
    return (
        <section id="features">
            <div className="container flex-list icons">
                <Category id="topdesign" name="Top Design">
                    Lorem ipsum, lolkas ist kacka, blablabla.
                </Category>
                <Category id="levels" name="Leaderboard">
                    Lorem ipsum, lolkas ist kacka, blablabla.
                </Category>
                <Category id="night" name="Spam, @everyone und Memes">
                    Lorem ipsum, lolkas ist kacka, blablabla.
                </Category>
            </div>
        </section>
    );
}

export function Category(props) {
    return (
        <div className="item">
            <div className={`icon ${props.id}`} />
            <h3>{props.name}</h3>
            <p>{props.children}</p>
        </div>
    );
}
