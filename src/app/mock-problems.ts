import { Problem } from './data-structure/problem';
export const PROBLEMS: Problem[] = [
  {
    id: 1,
    name: "Two Sum",
    desc: `Given an array of integers, return indices of the two numbers such that they add up to a specific target. 
     You may assume that each input would have exactly one solution, and you may not use the same element twice.`,
    difficulty: "easy"
  },
  {
    id: 2,
    name: "Add Two Numbers",
    desc: `You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.`,
    difficulty: "medium"
  },
  {
    id: 3,
    name: "Longest Substring Without Repeating Characters",
    desc: `Given a string, find the length of the longest substring without repeating characters.`,
    difficulty: "medium"
  },
  {
    id: 4,
    name: "Binary Tree Maximum Path Sum",
    desc: `Given a binary tree, find the maximum path sum.`,
    difficulty: "hard"
  },
  {
    id: 5,
    name: "Trapping Rain Water",
    desc: `Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.`,
    difficulty: "super"
  }
];