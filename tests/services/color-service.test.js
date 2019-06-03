const chai = require('chai');
const mocha = require('mocha');
const ColorService = require('../../client/services/color-service');
const {expect} = chai;
const {describe, it} = mocha;
describe('ColorServices', () => {
        it('Should have a searchColors method', () => {
            expect(ColorService).to.have.property('searchColors');
            expect(ColorService.searchColors.to.be.a('function'));
        });
    },
);
