export default function provideRedirect() {
    let redirect = new Map();
    redirect.set('/discord', 'https://discordapp.com/invite/PGv5TR3');
    redirect.set('/github', 'https://github.com/dsgnhb');
    redirect.set('/mail', 'mailto:info@dsgnhb.de');
    redirect.set('/music', 'http://46.228.192.55:8087');
    redirect.set('/patreon', 'https://www.patreon.com/designhub');
    redirect.set('/paypal', 'https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=H6JB49DXTDP3Q');
    redirect.set('/presskit', 'https://dl.dsgnhb.de');
    redirect.set('/rc', 'https://www.dropbox.com/sh/ecq8lku300b63ir/AABxOnsQoEg1SP26klmHEBsva?dl=0');
    redirect.set('/shorttech', 'http://shorttech.de/?ref=designhub');
    redirect.set('/signaltransmitter', 'https://signaltransmitter.de/ref/234ra69r31584c44');
    redirect.set('/smashfm', 'https://www.smashFM.de/?ref=designhub');
    redirect.set('/twitter', 'https://twitter.com/dsgnhb');
    redirect.set('/twitter-support', 'https://twitter.com/messages/compose?recipient_id=2654452573');
    redirect.set('/yt', 'https://www.youtube.com/channel/UC5xEZufXUwoxdixe0QVDrtA');
    return redirect;
}
