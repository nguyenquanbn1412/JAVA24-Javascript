function subString(str) {
    if (str.length > 15) {
        return str.substring(0, 10) + "...";
    } else {
        return str;
    }
}
