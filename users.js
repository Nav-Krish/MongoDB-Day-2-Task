// Creating & selecting Database

use("Zen_Class_Programme");

// Creating collections for Zen_Class_Programme

db.createCollection("users");

// Creating Documents for users

db.users.insertMany([
    {
        userId: 1,
        userName: "user01",
        userEmail: "user01@gmail.com",
        mentorId: 1,
    },
    {
        userId: 2,
        userName: "user02",
        userEmail: "user02@gmail.com",
        mentorId: 2,
    },
    {
        userId: 3,
        userName: "user03",
        userEmail: "user03@gmail.com",
        mentorId: 3,
    },
    {
        userId: 4,
        userName: "user04",
        userEmail: "user04@gmail.com",
        mentorId: 1,
    },
    {
        userId: 5,
        userName: "user05",
        userEmail: "user05@gmail.com",
        mentorId: 2,
    },
    {
        userId: 6,
        userName: "user06",
        userEmail: "user06@gmail.com",
        mentorId: 3,
    },
    {
        userId: 7,
        userName: "user07",
        userEmail: "user07@gmail.com",
        mentorId: 1,
    },
    {
        userId: 8,
        userName: "user08",
        userEmail: "user08@gmail.com",
        mentorId: 1,
    },
    {
        userId: 9,
        userName: "user09",
        userEmail: "user09@gmail.com",
        mentorId: 1,
    },
    {
        userId: 10,
        userName: "user10",
        userEmail: "user10@gmail.com",
        mentorId: 1,
    },
    {
        userId: 11,
        userName: "user11",
        userEmail: "user11@gmail.com",
        mentorId: 1,
    },
    {
        userId: 12,
        userName: "user12",
        userEmail: "user12@gmail.com",
        mentorId: 1,
    },
    {
        userId: 13,
        userName: "user13",
        userEmail: "user13@gmail.com",
        mentorId: 1,
    },
    {
        userId: 14,
        userName: "user14",
        userEmail: "user14@gmail.com",
        mentorId: 1,
    },
    {
        userId: 15,
        userName: "user15",
        userEmail: "user15@gmail.com",
        mentorId: 1,
    },
    {
        userId: 16,
        userName: "user16",
        userEmail: "user16@gmail.com",
        mentorId: 1,
    },
    {
        userId: 17,
        userName: "user17",
        userEmail: "user17@gmail.com",
        mentorId: 1,
    },
    {
        userId: 18,
        userName: "user18",
        userEmail: "user18@gmail.com",
        mentorId: 1,
    },
    {
        userId: 19,
        userName: "user19",
        userEmail: "user19@gmail.com",
        mentorId: 1,
    },
    {
        userId: 20,
        userName: "user20",
        userEmail: "user20@gmail.com",
        mentorId: 1,
    },
]);