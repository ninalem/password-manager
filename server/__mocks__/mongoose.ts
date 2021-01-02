export interface MongooseMock {
  connect: jest.Mock
  disconnect: jest.Mock
}

const mongooseMock: MongooseMock = {
  connect: jest.fn(),
  disconnect: jest.fn(),
}

export default mongooseMock
