export const cutText = (text, maxLength) => {
    if (typeof text === "string" && typeof maxLength === "number" && maxLength >= 1) {
        if (maxLength < text.length) {
            const lastSpaceIndex = text.lastIndexOf(" ", maxLength);
            return lastSpaceIndex === -1 ? "Error" : text.substr(0, lastSpaceIndex) + "...";
        }
        return text;
    }
    return "Error";
};

export const removeHtmlTags = str => str.replace(/<\/?[^>]+(>|$)/g, "");
