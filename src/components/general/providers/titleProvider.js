export default function provideTitle() {
    let webTitle = new Map();
    webTitle.set('/about', 'Über uns');
    webTitle.set('/brand', 'Branding');
    webTitle.set('/contact', 'Kontakt');
    webTitle.set('/donate', 'Unterstütze uns');
    webTitle.set('/imprint', 'Impressum');
    webTitle.set('/levels', 'Leaderboard');
    webTitle.set('/partner', 'Partner');
    webTitle.set('/privacypolicy', 'Datenschutzerklärung');
    webTitle.set('/topdesign', 'TopDesign');
    webTitle.set('/apply', 'Bewerben');
    return webTitle;
}
