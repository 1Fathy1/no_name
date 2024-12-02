
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





