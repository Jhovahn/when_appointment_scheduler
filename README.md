# Hairdresser CLI application

A hairdresser CLI application built using Node.js using stdin & stdout allowing a user to Schedule and List appointments in addtion to clearing state upon exit.

## Source Files

app.js - contains application code
data.json - stores appointments during runtime
logfile.txt - log file storage

## Running locally

Ensure that Node.js is installed on your computer, node may be installed from https://nodejs.org/en/download/
From the root directory in the command line enter `node app.js` + ENTER to start application
Application interface will display command options

### Commands

L | List - Lists all current appointments
S | Schedule - Schedules a Hair or Hair and Shampoo appointment based on stdin
E | Exit - Exits application and clears all appointments

# Author

Name: Jhovahn Gibbs
Email: jhovahn.gibbs@gmial.com
Github: github.com/jhovahn

#### Copy of log file of test run

Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Current Appointments:

Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Enter H for Hair or HS for Hair & Shampoo:Time:Saved: {"Appointment":"H","Time":"12:30","Duration":"30mins"}

Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Current Appointments:
{"Appointment":"H","Time":"12:30","Duration":"30mins"}

Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Enter H for Hair or HS for Hair & Shampoo:Time:Saved: {"Appointment":"HS","Time":"15:00","Duration":"60mins"}

Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Current Appointments:
{"Appointment":"H","Time":"12:30","Duration":"30mins"}
{"Appointment":"HS","Time":"15:00","Duration":"60mins"}

Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Enter H for Hair or HS for Hair & Shampoo:null
Enter H for Hair or HS for Hair & Shampoo:Time:Must match 24HR HH:MM format at 15 minutes increments from 00
Time:Saved: {"Appointment":"HS","Time":"22:15","Duration":"60mins"}

Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Current Appointments:
{"Appointment":"H","Time":"12:30","Duration":"30mins"}
{"Appointment":"HS","Time":"15:00","Duration":"60mins"}
{"Appointment":"HS","Time":"22:15","Duration":"60mins"}

Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Current Appointments:
{"Appointment":"H","Time":"12:30","Duration":"30mins"}
{"Appointment":"HS","Time":"15:00","Duration":"60mins"}
{"Appointment":"HS","Time":"22:15","Duration":"60mins"}

Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Enter H for Hair or HS for Hair & Shampoo:Time:Saved: {"Appointment":"H","Time":"09:15","Duration":"30mins"}

Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:Current Appointments:
{"Appointment":"H","Time":"12:30","Duration":"30mins"}
{"Appointment":"HS","Time":"15:00","Duration":"60mins"}
{"Appointment":"HS","Time":"22:15","Duration":"60mins"}
{"Appointment":"H","Time":"09:15","Duration":"30mins"}

Enter letter corresponding to desired action:
L - List | Shows all appointments
S - Schedule | Schedules an appointment
E - Exit | Exits application, clears appointments
:
