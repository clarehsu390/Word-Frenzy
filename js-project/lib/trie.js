class TrieNode {
  constructor(char) {
    this.char = char;
    this.isWord = false;
    this.children = {};
  }

  addChild(node) {
    this.children[node.char] = node;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode('');
  }

  add(word) {
    let currentNode = this.root;

    for(let i=0; i < word.length; i++) {
      let char = word[i];
      if(currentNode.children[char]) {
        currentNode = currentNode.children[char];
      }
      else {
        let newNode = new TrieNode(char);
        currentNode.addChild(newNode);
        currentNode = newNode;
      }
    }
    //full word!
    currentNode.isWord = true;
  }

  contains(word) {
    let currentNode = this.root;
    //check to see if character node exists in children
    for(let i=0; i < word.length; i++) {
      let char = word[i];
      if (currentNode.children[char]){
        //next depth of the trie
        currentNode = currentNode.children[char];
      }
      else {
        //not a valid word
        return false;
      }
    }
    return currentNode.isWord;


  }

}

module.exports = Trie;
