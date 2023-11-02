// Creating & selecting Database

use("Zen_Class_Programme");

// Creating collections for Zen_Class_Programme

db.createCollection("companyDrives");

// Creating Documents for companyDrives

db.companyDrives.insertMany([
    {
        userId: 1,
        driveDate: ISODate("2023-10-04"),
        company: "Google",
    },
    {
        userId: 1,
        driveDate: ISODate("2023-10-11"),
        company: "Amazon",
    },
    {
        userId: 2,
        driveDate: ISODate("2023-10-20"),
        company: "Guvi",
    },
    {
        userId: 3,
        driveDate: ISODate("2023-10-25"),
        company: "Zoho",
    },
    {
        userId: 2,
        driveDate: ISODate("2023-10-27"),
        company: "TCS",
    },
]);