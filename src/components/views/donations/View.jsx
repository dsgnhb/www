import React from 'react';
import {Headline} from '../../general/misc/Titles';
import LastDonations from './sections/LastDonations';

export default function Donations() {
    return (
        <div>
            <Headline
                title="Danke."
                subtitle="Donations"
            >
                Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
                ea rebum. Stet clita kasd gubergren.
            </Headline>
            <LastDonations />
        </div>
    );
}
