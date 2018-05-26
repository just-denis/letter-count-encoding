describe("Checking letters count encoding", function() {
    it("should replace repeated letters with a counter within a string", function() {
        expect(getLetterCountEncode("Hello, world!!!")).toEqual("Hel2o, world!3");
    });

    it("checking an empty string", function() {
        expect(getLetterCountEncode("")).toEqual("");
    });

    it("checking an improbable outcome", function() {
        expect(getLetterCountEncode("Tweek me, pleeeese!!!")).not.toEqual("Twe2k me, ple4se!");
    });
  });

 