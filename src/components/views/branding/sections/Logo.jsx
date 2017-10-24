import React from 'react';
import {Link} from 'react-router-dom';
import {SectionTitle} from "../../../general/misc/Titles";

export default function Logo() {
    return (
        <section id="logo">
            <div className="container">
                <SectionTitle id="Logo" title="Unser Logo halt.">
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                    labore et dolore magna aliquyam erat.
                </SectionTitle>
            </div>
            <div className="content">
                <div className="container flex">
                    <div className="logo dark" />
                    <div>
                        <h3>Master Logo</h3>
                        <Link to="/discord" class="main prefix">Download Press Kit</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
