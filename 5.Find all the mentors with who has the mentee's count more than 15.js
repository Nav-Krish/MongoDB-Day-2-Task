// 5.Find all the mentors with who has the mentee's count more than 15

db.users.aggregate([
    {
      $lookup: {
        from: "mentors",
        localField: "mentorId",
        foreignField: "mentorId",
        as: "mentorInfo",
      },
    },
    {
      $group: {
        _id: {
          mentorId: "$mentorInfo.mentorId",
          mentorName: "$mentorInfo.mentorName",
        },
        menteeCount: {
          $sum: 1,
        },
      },
    },
    {
      $match:
        {
          menteeCount: {
            $gte: 15,
          },
        },
    },
  ])

  //Output

  {
    "_id" : {
        "mentorId" : [
            1
        ],
        "mentorName" : [
            "mentor01"
        ]
    },
    "menteeCount" : 16.0
}
