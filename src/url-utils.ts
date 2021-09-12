function sanitizeURL(url: string): string {
    url = url.trim();
    if (url.indexOf('://') > -1) {
        url = removeProtocol(url);
    }
    if (url.indexOf('/') > -1) {
        url = removePath(url);
    }
    return url;
}

function removeProtocol(url: string): string {
    const colonIndex = url.indexOf('://') + 3;
    url = url.substr(colonIndex, url.length - colonIndex);
    return url;
}

function removePath(url: string): string {
    const slashIndex = url.indexOf('/');
    url = url.substr(0, slashIndex);
    return url;
}

export { sanitizeURL }