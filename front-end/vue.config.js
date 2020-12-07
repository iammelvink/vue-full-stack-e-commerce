/**
 * this tricks the front end
 * to think the back end is running 
 * on the same origin
 */
module.exports = {
    devServer: {
        proxy: 'http://localhost:8000',
    },
}