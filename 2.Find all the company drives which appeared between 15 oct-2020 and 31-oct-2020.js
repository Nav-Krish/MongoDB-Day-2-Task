// 2.Find all the company drives which appeared between 15 oct-2020 and 31-oct-2020

db.companyDrives.aggregate([
    {
      $match:
        {
          driveDate: {
            $gte: ISODate("2020-10-15"),
            $lte: ISODate("2020-10-31"),
          },
        },
    },
    {
      $project:
        {
          _id: 0,
        },
    },
  ])

//Output

{
    "userId" : 2,
    "driveDate" : ISODate("2020-10-19T18:30:00.000+0000"),
    "company" : "Guvi"
}
{
    "userId" : 3,
    "driveDate" : ISODate("2020-10-24T18:30:00.000+0000"),
    "company" : "Zoho"
}
{
    "userId" : 2,
    "driveDate" : ISODate("2020-10-26T18:30:00.000+0000"),
    "company" : "TCS"
}
