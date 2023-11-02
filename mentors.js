// Creating & selecting Database

use("Zen_Class_Programme");

// Creating collections for Zen_Class_Programme

db.createCollection("mentors");

// Creating Documents for mentors

db.mentors.insertMany([
    {
        mentorId: 1,
        mentorName: "mentor01",
        mentorEmail: "mentor01@gmail.com",
    },
    {
        mentorId: 2,
        mentorName: "mentor02",
        mentorEmail: "mentor02@gmail.com",
    },
    {
        mentorId: 3,
        mentorName: "mentor03",
        mentorEmail: "mentor03@gmail.com",
    },
    {
        mentorId: 4,
        mentorName: "mentor04",
        mentorEmail: "mentor04@gmail.com",
    },
]);