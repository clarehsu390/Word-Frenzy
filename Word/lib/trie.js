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

    for(let i=0; i < word; i++) {
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
    currentNode.isValidWord = true;
  }

  isValidWord(word) {
    let currentNode = this.root;
    for(let i=0; i < word; i++) {
      let char = word[i];
      if (currentNode.children[char]){
        currentNode = currentNode.children[char];
      }
      else {
        return false;
      }
    }
    return currentNode.isValidWord;


  }

}

module.exports = Trie;
