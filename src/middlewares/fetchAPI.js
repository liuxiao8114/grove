import { normalize, schema } from 'normalizr'

const userSchema = new schema.Entity('user', {}, {
  idAttribute: user => user.login.toLowerCase()
})

const repoSchema = new schema.Entity('repo', {
  owner: userSchema
}, {
  idAttribute: repo => repo.fullname.toLowerCase()
})

export const Schemas = {
  USER: userSchema,
  REPO: repoSchema
}
