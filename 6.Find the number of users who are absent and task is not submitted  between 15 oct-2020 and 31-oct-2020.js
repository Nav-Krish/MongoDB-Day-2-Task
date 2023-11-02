// 6.Find the number of users who are absent and task is not submitted  between 15 oct-2020 and 31-oct-2020

db.attendance.aggregate([
    {
        $lookup: {
            from: "topics",
            localField: "topicId",
            foreignField: "topicId",
            as: "topicInfo",
        },
    },
    {
        $lookup: {
            from: "tasks",
            localField: "topicId",
            foreignField: "topicId",
            as: "taskInfo",
        },
    },
    {//gives students who were absent
        $match: {
            $and: [
                {
                    attended: false,
                },
                {
                    "taskInfo.submitted": false,
                },
            ],
        },
    },
    {// gives students absent + not submitted the tasks
        $match: {
            $and: [
                {
                    $and: [
                        {
                            "topicInfo.topicDate": {
                                $gt: ISODate("2023-10-15"),
                            },
                        },
                        {
                            "topicInfo.topicDate": {
                                $lt: ISODate("2023-10-31"),
                            },
                        },
                    ],
                },
                {
                    $and: [
                        {
                            "taskInfo.dueDate": {
                                $gt: ISODate("2023-10-15"),
                            },
                        },
                        {
                            "taskInfo.dueDate": {
                                $lt: ISODate("2023-10-31"),
                            },
                        },
                    ],
                },
            ],
        },
    },
    {
        $count:
            "No of students absent & didn't submit the tasks between 15-oct-2023 and 31-oct-2023",
    },
])

//Output

{
    "No of students absent & didn't submit the tasks between 15-oct-2023 and 31-oct-2023" : 6
}
