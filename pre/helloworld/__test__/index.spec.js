test('test hello world', ()=>{
    const helloWorld = require('../index')
    expect(helloWorld)
        .toBe('Hello World2')
})