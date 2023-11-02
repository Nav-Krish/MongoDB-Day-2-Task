// 1.Find all the topics and tasks which are taught in the month of October

db.topics.aggregate([
    {
      $lookup: {
        from: "tasks",
        localField: "topicId",
        foreignField: "topicId",
        as: "tasksInfo",
      },
    },
    {
      $match:
        {
          topicDate: {
            $gt: ISODate("2023-09-31"), $lt: ISODate("2023-11-01"),
          },
        },
    },
    {
      $project: {
        _id: 0,
        topicId: 1,
        topicDate: 1,
        topicDate: 1,
        "tasksInfo.userId": 1,
        "tasksInfo.task": 1,
        "tasksInfo.dueDate": 1,
        "tasksInfo.submitted": 1,
      },
    },
  ])

  //Output

  {
    "topicId" : 1,
    "topicDate" : ISODate("2023-10-10T00:00:00.000+0000"),
    "tasksInfo" : [
        {
            "userId" : 1,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 2,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 3,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 4,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 5,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 6,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : false
        },
        {
            "userId" : 7,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 8,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 9,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 10,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : false
        },
        {
            "userId" : 11,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 12,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 13,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 14,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 15,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 16,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 17,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 18,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : false
        },
        {
            "userId" : 19,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 20,
            "task" : "RWD",
            "dueDate" : ISODate("2023-10-12T00:00:00.000+0000"),
            "submitted" : true
        }
    ]
}
{
    "topicId" : 2,
    "topicDate" : ISODate("2023-10-11T00:00:00.000+0000"),
    "tasksInfo" : [
        {
            "userId" : 1,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : false
        },
        {
            "userId" : 2,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 3,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 4,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 5,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 6,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 7,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 8,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 9,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 10,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : false
        },
        {
            "userId" : 11,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 12,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 13,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 14,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 15,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 16,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 17,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 18,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 19,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 20,
            "task" : "Bootstrap",
            "dueDate" : ISODate("2023-10-13T00:00:00.000+0000"),
            "submitted" : true
        }
    ]
}
{
    "topicId" : 3,
    "topicDate" : ISODate("2023-10-17T00:00:00.000+0000"),
    "tasksInfo" : [
        {
            "userId" : 1,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : false
        },
        {
            "userId" : 2,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 3,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 4,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 5,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 6,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 7,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 8,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 9,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 10,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 11,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 12,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 13,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 14,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 15,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 16,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 17,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : false
        },
        {
            "userId" : 18,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 19,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 20,
            "task" : "JS",
            "dueDate" : ISODate("2023-10-19T00:00:00.000+0000"),
            "submitted" : true
        }
    ]
}
{
    "topicId" : 4,
    "topicDate" : ISODate("2023-10-18T00:00:00.000+0000"),
    "tasksInfo" : [
        {
            "userId" : 1,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 2,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 3,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 4,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 5,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 6,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 7,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 8,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 9,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 10,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 11,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 12,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 13,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 14,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 15,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 16,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 17,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 18,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : false
        },
        {
            "userId" : 19,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 20,
            "task" : "Async Programming",
            "dueDate" : ISODate("2023-10-20T00:00:00.000+0000"),
            "submitted" : true
        }
    ]
}
{
    "topicId" : 5,
    "topicDate" : ISODate("2023-10-24T00:00:00.000+0000"),
    "tasksInfo" : [
        {
            "userId" : 1,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 2,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 3,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 4,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 5,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 6,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 7,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 8,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 9,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 10,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 11,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 12,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : false
        },
        {
            "userId" : 13,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 14,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 15,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 16,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 17,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 18,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 19,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 20,
            "task" : "React",
            "dueDate" : ISODate("2023-10-26T00:00:00.000+0000"),
            "submitted" : true
        }
    ]
}
{
    "topicId" : 6,
    "topicDate" : ISODate("2023-10-25T00:00:00.000+0000"),
    "tasksInfo" : [
        {
            "userId" : 1,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 2,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 3,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 4,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 5,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : false
        },
        {
            "userId" : 6,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 7,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 8,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 9,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 10,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 11,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 12,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 13,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 14,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 15,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 16,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : false
        },
        {
            "userId" : 17,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 18,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 19,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        },
        {
            "userId" : 20,
            "task" : "React-Redux",
            "dueDate" : ISODate("2023-10-27T00:00:00.000+0000"),
            "submitted" : true
        }
    ]
}
