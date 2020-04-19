const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=c569f5740fdd2d95413c86a5de3a7cc8&query=' + latitude + ',' + longitude +'&units=m'

    request( { url, json: true}, (error, { body }) => {
        if(error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        } else {            
            callback( undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.' )
        }
    })
}

module.exports = forecast