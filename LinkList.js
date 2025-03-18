// LinkedList.js

// 1. Node Creation
function createNode(value) {
  return { value, next: null };
}

// 2. List Operations

// Append to end of list
function append(head, value) {
  const newNode = createNode(value);
  if (!head) return newNode;

  let current = head;
  while (current.next) current = current.next;
  current.next = newNode;
  return head;
}

// Prepend to start of list
function prepend(head, value) {
  const newNode = createNode(value);
  newNode.next = head;
  return newNode;
}

// Delete first occurrence of value
function deleteNode(head, target) {
  if (!head) return null;
  if (head.value === target) return head.next;

  let current = head;
  while (current.next) {
    if (current.next.value === target) {
      current.next = current.next.next;
      return head;
    }
    current = current.next;
  }
  return head;
}

// Print all values
function traverse(head) {
  let current = head;
  const values = [];
  while (current) {
    values.push(current.value);
    current = current.next;
  }
  console.log(values.join(' -> '));
}

// Check if value exists
function search(head, target) {
  let current = head;
  while (current) {
    if (current.value === target) return true;
    current = current.next;
  }
  return false;
}

// Reverse the list
function reverseList(head) {
  let prev = null;
  let current = head;
  while (current) {
    const next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
}

// Example Usage
function main() {
  let head = null;

  console.log("Creating list:");
  head = append(head, 10);
  head = append(head, 20);
  head = append(head, 30);
  traverse(head); // 10 -> 20 -> 30

  console.log("\nPrepending 5:");
  head = prepend(head, 5);
  traverse(head); // 5 -> 10 -> 20 -> 30

  console.log("\nDeleting 20:");
  head = deleteNode(head, 20);
  traverse(head); // 5 -> 10 -> 30

  console.log("\nSearching for 10:");
  console.log(search(head, 10) ? "Found" : "Not found"); // Found

  console.log("\nReversing list:");
  head = reverseList(head);
  traverse(head); // 30 -> 10 -> 5
}

// Run the example
main();


// LinkedList.js

// ... [All previous code remains unchanged] ...

// === Logical Explanations ===

// 1. Node Creation
// - createNode(value): Creates a node object with a value and next pointer (null by default).

// 2. Core Operations
// - append(head, value): 
//   * Traverses to the end of the list (O(n) time).
//   * Adds a new node to the tail.
//   * Returns the original head (unchanged unless list was empty).

// - prepend(head, value):
//   * Creates a new node that points to the old head.
//   * O(1) time (no traversal needed).
//   * Returns the new head.

// - deleteNode(head, target):
//   * Handles edge case: deleting the head.
//   * Traverses the list to find the target node.
//   * Updates pointers to "skip" the deleted node.
//   * Returns the (potentially new) head.

// 3. Utility Functions
// - traverse(head):
//   * Prints values in order using a while loop.
//   * Demonstrates list traversal logic.

// - search(head, target):
//   * Linear search (O(n) time).
//   * Returns boolean indicating presence of value.

// 4. Reverse Operation
// - reverseList(head):
//   * Uses three pointers (prev, current, next).
//   * Iteratively reverses the direction of node links.
//   * Returns the new head (old tail).

// 5. Functional Paradigm Notes:
// - No classes: All functions are stateless and receive the head as input.
// - Immutability: Most operations return a new/modified head rather than mutating in-place.
// - Edge Cases Handled: Empty lists, head/tail operations.

// === Key Concepts ===
// - Linked lists allow O(1) insertions/deletions at head vs. O(n) for arrays.
// - Memory is non-contiguous (unlike arrays), making them flexible for dynamic data.
// - Tradeoff: No random access (must traverse from head to reach nodes).
