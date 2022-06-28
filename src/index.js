const express = require("express");
const app = express();
const path = require("path");
const mysql = require("mysql");
const { NONAME, CONNREFUSED, LOADIPHLPAPI } = require("dns");
const req = require("express/lib/request");
const res = require("express/lib/response");
const { connect } = require("http2");
const { Console, error, log } = require("console");
const help = require("nodemon/lib/help");
const { send } = require("process");
const { header } = require("express/lib/request");
const e = require("express");
const Connection = require("mysql/lib/Connection");
const { name } = require("ejs");
var http = require("http");
var port_number = 3000;
var staticpath = path.join(__dirname, "../public");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(staticpath));

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Shubham@123",
  database: "ankit",
});

connection.connect();

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/teacher_login", (req, res) => {
  res.render("teacher_login");
});

app.post("/teacher_login", (req, res) => {
  console.log(req.body);
  const data = req.body;
  const login_id = data.login_ID;
  const password = data.Password;

  connection.query(
    `SELECT * from teacher_personal_information where teacher_Email = "${login_id}" and password = "${password}" ;`,
    (error, results, fiels) => {
      console.log("49     " + results);
      if (error) {
        console.log("error in /teacher_login");
        console.log(error);
        res.send("error in /teacher_login");
      } else if (results.length == 0) {
        res.send("login or password is incorrect");
      } else {
        Teacher_Time_Table_Detail_and_Render(res, results);
      }
    }
  );
});

function Teacher_Time_Table_Detail_and_Render(res, Teacher_Deatils) {
  const Teacher_ID = Teacher_Deatils[0].teacher_id;
  const Teacher_Name = Teacher_Deatils[0].teacher_name;
  const Teacher_Image_Src = Teacher_Deatils[0].teacher_image_src;

  connection.query(
    `select B.day_number , B.slot_number ,A.class_name , B.subject_id from classes A,time_table B where B.teacher_id="${Teacher_ID}" and A.class_id = B.class_id order by B.day_number , B.slot_number;`,
    (error, results, fiels) => {
      if (error) console.log("error from Teacher_Time_Table_Detail_and_Render");
      else {
        connection.query(
          `select distinct(A.class_name), B.class_id from classes A,time_table B where B.teacher_id="${Teacher_ID}" and A.class_id = B.class_id order by class_id;`,
          (err, ress, fil) => {
            if (error) console.log("error from classes");
            else {
              const days = [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ];
              let index = 0;
              let day_number = 1;
              let slot_number = 1;
              let i = 0;

              res.render("teacher_info", {
                Teacher_Name: Teacher_Name,
                Teacher_Id: Teacher_ID,
                src: Teacher_Image_Src,
                results: results,
                days: days,
                index: index,
                day_number: day_number,
                slot_number: slot_number,
                classes: ress,
                i: i,
              });
            }
          }
        );
      }
    }
  );
}

app.get("/student_login", (req, res) => {
  res.render("student_login");
});

app.post("/student_login", (req, res) => {
  const data = req.body;
  const login_id = data.login_ID;
  const password = data.Password;

  connection.query(
    `select S.student_id, S.student_src,S.name,C.class_name ,S.class_id from student_personal_information S, classes C where S.class_id=C.class_id and S.email_id = "${login_id}" and S.password = '${password}';`,
    (error, results, fiels) => {
      if (error) {
        console.log("error in /student_login");

        console.log(error);
        res.send("error in /student_login");
      } else if (results.length == 0) {
        res.send("login or password is incorrect");
      } else {
        student_Time_Table_Detail_and_Render(res, results);
      }
    }
  );
});

function student_Time_Table_Detail_and_Render(res, data) {
  data = data[0];
  const student_id = data.student_id;
  const student_name = data.name;
  const class_id = data.class_id;
  const class_name = data.class_name;
  const src = data.student_src;

  connection.query(
    `select T.day_number,T.slot_number,T.subject_id, P.teacher_name from time_table T , teacher_personal_information P where class_id = "${class_id}" and  T.teacher_id=P.teacher_id order by T.day_number , T.slot_number;`,
    (errors, results, fiels) => {
      if (errors) {
        console.log("Error from student_Time_Table_Detail");
        console.log(errors);
      } else {
        connection.query(
          `select distinct(T.subject_id) , S.subject_name from time_table T ,subject S where class_id = "${class_id}" and S.subject_id = T.subject_id; `,
          (error, result, fiel) => {
            if (error) {
              console.log(
                "Error from student_Time_Table_Detail for finding subject id"
              );
            } else {
              const days = [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ];
              let index = 0;

              res.render("student_info", {
                student_name: student_name,
                class_name: class_name,
                src: src,
                student_id: student_id,
                subjects: result,
                results: results, //here results sends the data of time table
                days: days,
                index: index,
              });
            }
          }
        );
      }
    }
  );
}

// student and teacher registration

app.get("/student_registration", (req, res) => {
  res.render("student_registration");
});

app.post("/student_registration", (req, res) => {
  const data = req.body;
  const name = data.name;
  const class_id = data.class_id;
  const student_id = data.student_id;
  const phone = data.phone;
  const email_id = data.email_id;
  const password = data.password;
  connection.query(
    `insert into student_personal_information values(${student_id}, "${name}", "${password}", ${phone}, "../images/default_teacher_image.png", "${email_id}", "${class_id}");`,
    (error, results, fields) => {
      if (error) {
        console.log("error from /student_registration");
        console.log(error);
      } else {
        res.redirect("student_login");
      }
    }
  );
});

app.get("/teacher_registration", (req, res) => {
  res.render("teacher_registration");
});

app.post("/teacher_registration", (req, res) => {
  const data = req.body;
  const teacher_name = data.name;
  const teacher_id = data.teacher_id;
  const phone = data.phone;
  const email_id = data.email_id;
  const password = data.password;
  connection.query(
    `insert into teacher_personal_information values("${teacher_id}", null, "${password}", "${teacher_name}", "../images/default_teacher_image.png", "${email_id}", ${phone});`,
    (error, results, fields) => {
      if (error) {
        console.log("error from /teacher_registration");
        console.log(error);
      } else {
        res.redirect("teacher_login");
      }
    }
  );
});

app.listen(port_number, function () {
  console.log("Server running at port ", port_number);
});
