 
import AnagramService from "./anagram.service";

describe("Anagram Service", function() {
    
    let anagramService = new AnagramService();
    let anagramsArray = [
        'escolaalocse',
        'es!colaalocse',
        'subinoonibus',
        'testeetset',
        'santanderrednatnas',
        'qualquercoisa',
    ];

    afterAll(function() {
        console.log('anagramsArray tested:',anagramsArray);
    });


    it("should validate anagramsArray to have more than one anagram of palindrome invalid", function() {
        
        let invalidAnagrams = anagramsArray.filter(anagram => !anagramService.isAnagramOfPalindrome(anagram))
        expect(
            invalidAnagrams.length
        ).toBeGreaterThan(1);
    });
     
    it("should not validate anagram with upper case characters", function() {
        
        expect(
            anagramService.isAnagramOfPalindrome('Kaykak')
        ).toBe(0);

    });

    it("should validate anagram only  with  lower case characters ", function() {
        
        expect(
            anagramService.isAnagramOfPalindrome('kayak')
        ).toBe(1);

    });

    it("should not accept characters out of range a-z", function() {
        
        expect(
            anagramService.isAnagramOfPalindrome('escola2alocse')
        ).toBe(0);
        
    });

});