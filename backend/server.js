
//  const express = require('express');
//  const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// // MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'bharat',
//   database: 'school',
// });

// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     throw err;
//   }
//   console.log('Connected to MySQL database');
// });

// app.use(cors());
// app.use(bodyParser.json());

// // Add GET route to retrieve person data by ID
// app.get('/get-person/:admissionNumber', (req, res) => {
//   const admissionNumber = req.params.admissionNumber;
//   const sql = 'SELECT * FROM persons WHERE admissionNumber = ?';
//   db.query(sql, [admissionNumber], (err, result) => {
//     if (err) {
//       console.error('Error retrieving person data:', err);
//       res.status(500).send('Error retrieving person data');
//     } else {
//       if (result.length > 0) {
//         res.status(200).json(result[0]);
//       } else {
//         res.status(404).send('Person not found');
//       }
//     }
//   });
// });


// // POST route to add a new person
// app.post('/add-person', (req, res) => {
//   const { 
//     admissionNumber,
//     gender,
//     fullName,
//     age,
//     fatherName,
//     fatherOccupation,
//     motherName,
//     motherOccupation,
//     rationCardNumber,
//     phoneNumber,
//     caste,
//     religion,
//     address,
//     city,
//     state,
//     country,
//     pincode,
//     guardianName,
//     guardianAddress,
//     previousSchoolName,
//     lastStudiedCity,
//     lastStudiedState,
//     tcNumber,
//     yearOfStudy,
//     identificationMarks
//   } = req.body;
  
//   const sql = `
//     INSERT INTO Persons (
//       admissionNumber,
//       gender,
//       fullName,
//       age,
//       fatherName,
//       fatherOccupation,
//       motherName,
//       motherOccupation,
//       rationCardNumber,
//       phoneNumber,
//       caste,
//       religion,
//       address,
//       city,
//       state,
//       country,
//       pincode,
//       guardianName,
//       guardianAddress,
//       previousSchoolName,
//       lastStudiedCity,
//       lastStudiedState,
//       tcNumber,
//       yearOfStudy,
//       identificationMarks
//     ) 
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//   db.query(sql, [
//     admissionNumber,
//     gender,
//     fullName,
//     age,
//     fatherName,
//     fatherOccupation,
//     motherName,
//     motherOccupation,
//     rationCardNumber,
//     phoneNumber,
//     caste,
//     religion,
//     address,
//     city,
//     state,
//     country,
//     pincode,
//     guardianName,
//     guardianAddress,
//     previousSchoolName,
//     lastStudiedCity,
//     lastStudiedState,
//     tcNumber,
//     yearOfStudy,
//     identificationMarks
//   ], (err, result) => {
//     if (err) {
//       console.error('Error adding person to database:', err);
//       res.status(500).send('Error adding person to database');
//     } else {
//       console.log('Person added to database');
//       res.status(200).send('Person added successfully');
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });








// const express = require('express');
// const bodyParser = require('body-parser');
// const mysql = require('mysql');
// const multer = require('multer');
// const cors = require('cors');

// const app = express();
// const port = 5000;

// // MySQL connection
// const db = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'bharat', // Your MySQL password
//   database: 'school', // Your MySQL database
// });


// // Connect to MySQL
// db.connect((err) => {
//   if (err) {
//     console.error('Error connecting to MySQL:', err);
//     throw err;
//   }
//   console.log('Connected to MySQL database');
// });

// app.use(cors()); // Enable CORS for cross-origin requests
// app.use(bodyParser.json()); // Enable parsing of JSON request bodies

// // Multer configuration for handling file uploads
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, './uploads'); // Path to store uploaded files
//   },
//   filename: (req, file, cb) => {
//     cb(null, `${Date.now()}_${file.originalname}`); // Unique filename
//   },
// });

// const upload = multer({ storage });

// // POST route to upload certificates
// app.post(
//   '/upload-certificates',
//   upload.fields([
//     { name: 'photo', maxCount: 1 },
//     { name: 'transferCertificate', maxCount: 1 },
//     { name: 'aadharCard', maxCount: 1 },
//     { name: 'studyCertificate', maxCount: 1 },
//     { name: 'fatherAadharCard', maxCount: 1 },
//   ]),
//   (req, res) => {
//     const { admissionNumber } = req.body;
//     const {
//       photo,
//       transferCertificate,
//       aadharCard,
//       studyCertificate,
//       fatherAadharCard,
//     } = req.files;

