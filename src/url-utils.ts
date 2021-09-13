/** 
 * Utility file for sanitizing and manipulating urls
 * 
 * @author Joseph Cauble (josephdc96)
 */


/**
 * Main sanitize function. This method trims whitespace and 
 * passes the url to the protocol and path removal methods if necessary.
 * This results in a URL that the WHOIS XML API can use.
 * 
 * @param url The url string to be sanitized
 * @returns A sanitized url that the API can use
 */
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

/**
 * Strips the protocol (http, https, etc.) from a url
 * 
 * @param url The url to be fixed
 * @returns The url sans protocol
 */
function removeProtocol(url: string): string {
    const colonIndex = url.indexOf('://') + 3;
    url = url.substr(colonIndex, url.length - colonIndex);
    return url;
}

/**
 * Removes any path from the url beyond the FQDN
 * 
 * @param url The url to be fixed
 * @returns The FQDN only
 */
function removePath(url: string): string {
    const slashIndex = url.indexOf('/');
    url = url.substr(0, slashIndex);
    return url;
}

export { sanitizeURL }