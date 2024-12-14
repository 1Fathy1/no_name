
-- Create User Table

CREATE TABLE Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) NOT NULL,
    hash_password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


-- Create Comments Table

CREATE TABLE Comments (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    comment_text TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) 
);


-- Create Image Table

CREATE TABLE Images (
     img_id INT AUTO_INCREMENT PRIMARY KEY, 
     img_path VARCHAR(300) , 
     img_type VARCHAR(100) , 
     hotel_id INT ,
     des_id INT 
); 

-- Create Destination Table 

CREATE TABLE Destination (
    des_id INT AUTO_INCREMENT PRIMARY KEY,
    des_name VARCHAR(100) NOT NULL,
    description TEXT,
    opening_hours VARCHAR(50)
    
);

-- Create Hotels Table

CREATE TABLE Hotels (
    hotel_id INT AUTO_INCREMENT PRIMARY KEY,
    hotel_name VARCHAR(100) NOT NULL,
    address VARCHAR(255) NOT NULL,
    phone_number VARCHAR(15)
);

-- create Booking TABLE

CREATE TABLE Booking (
     booking_id INT AUTO_INCREMENT PRIMARY KEY, 
     name VARCHAR(200) , 
     arrival_date DATE , 
     hotelname VARCHAR(100) NOT NULL,
     des_name VARCHAR(100) NOT NULL , 
     user_name VARCHAR(50) NOT NULL ,
     address VARCHAR(255) NOT NULL,
     guest_number INT , 
     service  VARCHAR(15) , 
     price INT ,
     note TEXT , 
     FOREIGN KEY (user_name) REFERENCES Users(username) ,
     FOREIGN KEY (hotelname) REFERENCES Hotels(hotel_name) 
     
     
); 



-- insert data --


-----------------
-- destenation --
-----------------

INSERT INTO destenation (location, description, open_hours)
VALUES
  ('Ras Mohammed National Park, South Sinai, Egypt', 
   'Ras Mohammed National Park is a protected area located at the southern tip of the Sinai Peninsula. It is renowned for its diverse marine life, beautiful coral reefs, and excellent diving and snorkeling opportunities. The park is a major attraction for nature lovers and underwater enthusiasts.', 
   '08:00:00');


-----------------
---- hotels -----
----------------- 

INSERT INTO hotel (id, name, address, phone, email, destination_id)
VALUES(
   'Royal Savoy Sharm El Sheikh', 
   'Sharm El Sheikh, Nabq Bay, South Sinai, Egypt', 
   '+20 69 360 0777', 
   'royalsavoy@somabay.com', 
   1);


-----------------
---- services ---
----------------- 

INSERT INTO services (id, service, description, hotel_id)
VALUES
  (1, 'Free Wi-Fi', 'High-speed wireless internet access available throughout the hotel for all guests.', 1),
  (2, 'Swimming Pool', 'An outdoor pool with stunning views of the Red Sea, perfect for relaxation.', 1),
  (3, 'Spa and Wellness Center', 'A full-service spa offering massages, facials, and other wellness treatments.', 1),
  (4, 'Private Beach', 'Exclusive access to a private beach with umbrellas, loungers, and beach activities.', 1),
  (5, 'Fitness Center', 'A well-equipped gym with modern fitness equipment for guests to stay active.', 1),
  (6, 'Restaurant and Bar', 'Multiple dining options with international cuisine and a bar offering refreshing drinks.', 1),
  (7, 'Diving Center', 'A certified diving center offering courses and diving trips to explore the Red Sea marine life.', 1);


-----------------
----- image -----
----------------- 

INSERT INTO image (image_path, type, hotel_id, des_id)
VALUES 
('..\\uploads\\hotel\\Royal Savoy Sharm El Sheikh\\1.jpeg', 'hotel', 1, null), 
('..\\uploads\\hotel\\Royal Savoy Sharm El Sheikh\\2.jpeg', 'hotel', 1, null);


-- Select data 


SELECT * FROM hotel WHERE id = 1;





