/* eslint-env mocha */
/* eslint-disable no-unused-expressions*/
/* eslint-disable no-console */

import { Schema, normalize, arrayOf } from 'normalizr'
import expect from 'expect'

describe('normalizr test', () => {
  it('basic usage', () => {
    let writer = new Schema('writers'),
        book = new Schema('books'),
        schema = arrayOf(writer),
        input

    writer.define({
      books: arrayOf(book)
    })

    input =[{
      id: 3,
      name: 'Jo Rowling',
      isBritish: true,
      location: {
        x: 100,
        y: 200,
        nested: ['hello',{
          world: true
        }]
      },
      books: [{
        id: 1,
        name: 'herry potter',
        isAwesome: true
      }]
    }, {
      id: 4,
      name: 'xiao',
      isBritish: false,
      location: {

      },
      books: [{
        id: 2,
        name: 'yuchen',
        isAwesome: true
      }]
    }]

    expect(normalize(input, schema)).toEqual({
      result: [3, 4],
      entities: {
        writers: {
          3: {
            id: 3,
            name: 'Jo Rowling',
            isBritish: true,
            location: {
              x: 100,
              y: 200,
              nested: ['hello',{
                world: true
              }]
            },
            books: [1]
          },
          4: {
            id: 4,
            name: 'xiao',
            isBritish: false,
            location: {

            },
            books: [2]
          }
        },
        books: {
          1: {
            id: 1,
            name: 'herry potter',
            isAwesome: true
          },
          2: {
            id: 2,
            name: 'yuchen',
            isAwesome: true
          }
        }
      }
    })
  })

  it('usage', () => {
    let article = new Schema('articles', { idAttribute: 'slug' })
    let input = {
      slug: 'xiao',
      id: 1,
      title: 'xiao\'s title',
      content: 'The Beginning'
    }

    expect(article.getIdAttribute()).toEqual('slug')
    expect(article.geKey()).toEqual('articles')
    expect(normalize(input, article)).toEqual({
      result: 'xiao',
      entities: {
        articles: {
          'xiao': {
            id: 1,
            title: 'xiao\'s title',
            content: 'The Beginning'
          }
        }
      }
    })
  })

  it('usage', () => {
    let article = new Schema('articles', { idAttribute: 'slug' })
    let options = {
      assignEntity: function (){

      }
    }
  })
})
