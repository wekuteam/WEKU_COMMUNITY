'use strict';
 

    }

    return result;
}

/**
 * Makes first char of string capitalize
 * @param {string} inputString
 * @returns {string}
 */
function ucfirst(inputString) {
    return inputString[0].toUpperCase() + inputString.slice(1);
}

module.exports = {
    isArrayContainsProperty: isArrayContainsProperty
    , ucfirst: ucfirst
};
