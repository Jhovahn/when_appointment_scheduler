let fs = require('fs');

process.stdin.setEncoding('utf8');

function ask(question, format, callback) {
  let stdin = process.stdin;
  let stdout = process.stdout;

  stdout.write(question + ':');

  function formatMessage(question) {
    return question === `Appointment Type`
      ? `Input H for Hair or HS for Hair + Shampoo: `
      : question === `Time`
        ? `Must match 24HR HH:MM format at 15 minutes increments from 00`
        : null;
  }

  stdin.once('data', function(data) {
    data = data.toString().trim();
    if (format.test(data)) {
      callback(data);
    } else {
      stdout.write(formatMessage(question) + '\n');
      ask(question, format, callback);
    }
  });
}

function show(arg) {
  console.log(arg);
}

function read() {
  let file = fs.readFile('data.json', 'utf8', (err, res) => {
    console.log(`Current Appointments:`);
    show(res);
    options();
  });
}

function options() {
  ask(
    `Enter letter corresponding to desired action: \n  L - List     | Shows all appointments\n  S - Schedule | Schedules an appointment\n  E - Exit     | Exits application, clears appointments\n`,
    /./,
    function(ans) {
      return ans.toUpperCase() === 'L'
        ? read()
        : ans.toUpperCase() === 'S'
          ? interface()
          : ans.toUpperCase() === 'E' ? exit() : options();
    }
  );
}

function exit() {
  fs.writeFile('data.json', '', (err, res) => {});
  process.exit();
}

function interface() {
  function helper() {
    ask('Enter H for Hair or HS for Hair & Shampoo', /[H | HS]/i, function(
      appointment
    ) {
      ask('Time', /^([0-1]?[0-9]|2[0-3]):(00|15|30|45)$/, function(time) {
        appointment = appointment.toUpperCase();
        let duration = appointment === 'HS'.toUpperCase() ? '60mins' : '30mins';
        let entry = {
          Appointment: appointment,
          Time: time,
          Duration: duration
        };
        let formattedEntry = JSON.stringify(entry) + '\n';

        fs.open('data.json', 'a', 666, (e, id) => {
          fs.write(id, formattedEntry, null, 'utf8', function() {
            fs.close(id, function() {
              console.log(`Saved: ${formattedEntry}`);
              options();
            });
          });
        });
      });
    });
  }
  return helper();
}

options();
