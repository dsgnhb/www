import React, {Component} from 'react';
import SectionTitle from '../../../general/misc/titles/SectionTitle';
import FontItem from './FontItem';

export default class Fonts extends Component {
    render() {
        return (
            <section id="fonts">
                <div className="container">
                    <SectionTitle subtitle="Fonts" title="AaBbCcDd">
                        Die Schriftart "Proxima Nova" wurde für die Verwendung sorgfältig ausgewählt, um ein
                        durchgängiges Erscheinungsbild in allen Online- und Printanwendungen zu gewährleisten.
                    </SectionTitle>
                    <div className="content">
                        <div className="flex-list member">
                            <FontItem id="one" name="Proxima Nova" weight="Extrabold">
                                für große Hauptüberschriften
                            </FontItem>
                            <FontItem id="two" name="Proxima Nova" weight="Bold">
                                für Abschnittstitel, kleiner Überschriften und fette Texte
                            </FontItem>
                            <FontItem id="three" name="Proxima Nova" weight="Medium">
                                für Texte
                            </FontItem>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
