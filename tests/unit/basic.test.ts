import {VERSION} from "../../src";

describe(`Basic test`, function(){

    it(`Instantiates`, function(){
       expect(VERSION).toBeDefined();
    });

});