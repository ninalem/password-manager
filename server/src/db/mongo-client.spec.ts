import * as mongoClient from './mongo-client'

import mongoose from '../../__mocks__/mongoose'
import { mongoUri, mongoOptions } from './mongo-client'

describe('Mongo client', () => {
  it('should call mongoose.connect once with appropriate arguments', async () => {
    await mongoClient.getConnection()
    expect(mongoose.connect).toHaveBeenCalledTimes(1)
    expect(mongoose.connect.mock.calls[0]).toEqual([mongoUri, mongoOptions])
  })

  it('should call mongoose disconccet once', async () => {
    await mongoClient.closeConnections()
    expect(mongoose.disconnect).toHaveBeenCalledTimes(1)
  })
})
