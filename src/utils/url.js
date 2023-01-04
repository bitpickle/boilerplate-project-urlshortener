function isValidHttpUrl(string) {
    let regex = RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);

    return !!string.match(regex);
}

module.exports = { isValidHttpUrl }