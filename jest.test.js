test('hello world', () => {
  expect(2 + 2).toBe(4)
  expect(2 + 2).not.toBe(5)
})

test('test to be true of false', () => {
  expect(1).toBeTruthy()
})

test('test number', () => {
  expect(4).toBeGreaterThan(3)
})

test('test object', () => {
  expect({name: 'kaihang'}).toEqual({name: 'kaihang'})
})