import express from "express";
import path from "path";
import fs from "fs";
import AnagramService from "./anagram/anagram.service";

const server = express();

server.get("/:anagram?", (req, res) => { 
    
    let view = fs.readFileSync(path.join(__dirname+'/index.html'), 'utf8');
    let anagramService = new AnagramService();
    let anagram =  req.params.anagram || 'kayak';

    res.send(`
        ${view} 
        <br/>
        <br/>
        [${anagram}] is
        <b>${anagramService.isAnagramOfPalindrome(anagram)?'VALID ':'INVALID'}</b> anagram
        
    `);
});

server.listen(3000, () => {
    console.log(`[SERVER] Running at http://localhost:3000`);
}); 
