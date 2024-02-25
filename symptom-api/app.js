const express = require('express');
const bodyParser = require('body-parser');
const crypto = require('crypto');
const createHttpError = require('http-errors');
require('dotenv').config()

const Pool = require('pg').Pool

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "hackathon",
    password: "mysupersecretpassword",
    port: 5432,
  })

// const pool = new Pool({
//   user: process.env.USER,
//   host: process.env.HOST,
//   database: process.env.DB,
//   password: process.env.PASSWORD,
//   port: process.env.DBPORT,
// })


const app = express();
app.use(bodyParser.json());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log("Server Listening on PORT:", PORT);
});

  
  
app.get('/status', (request, response) => {
    const status = {
        'Status': 'Running'
    };
    
    response.send(status);
});

app.get('/symptoms', ( request, response) => {
    query = 'SELECT * FROM symptoms ';

    pool.query(query, (error, results ) => {
        if ( error ) {
            throw error
        }

        response.status(200).json(results.rows)
    })
    
})

app.get('/accounts', ( request, response) => {
    query = 'SELECT * FROM accounts ';

    pool.query(query, (error, results ) => {
        if ( error ) {
            throw error
        }

        response.status(200).json(results.rows)
    })
    
})

app.get('/accounts/:id', ( request, response) => {
    const { id } = request.params 
    query = 'SELECT * FROM accounts WHERE id = $1';

    pool.query(query, [id], (error, results ) => {
        if ( error ) {
            throw error
        }

        if (results.row == []) {
            throw createHttpError(40)
        }

        response.status(200).json(results.rows)
    })
    
})

app.post('/accounts', ( request, response) => {
    try {
        let { isAdmin, username, firstName, lastName } = request.body
        
        if (name === undefined) throw Error("Name not provided")
        let id = crypto.randomUUID();
        let date = new Date();

        query = `INSERT INTO trial ( \"${id}\", \"${name}\" )`;
        console.log(query)
        pool.query(`
        INSERT INTO trial ( id, name, created_at)
        VALUES ( $1, $2, $3 )
        RETURNING *`
        , [id, name, date], (error, results ) => {
            if ( error ) {
                throw error
            }

            response.status(200).json(results.rows)
        })
    } catch ( error ) {
        response.status(400).json({ "error": "broke boi" })
    }
})

app.put('/accounts/:id', ( request, response) => {
    let { id } = request.params;
    let name;
    try {
        name = request.body.name;
        if (name === undefined) throw Error("Name not provided")
        
        let date = new Date();
        let doesEntityExist = false;

        selectQuery = `SELECT id FROM trial WHERE id = $1`;
        console.log(selectQuery)
        pool.query(selectQuery, [id], (error, results ) => {
            if ( error ) {
                throw error
            }

            if (results.rows.length != 0) doesEntityExist = true;
        })


        if (doesEntityExist) {
            let id = crypto.randomUUID();
            let insertQuery = `INSERT INTO trial ( \"${id}\", \"${name}\" )`;
            pool.query(insertQuery, [id, name], (error, results ) => {
                if (error ) {
                    throw error
                }

                return response.status(200).json(results.rows)
            });
        } else {
            let updateQuery = `UPDATE trial SET name = $1 WHERE id = $2`;
            pool.query(updateQuery, [name, id], (error, results ) => {
                if ( error ) {
                    throw error
                }

                return response.status(200).json(results.rows);
            });
        };

    } catch ( error ) {
        response.status(400).json({ "error": "broke boi" })
    }
})

app.delete('/accounts/:id', ( request, response) => {
    const { id } = request.params 
    query = 'DELETE * FROM trial WHERE id = $1';

    pool.query(query, [id], (error, results ) => {
        if ( error ) {
            throw error
        }

        if (results.row == []) {
            throw createHttpError(40)
        }

        response.status(200).json(results.rows)
    })
    
})



app.get('/trials', ( request, response) => {
    query = 'SELECT * FROM trial ';

    pool.query(query, (error, results ) => {
        if ( error ) {
            throw error
        }

        response.status(200).json(results.rows)
    })
    
})

app.get('/trials/:id', ( request, response) => {
    const { id } = request.params 
    query = 'SELECT * FROM trial WHERE id = $1';

    pool.query(query, [id], (error, results ) => {
        if ( error ) {
            throw error
        }

        if (results.row == []) {
            throw createHttpError(40)
        }

        response.status(200).json(results.rows)
    })
    
})

app.post('/trials', ( request, response) => {
    
    let name;
    try {
        name = request.body.name;
        if (name === undefined) throw Error("Name not provided")
        let id = crypto.randomUUID();
        let date = new Date();

        query = `INSERT INTO trial ( \"${id}\", \"${name}\" )`;
        console.log(query)
        pool.query(`
        INSERT INTO trial ( id, name, created_at)
        VALUES ( $1, $2, $3 )
        RETURNING *`
        , [id, name, date], (error, results ) => {
            if ( error ) {
                throw error
            }

            response.status(200).json(results.rows)
        })
    } catch ( error ) {
        response.status(400).json({ "error": "broke boi" })
    }
})

app.put('/trials/:id', ( request, response) => {
    let { id } = request.params;
    let name;
    try {
        name = request.body.name;
        if (name === undefined) throw Error("Name not provided")
        
        let date = new Date();
        let doesEntityExist = false;

        selectQuery = `SELECT id FROM trial WHERE id = $1`;
        console.log(selectQuery)
        pool.query(selectQuery, [id], (error, results ) => {
            if ( error ) {
                throw error
            }

            if (results.rows.length != 0) doesEntityExist = true;
        })


        if (doesEntityExist) {
            let id = crypto.randomUUID();
            let insertQuery = `INSERT INTO trial ( \"${id}\", \"${name}\" )`;
            pool.query(insertQuery, [id, name], (error, results ) => {
                if (error ) {
                    throw error
                }

                return response.status(200).json(results.rows)
            });
        } else {
            let updateQuery = `UPDATE trial SET name = $1 WHERE id = $2`;
            pool.query(updateQuery, [name, id], (error, results ) => {
                if ( error ) {
                    throw error
                }

                return response.status(200).json(results.rows);
            });
        };

    } catch ( error ) {
        response.status(400).json({ "error": "broke boi" })
    }
})

app.delete('/trials/:id', ( request, response) => {
    const { id } = request.params 
    query = 'DELETE * FROM trial WHERE id = $1';

    pool.query(query, [id], (error, results ) => {
        if ( error ) {
            throw error
        }

        if (results.row == []) {
            throw createHttpError(40)
        }

        response.status(200).json(results.rows)
    })
    
})

app.get('/medicine', ( request, response) => {
    query = 'SELECT * FROM medicines ';

    pool.query(query, (error, results ) => {
        if ( error ) {
            throw error
        }

        response.status(200).json(results.rows)
    })
    
})