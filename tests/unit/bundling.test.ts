import {VERSION as v} from "../../src";
import {VERSION} from "../../lib";

describe("Distribution Tests", () => {
    it ("reads lib", () => {
        try {
            const {VERSION} = require("../../lib");
            expect (VERSION).toBeDefined()
        } catch (e) {
            expect(e).toBeUndefined();
        }

    })

    it ("reads JS Bundle", () => {
        try {
            const {VERSION} = require("../../dist/ts-workspace.bundle.min.js");
            expect (VERSION).toBeDefined()
        } catch (e) {
            expect(e).toBeUndefined();
        }
    })
})