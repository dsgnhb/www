import React from 'react';
import {Headline} from '../../general/misc/Titles';
import DiscordLink from '../../general/misc/DiscordLink';
import TopDesignEntries from "./Entries";

export default function TopDesign() {
    return (
        <div>
            <section id="topdesign">
                <div className="container">
                    <Headline title={getMonth()}>
                        Lorem ipsum dolor sit amet, lukas ist doof.
                    </Headline>
                    <DiscordLink />
                </div>
                <TopDesignEntries />
            </section>
        </div>
    );
}

function getMonth() {
    switch (new Date().getMonth()) {
        case 0:
            return "Januar";
        case 1:
            return "Februar";
        case 2:
            return "März";
        case 3:
            return "April";
        case 4:
            return "Mai";
        case 5:
            return "Juni";
        case 6:
            return "Juli";
        case 7:
            return "August";
        case 8:
            return "September";
        case 9:
            return "Oktober";
        case 10:
            return "November";
        case 11:
            return "Dezember";
        default:
            return "Ähhh Meddl!";
    }
}
