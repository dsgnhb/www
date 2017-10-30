import React from 'react';
import {MainTitle, SectionTitle} from '../general/misc/Titles';

export default function Partner() {
  return (
    <div>
      <section id="partner">
        <div className="container">
          <MainTitle title="Danke." subtitle="Partner" link="/discord" linktitle="Falls Du uns auch unterstützen möchtest, kannst Du das hier tun!">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren.
          </MainTitle>
        </div>
      </section>
      <PartnerInfo name="Signaltransmitter" task="Hosting" link="https://signaltransmitter.de/ref/174ra69rf448594">
        Alle Bots auf unserem Discord werden von den Jungs von Signaltransmitter gehostet.
      </PartnerInfo>
      <PartnerInfo name="ShortTech" task="Redaktionelle Inhalte" link="http://shorttech.de/?ref=designhub">
        Rund um Redaktionelle Inhalte steht uns das Team von ShortTech zur Verfügung.
      </PartnerInfo>
      <PartnerInfo name="smashFM" task="Musik" link="https://www.smashfm.de/?ref=designhub">
        Smash! Egal wann, egal wo! Dort hörst du nicht nur die aktuellsten Lieder, sondern auch Klassiker aus vergangenen Zeiten. Von Charts über Dance bis hin zu Chillout ist bei denen alles dabei.
      </PartnerInfo>
    </div>
  );
}

function PartnerInfo(props) {
  return (
    <section id={props.name.toLowerCase()}>
      <div className="container">
        <SectionTitle subtitle={props.task} title={props.name} link={props.link} linktitle="Hier geht's zur Website">
          {props.children}
        </SectionTitle>
      </div>
    </section>
  );
}
