import React from 'react';
import {Link} from 'react-router-dom';

export default function Features() {
  return (
    <section id="features">
      <div className="container flex-list icons" link="/topdesign">
        <Category id="topdesign" name="Top Design" link="/topdesign">
          Stelle in unserem monatlichen Wettbewerb deine Design Skills unter Beweis und staube tolle Preise ab!
        </Category>
        <Category id="levels" name="Leaderboard" link="/levels">
          Für jede Nachricht, die du auf unserem Discord schreibst, kriegst du XP. Durch diese kannst du in unserem Levelsystem aufsteigen und dir einen guten Platz im Ranking ergattern.
        </Category>
        <Category id="night" name="Spam, @everyone und Memes">
          Wir haben eine sehr aktive und kontaktfreudige (tolles Wort oder) Community, mit der man auch mal einfach so Zeit verbringen kann. Ob Tag oder Nacht, auf unserem Discord ist fast immer
          jemand anzufinden.
        </Category>
      </div>
    </section>
  );
}

export function Category(props) {
  let name = <h3>{props.name}</h3>;
  if (props.link) {
    name = (
      <Link to={props.link}>
        <h3>{props.name}</h3>
      </Link>
    );
  }
  return (
    <div className="item">
      <div className={`icon ${props.id}`} />
      {name}
      <p>{props.children}</p>
    </div>
  );
}
