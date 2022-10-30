https://hospitalapiforcn.herokuapp.com/api/v1/doctors/register



Hospital API

LEVEL 3
You are required to complete the following task in a max of 5 hours. [Ideal completion time: 2.5 hours]
- Design the server side for a hospital Only the API needs to be designed
- Tech Stack: Node.js &amp; Mongo DB
- Feel free to use any libraries (you should be very clear on how it works conceptually)
Extra Points:
- Well commented code
- Readme on how to setup the project on local system
- Scaleable folder structure (separate models, controllers and routes)
Task
- Theme:
- We’re going to design an API for the doctors of a Hospital which has been allocated by the
govt for testing and quarantine + well being of COVID-19 patients
- There can be 2 types of Users
- Doctors
- Patients
- Doctors can log in
- Each time a patient visits, the doctor will follow 2 steps
- Register the patient in the app (using phone number, if the patient already exists, just
return the patient info in the API)
- After the checkup, create a Report
- Patient Report will have the following fields
- Created by doctor
- Status (You can use enums if you want to):
- Can be either of: [Negative, Travelled-Quarantine, Symptoms-Quarantine,
Positive-Admit]

- Date
- Required Routes
- /doctors/register → with username and password
- /doctors/login → returns the JWT to be used
- /patients/register
- /patients/:id/create_report
- /patients/:id/all_reports → List all the reports of a patient oldest to latest
- /reports/:status → List all the reports of all the patients filtered by a specific status
- Decide the fields and schemas on your own, smartly
- Decide which routes need to be protected by authentication

Free Hints
- USE PEN AND PAPER TO CREATE SCHEMAS BEFORE WRITING CODE

- WORK ON ONE API AT A TIME, DON’T THINK ABOUT THE COMPLETE APP TOGETHER
To Submit:
- Record a video (max 3 minutes) with the following details (and upload it to drive/youtube with
public access, VIDEO SHOULD BE ACCESSIBLE BY ANYONE):
- Explain through the folder structure (what is placed where and why)
- Explain the running code using Postman
- Upload the project files on github.com
- SUBMISSIONS WITHOUT VIDEO WILL NOT BE EVALUATED
