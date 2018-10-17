const { defaults } = require('jest-config')

module.exports = {
  moduleNameMapper: {
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": "<rootDir>/test/__mocks__/fileMock.js",
    "\\.(css|less|scss)$": "identity-obj-proxy"
  },
  moduleFileExtensions: [ ...defaults.moduleFileExtensions, 'js', 'jsx' ],
  testPathIgnorePatterns: [
    '<rootDir>/node_modules'
  ]
}
