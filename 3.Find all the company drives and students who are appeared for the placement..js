// 3.Find all the company drives and students who are appeared for the placement.

db.companyDrives.aggregate([
    {
      $lookup: {
        from: "users",
        localField: "userId",
        foreignField: "userId",
        as: "placementInfo",
      },
    },
    {
      $project: {
        _id: 0,
        userId: 1,
        driveDate: 1,
        company: 1,
        "placementInfo.userName": 1,
        "placementInfo.userEmail": 1,
      },
    },
  ])

//Output

{
    "userId" : 1,
    "driveDate" : ISODate("2020-10-03T18:30:00.000+0000"),
    "company" : "Google",
    "placementInfo" : [
        {
            "userName" : "user01",
            "userEmail" : "user1@gmail.com"
        }
    ]
}
{
    "userId" : 1,
    "driveDate" : ISODate("2020-10-10T18:30:00.000+0000"),
    "company" : "Amazon",
    "placementInfo" : [
        {
            "userName" : "user01",
            "userEmail" : "user1@gmail.com"
        }
    ]
}
{
    "userId" : 2,
    "driveDate" : ISODate("2020-10-19T18:30:00.000+0000"),
    "company" : "Guvi",
    "placementInfo" : [
        {
            "userName" : "user02",
            "userEmail" : "user02@gmail.com"
        }
    ]
}
{
    "userId" : 3,
    "driveDate" : ISODate("2020-10-24T18:30:00.000+0000"),
    "company" : "Zoho",
    "placementInfo" : [
        {
            "userName" : "user03",
            "userEmail" : "user03@gmail.com"
        }
    ]
}
{
    "userId" : 2,
    "driveDate" : ISODate("2020-10-26T18:30:00.000+0000"),
    "company" : "TCS",
    "placementInfo" : [
        {
            "userName" : "user02",
            "userEmail" : "user02@gmail.com"
        }
    ]
}
