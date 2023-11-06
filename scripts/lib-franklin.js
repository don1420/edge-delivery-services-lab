/**
 * Retrieves the content of metadata tags.
 * @param {string} name The metadata name (or property)
 * @param doc Document object to query for the metadata. Defaults to the window's document
 * @returns {string} The metadata value(s)
 */

export function getMetadata(name, doc = document) {
    const attr = name && name.includes(':') ? 'property' : 'name';
    const meta = [...doc.head.querySelectorAll(`meta[${attr}="${name}"]`)].map((m) => m.content).join(', ');
    return meta || '';
}