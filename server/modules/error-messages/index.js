import boom from 'boom';

export default (code, message) => {
    return boom[code](message).output;
}