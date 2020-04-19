const request = require('request')

const geocode = (address, callback) => {
    const url = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=pk.eyJ1IjoiYW5kZXNyaW5pdmFzIiwiYSI6ImNrOHpyN3p0ZDA2OXMzbW1qb2VxdTBjdWkifQ.meUnVd3Yb88CoUTz6sBCpQ&limit=1'

    request( { url, json: true}, (error, { body }) => {
        if (error) {
            callback('Unable to connect to Map service!', undefined)
        } else if (body.features.length === 0) {
            callback('Unable to find location. Try again with different search criteria.', undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode