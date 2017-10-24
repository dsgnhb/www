import React from 'react';
import {Link} from 'react-router-dom';
import {Headline} from "../general/misc/Titles";

export default function Contact() {
    return (
        <section id="contact">
            <div className="container">
                <Headline subtitle="Kontakt" title="Schreib mir doch mal ;) äh oke">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren.
                </Headline>
                <Link to="/twitter" className="main">Twitter - </Link>
                <Link to="/yt" className="main">YouTube - </Link>
                <Link to="/discord" className="main">Discord - </Link>
                <Link to="/mail" className="main">Mail</Link>
            </div>
        </section>
    );
}
