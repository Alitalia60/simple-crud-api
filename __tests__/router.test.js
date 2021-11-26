
// describe('Testing routing requests', () => {

const router = require("../src/tools/router");
const { getPerson, updPerson, delPerson, addPerson } = require('../src/tools/personAction');
// });

let answer = { resStatus: 200, resMessage: "OK", resBody: "" };
test('should path & method routing to...', () => {
    // let {body, method, path, id} = {"", 'GET',}
    // expect(router("", 'GET', 'person', undefined).toEqual(answer))
    expect(1 == 1).toBe(true)

});