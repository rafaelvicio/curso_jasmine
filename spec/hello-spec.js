var hello = require('../hello');
describe('Hello', function(){
    it('has to print "Hello World!" ', function(){
        var texto = hello();
        expect(texto).toEual('Hello Word!');
    })
})