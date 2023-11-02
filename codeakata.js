// Creating & selecting Database

use("Zen_Class_Programme");

// Creating collections for Zen_Class_Programme

db.createCollection("codekata");

// Creating Documents for codeKata

db.codekata.insertMany([
    {
        userId: 1,
        problemsSolved: 13,
    },
    {
        userId: 2,
        problemsSolved: 11,
    },
    {
        userId: 3,
        problemsSolved: 16,
    },
    {
        userId: 4,
        problemsSolved: 31,
    },
    {
        userId: 5,
        problemsSolved: 33,
    },
    {
        userId: 6,
        problemsSolved: 36,
    },
    {
        userId: 7,
        problemsSolved: 61,
    },
    {
        userId: 8,
        problemsSolved: 63,
    },
    {
        userId: 9,
        problemsSolved: 66,
    },
    {
        userId: 10,
        problemsSolved: 66,
    },
    {
        userId: 11,
        problemsSolved: 63,
    },
    {
        userId: 12,
        problemsSolved: 16,
    },
    {
        userId: 13,
        problemsSolved: 61,
    },
    {
        userId: 14,
        problemsSolved: 36,
    },
    {
        userId: 15,
        problemsSolved: 33,
    },
    {
        userId: 16,
        problemsSolved: 13,
    },
    {
        userId: 17,
        problemsSolved: 31,
    },
    {
        userId: 18,
        problemsSolved: 16,
    },
    {
        userId: 19,
        problemsSolved: 13,
    },
    {
        userId: 20,
        problemsSolved: 11,
    },
]);
