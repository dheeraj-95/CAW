# CAW
Assignment on Movie Booking

1. API to signup:
Request method: POST

Request URI: http://localhost:3000/users/signup

Request body (example):

{
	"name" : "Dheeraj",
    "email" : "dheeraj@gmail.com",
    "password" : "abcd1234",
    "passwordConfirm" : "abcd1234"
}

2. API to login:
Request method: POST

Request URI: http://localhost:3000/users/login

Request body (example):

{
    "email" : "dheeraj@gmail.com",
    "password" : "abcd1234"
}

3. Total Seats in a screen:
Request method: POST

Request URI: http://localhost:3000/movies/screens

Request body (example):

{ 
	"name":"inox", 
	"seatInfo": 
	{ 
		"A": 
		{ 
			"numberOfSeats": 10
		}, 
		"B": 
		{ 
			"numberOfSeats": 15
			
		}, 
		"D": 
		{ 
			"numberOfSeats": 20
		}
	}
}

4. API to Book Tickets:
Request method: POST

Request URI: http://localhost:3000/movies/screens/inox/reserve

Request body (example):

{ 
	"seats": { 
		"B": [6, 7],
		"D": [ 1, 2, 3]
	}
}

5. API to check seat availability:
Request method: GET

Request URI: http://localhost:3000/movies/screens/inox/seats?status=unreserved

Response body (example):
{
    "seats": {
        "A": [
            0,
            1,
            2,
            3,
            4,
            5,
            6,
            7,
            8,
            9
        ],
        "B": [
            0,
            1,
            2,
            3,
            4,
            5,
            8,
            9,
            10,
            11,
            12,
            13,
            14
        ],
        "D": [
            0,
            4,
            5,
            6,
            7,
            8,
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19
        ]
    }
}