//     const sql = `
//       INSERT INTO Certificates (
//         admissionNumber,
//         photo,
//         transferCertificate,
//         aadharCard,
//         studyCertificate,
//         fatherAadharCard
//       )
//       VALUES (?, ?, ?, ?, ?, ?)
//     `;

//     db.query(
//       sql,
//       [
//         admissionNumber,
//         photo ? photo[0].filename : null,
//         transferCertificate ? transferCertificate[0].filename : null,
//         aadharCard ? aadharCard[0].filename : null,
//         studyCertificate ? studyCertificate[0].filename : null,
//         fatherAadharCard ? fatherAadharCard[0].filename : null,
//       ],
//       (err, result) => {
//         if (err) {
//           console.error('Error adding certificates to the database:', err);
//           res.status(500).send('Error adding certificates to the database.');
//         } else {
//           console.log('Certificates added to database');
//           res.status(200).send('Certificates uploaded successfully.');
//         }
//       }
//     );
//   }
// );

// // GET route to retrieve person data by admission number




// app.post('/add-person', (req, res) => {
//   const { 
//     admissionNumber,
//     gender,
//     fullName,
//     age,
//     fatherName,
//     fatherOccupation,
//     motherName,
//     motherOccupation,
//     rationCardNumber,
//     phoneNumber,
//     caste,
//     religion,
//     address,
//     city,
//     state,
//     country,
//     pincode,
//     guardianName,
//     guardianAddress,
//     previousSchoolName,
//     lastStudiedCity,
//     lastStudiedState,
//     tcNumber,
//     yearOfStudy,
//     identificationMarks
//   } = req.body;
  
//   const sql = `
//     INSERT INTO Persons (
//       admissionNumber,
//       gender,
//       fullName,
//       age,
//       fatherName,
//       fatherOccupation,
//       motherName,
//       motherOccupation,
//       rationCardNumber,
//       phoneNumber,
//       caste,
//       religion,
//       address,
//       city,
//       state,
//       country,
//       pincode,
//       guardianName,
//       guardianAddress,
//       previousSchoolName,
//       lastStudiedCity,
//       lastStudiedState,
//       tcNumber,
//       yearOfStudy,
//       identificationMarks
//     ) 
//     VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

//   db.query(sql, [
//     admissionNumber,
//     gender,
//     fullName,
//     age,
//     fatherName,
//     fatherOccupation,
//     motherName,
//     motherOccupation,
//     rationCardNumber,
//     phoneNumber,
//     caste,
//     religion,
//     address,
//     city,
//     state,
//     country,
//     pincode,
//     guardianName,
//     guardianAddress,
//     previousSchoolName,
//     lastStudiedCity,
//     lastStudiedState,
//     tcNumber,
//     yearOfStudy,
//     identificationMarks
//   ], (err, result) => {
//     if (err) {
//       console.error('Error adding person to database:', err);
//       res.status(500).send('Error adding person to database');
//     } else {
//       console.log('Person added to database');
//       res.status(200).send('Person added successfully');
//     }
//   });
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const multer = require('multer');
const cors = require('cors');

const app = express();
const port = 5000;

// MySQL connection
const db = mysql.createConnection({
  host: 'localhost', // Your MySQL host
  user: 'root', // Your MySQL user
  password: 'bharat', // Your MySQL password
  database: 'school', // Your MySQL database
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    console.error('Error connecting to MySQL:', err);
    throw err;
  }
  console.log('Connected to MySQL database');
});

app.use(cors()); // Enable CORS for cross-origin requests
app.use(bodyParser.json()); // Enable parsing of JSON request bodies

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static('uploads'));

