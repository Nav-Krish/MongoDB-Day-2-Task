// 4.Find the number of problems solved by the user in codekata

db.users.aggregate([
    {
      $lookup: {
        from: "codekata",
        localField: "userId",
        foreignField: "userId",
        as: "problemsSolved",
      },
    },
    {
      $project: {
        _id: 0,
        userId: 1,
        userName: 1,
        "problemsSolved.problemsSolved": 1,
      },
    },
  ])

//Output

{
    "userId" : 1,
    "userName" : "user01",
    "problemsSolved" : [
        {
            "problemsSolved" : 13
        }
    ]
}
{
    "userId" : 2,
    "userName" : "user02",
    "problemsSolved" : [
        {
            "problemsSolved" : 11
        }
    ]
}
{
    "userId" : 3,
    "userName" : "user03",
    "problemsSolved" : [
        {
            "problemsSolved" : 16
        }
    ]
}
{
    "userId" : 4,
    "userName" : "user04",
    "problemsSolved" : [
        {
            "problemsSolved" : 31
        }
    ]
}
{
    "userId" : 5,
    "userName" : "user05",
    "problemsSolved" : [
        {
            "problemsSolved" : 33
        }
    ]
}
{
    "userId" : 6,
    "userName" : "user06",
    "problemsSolved" : [
        {
            "problemsSolved" : 36
        }
    ]
}
{
    "userId" : 7,
    "userName" : "user07",
    "problemsSolved" : [
        {
            "problemsSolved" : 61
        }
    ]
}
{
    "userId" : 8,
    "userName" : "user08",
    "problemsSolved" : [
        {
            "problemsSolved" : 63
        }
    ]
}
{
    "userId" : 9,
    "userName" : "user09",
    "problemsSolved" : [
        {
            "problemsSolved" : 66
        }
    ]
}
{
    "userId" : 10,
    "userName" : "user10",
    "problemsSolved" : [
        {
            "problemsSolved" : 66
        }
    ]
}
{
    "userId" : 11,
    "userName" : "user11",
    "problemsSolved" : [
        {
            "problemsSolved" : 63
        }
    ]
}
{
    "userId" : 12,
    "userName" : "user12",
    "problemsSolved" : [
        {
            "problemsSolved" : 16
        }
    ]
}
{
    "userId" : 13,
    "userName" : "user13",
    "problemsSolved" : [
        {
            "problemsSolved" : 61
        }
    ]
}
{
    "userId" : 14,
    "userName" : "user14",
    "problemsSolved" : [
        {
            "problemsSolved" : 36
        }
    ]
}
{
    "userId" : 15,
    "userName" : "user15",
    "problemsSolved" : [
        {
            "problemsSolved" : 33
        }
    ]
}
{
    "userId" : 16,
    "userName" : "user16",
    "problemsSolved" : [
        {
            "problemsSolved" : 13
        }
    ]
}
{
    "userId" : 17,
    "userName" : "user17",
    "problemsSolved" : [
        {
            "problemsSolved" : 31
        }
    ]
}
{
    "userId" : 18,
    "userName" : "user18",
    "problemsSolved" : [
        {
            "problemsSolved" : 16
        }
    ]
}
{
    "userId" : 19,
    "userName" : "user19",
    "problemsSolved" : [
        {
            "problemsSolved" : 13
        }
    ]
}
{
    "userId" : 20,
    "userName" : "user20",
    "problemsSolved" : [
        {
            "problemsSolved" : 11
        }
    ]
}
