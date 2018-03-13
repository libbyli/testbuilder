/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
/*describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});*/
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  for (var prefix = 51; prefix <= 55; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '11111111111111')).to.equal('MasterCard');
      });
    })(prefix)
  }
 
});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;
  for (var prefix = 644; prefix <= 649; prefix++) {
    (function(prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function() {
        expect(detectNetwork(prefix.toString() + '1111111111111')).to.equal('Discover');
      });
      it('has a prefix of ' + prefix + ' and a length of 19', function() {
        expect(detectNetwork(prefix.toString() + '1111111111111111')).to.equal('Discover');
      });
    })(prefix)
  }
  it('has a prefix of 6011 and a length of 16', function() {
    expect(detectNetwork('6011000000000000')).to.equal('Discover');
  });

  it('has a prefix of 6011 and a length of 19', function() {
    expect(detectNetwork('6011000000000000000')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 16', function() {
    expect(detectNetwork('6500000000000000')).to.equal('Discover');
  });

  it('has a prefix of 65 and a length of 19', function() {
    expect(detectNetwork('6500000000000000000')).to.equal('Discover');
  });
});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;
  for (var length = 10000000; length <= 100000000000000; length = length * 10) {
    (function(length) {
      it('has a prefix of 5018 and a length of 12 through 19', function() {
        expect(detectNetwork('5018' + length.toString())).to.equal('Maestro');
      });
    })(length)
  }
  for (var length = 10000000; length <= 100000000000000; length = length * 10) {
    (function(length) {
      it('has a prefix of 5020 and a length of 12 through 19', function() {
        expect(detectNetwork('5020' + length.toString())).to.equal('Maestro');
      });
    })(length)
  }
  for (var length = 10000000; length <= 100000000000000; length = length * 10) {
    (function(length) {
      it('has a prefix of 5038 and a length of 12 through 19', function() {
        expect(detectNetwork('5038' + length.toString())).to.equal('Maestro');
      });
    })(length)
  }
  for (var length = 10000000; length <= 100000000000000; length = length * 10) {
    (function(length) {
      it('has a prefix of 6304 and a length of 12 through 19', function() {
        expect(detectNetwork('6304' + length.toString())).to.equal('Maestro');
      });
    })(length)
  }
});

describe('should support China UnionPay', function() {
  var expect = chai.expect;
  for (var prefix = 622126; prefix <= 622925; prefix++) {
    for (var length = 1000000000; length <= 1000000000000; length = length * 10) {
      (function(prefix, length) {
        it('has a prefix of ' + prefix + ' and a length of 16 through 19', function() {
          expect(detectNetwork(prefix.toString() + length)).to.equal('China UnionPay');
      });
        it('has a prefix of ' + prefix + ' and a length of 16 through 19', function() {
          expect(detectNetwork(prefix.toString() + length)).to.equal('China UnionPay');
        });
      })(prefix, length)
    }
  }

  for (var prefix2 = 624; prefix2 <= 626; prefix2++) {
    for (var length2 = 1000000000000; length2 <= 1000000000000000; length2 = length2 * 10) {
      (function(prefix2, length2) {
        it('has a prefix of ' + prefix2 + ' and a length of 16 through 19', function() {
          expect(detectNetwork(prefix2.toString() + length2)).to.equal('China UnionPay');
      });
        it('has a prefix of ' + prefix2 + ' and a length of 16 through 19', function() {
          expect(detectNetwork(prefix2.toString() + length2)).to.equal('China UnionPay');
        });
      })(prefix2, length2)
    }
  }

  for (var prefix3 = 6282; prefix3 <= 6288; prefix3++) {
    for (var length3 = 100000000000; length3 <= 100000000000000; length3 = length3 * 10) {
      (function(prefix3, length3) {
        it('has a prefix of ' + prefix3 + ' and a length of 16 through 19', function() {
          expect(detectNetwork(prefix3.toString() + length3)).to.equal('China UnionPay');
      });
        it('has a prefix of ' + prefix3 + ' and a length of 16 through 19', function() {
          expect(detectNetwork(prefix3.toString() + length3)).to.equal('China UnionPay');
        });3
      })(prefix3, length3)
    }
  }
})


describe('should support Switch', function() {
  var expect = chai.expect;
  it('has a prefix of 4903 and a length of 16', function() {
    expect(detectNetwork('4903000000000000')).to.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 18', function() {
    expect(detectNetwork('490300000000000000')).to.equal('Switch');
  });

  it('has a prefix of 4903 and a length of 19', function() {
    expect(detectNetwork('4903000000000000000')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 16', function() {
    expect(detectNetwork('4905000000000000')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 18', function() {
    expect(detectNetwork('490500000000000000')).to.equal('Switch');
  });

  it('has a prefix of 4905 and a length of 19', function() {
    expect(detectNetwork('4905000000000000000')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 16', function() {
    expect(detectNetwork('4911000000000000')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 18', function() {
    expect(detectNetwork('491100000000000000')).to.equal('Switch');
  });

  it('has a prefix of 4911 and a length of 19', function() {
    expect(detectNetwork('4911000000000000000')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 16', function() {
    expect(detectNetwork('4936000000000000')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 18', function() {
    expect(detectNetwork('493600000000000000')).to.equal('Switch');
  });

  it('has a prefix of 4936 and a length of 19', function() {
    expect(detectNetwork('4936000000000000000')).to.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 16', function() {
    expect(detectNetwork('5641820000000000')).to.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 18', function() {
    expect(detectNetwork('564182000000000000')).to.equal('Switch');
  });

  it('has a prefix of 564182 and a length of 19', function() {
    expect(detectNetwork('5641820000000000000')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 16', function() {
    expect(detectNetwork('6331100000000000')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 18', function() {
    expect(detectNetwork('633110000000000000')).to.equal('Switch');
  });

  it('has a prefix of 633110 and a length of 19', function() {
    expect(detectNetwork('6331100000000000000')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 16', function() {
    expect(detectNetwork('6333000000000000')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 18', function() {
    expect(detectNetwork('633300000000000000')).to.equal('Switch');
  });

  it('has a prefix of 6333 and a length of 19', function() {
    expect(detectNetwork('6333000000000000000')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 16', function() {
    expect(detectNetwork('6759000000000000')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 18', function() {
    expect(detectNetwork('675900000000000000')).to.equal('Switch');
  });

  it('has a prefix of 6759 and a length of 19', function() {
    expect(detectNetwork('6759000000000000000')).to.equal('Switch');
  });
})
