// Creating & selecting Database

use("Zen_Class_Programme");

// Creating collections for Zen_Class_Programme

db.createCollection("topics");

// Creating Documents for topics

db.topics.insertMany([
    {
        topicId: 1,
        topic: "RWD",
        topicDate: ISODate("2023-10-10"),
    },
    {
        topicId: 2,
        topic: "Bootstrap",
        topicDate: ISODate("2023-10-11"),
    },
    {
        topicId: 3,
        topic: "Javascript",
        topicDate: ISODate("2023-10-17"),
    },
    {
        topicId: 4,
        topic: "Async Programming",
        topicDate: ISODate("2023-10-18"),
    },
    {
        topicId: 5,
        topic: "React",
        topicDate: ISODate("2023-10-24"),
    },
    {
        topicId: 6,
        topic: "React-Redux",
        topicDate: ISODate("2023-10-25"),
    },
    {
        topicId: 7,
        topic: "MySQL",
        topicDate: ISODate("2023-11-01"),
    },
    {
        topicId: 8,
        topic: "MongoDB",
        topicDate: ISODate("2023-11-02"),
    },
]);