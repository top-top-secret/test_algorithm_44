var test_algorithm_44 = require('../src/test_algorithm_44.js');

describe('Algorithm', function() {
  describe('#apply()', function() {
    it('should result in a hello message', function(done) {
      test_algorithm_44.apply("Jane", function(err, res) {
        if(err) { return done(err); }

        if(res == "Hello Jane") {
          done();
        } else {
          done("Expected 'Hello Jane'. Receieved '" + res + "'.");
        }
      });
    });
  });
});