// Multer configuration for handling file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads'); // Path to store uploaded files
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`); // Unique filename
  },
});

const upload = multer({ storage }); // Multer upload configuration

// POST route to upload certificates
app.post(
  '/upload-certificates',
  upload.fields([
    { name: 'photo', maxCount: 1 },
    { name: 'transferCertificate', maxCount: 1 },
    { name: 'aadharCard', maxCount: 1 },
    { name: 'studyCertificate', maxCount: 1 },
    { name: 'fatherAadharCard', maxCount: 1 },
  ]),
  (req, res) => {
    const { admissionNumber } = req.body; // Destructure admission number
    const { photo, transferCertificate, aadharCard, studyCertificate, fatherAadharCard } = req.files;

    const sql = `
      INSERT INTO Certificates (
        admissionNumber,
        photo,
        transferCertificate,
        aadharCard,
        studyCertificate,
        fatherAadharCard
      )
      VALUES (?, ?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        admissionNumber,
        photo ? photo[0].filename : null,
        transferCertificate ? transferCertificate[0].filename : null,
        aadharCard ? aadharCard[0].filename : null,
        studyCertificate ? studyCertificate[0].filename : null,
        fatherAadharCard ? fatherAadharCard[0].filename : null,
      ],
      (err, result) => {
        if (err) {
          console.error('Error adding certificates to the database:', err); // Log error message
          res.status(500).send('Error adding certificates to the database.');
        } else {
          console.log('Certificates added to the database'); // Log success
          res.status(200).send('Certificates uploaded successfully.');
        }
      }
    );
  }
);

// POST route to add a new person
app.post('/add-person', (req, res) => {
  const {
    admissionNumber,
    gender,
    fullName,
    age,
    fatherName,
    fatherOccupation,
    motherName,
    motherOccupation,
    rationCardNumber,
    phoneNumber,
    caste,
    religion,
    address,
    city,
    state,
    country,
    pincode,
    guardianName,
    guardianAddress,
    previousSchoolName,
    lastStudiedCity,
    lastStudiedState,
    tcNumber,
    yearOfStudy,
    identificationMarks,
  } = req.body; // Destructure incoming data

  const sql = `
    INSERT INTO Persons (
      admissionNumber,
      gender,
      fullName,
      age,
      fatherName,
      fatherOccupation,
      motherName,
      motherOccupation,
      rationCardNumber,
      phoneNumber,
      caste,
      religion,
      address,
      city,
      state,
      country,
      pincode,
      guardianName,
      guardianAddress,
      previousSchoolName,
      lastStudiedCity,
      lastStudiedState,
      tcNumber,
      yearOfStudy,
      identificationMarks
    )
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [
      admissionNumber,
      gender,
      fullName,
      age,
      fatherName,
      fatherOccupation,
      motherName,
      motherOccupation,
      rationCardNumber,
      phoneNumber,
      caste,
      religion,
      address,
      city,
      state,
      country,
      pincode,
      guardianName,
      guardianAddress,
      previousSchoolName,
      lastStudiedCity,
      lastStudiedState,
      tcNumber,
      yearOfStudy,
      identificationMarks
    ],
    (err, result) => {
      if (err) {
        console.error('Error adding person to the database:', err); // Log error message
        res.status(500).send('Error adding person to the database.');
      } else {
        console.log('Person added to the database'); // Log success
        res.status(200).send('Person added successfully.');
      }
    }
  );
});

// GET route to retrieve a person and related certificates by admission number
app.get('/view-student/:admissionNumber', (req, res) => {
  const admissionNumber = req.params.admissionNumber;
  const sql = 'SELECT * FROM Persons WHERE admissionNumber = ?'; // Correct table name
  db.query(sql, [admissionNumber], (err, result) => {
    if (err) {
      console.error('Error retrieving person data:', err); // Handle error
      res.status(500).send('Error retrieving person data.');
    } else {
      if (result.length > 0) {
        res.status(200).json(result[0]); // Return the first result as JSON
      } else {
        res.status(404).send('Person not found.'); // Handle not found case
      }
    }
  });
});

// GET route to retrieve certificates by admission number
app.get('/certificates/:admissionNumber', (req, res) => {
  const admissionNumber = req.params.admissionNumber; // Retrieve parameter
  const sql = 'SELECT * FROM Certificates WHERE admissionNumber = ?'; // Correct table name

  db.query(sql, [admissionNumber], (err, result) => {
    if (err) {
      console.error('Error retrieving certificate data:', err); // Handle database error
      res.status(500).send('Database error occurred. Please try again later.'); // General error handling
    } else {
      if (result.length > 0) {
        res.status(200).json(result[0]); // Return certificate data
      } else {
        res.status(404).send('Certificate not found for the given admission number.'); // Handle not found case
      }
    }
  });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`); // Server startup message
});

