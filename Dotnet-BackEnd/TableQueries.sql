CREATE TABLE IF NOT EXISTS paintings (
    id INT NOT NULL,
    artist_name VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    discount_percentage INT NOT NULL,
    discounted_price INT NOT NULL,
    image_url VARCHAR(255) NOT NULL,
    price INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    artist_id INT,
    category_id INT,
    PRIMARY KEY (id)
);


INSERT INTO products (artist_name, description, discount_percentage, discounted_price, image_url, price, title, artist_id, category_id)
VALUES
('John Doe', 'Beautiful landscape painting', 0, 100, 'https://example.com/image1.jpg', 120, 'Landscape Painting', 1, 1),
('Jane Smith', 'Abstract art piece', 10, 90, 'https://example.com/image2.jpg', 100, 'Abstract Art', 2, 2);


  
CREATE TABLE IF NOT EXISTS user (
    id INT NOT NULL,
    created_at TIMESTAMP,
    email VARCHAR(255),
    firstname VARCHAR(100),
    lastname VARCHAR(100),
    mobile VARCHAR(20),
    password VARCHAR(255),
    role VARCHAR(50),
    PRIMARY KEY (id)
);

INSERT INTO user (id, created_at, email, firstname, lastname, mobile, password, role)
VALUES
(1, CURRENT_TIMESTAMP, 'sanyogvm9@gmail.com', 'Sanyog', 'Mane', '1234567890', '$2a$10$qD9LmPeQLzTcAgczDm0QQe6zVvxM5riChZaUDiVtSMwgm6X8iObJy', 'user'),
(2, CURRENT_TIMESTAMP, 'sanyogvm19@gmail.com', 'Sanyog', 'Mane', '1234567891', '$2a$10$0/8Jt4UJrbJQqAMOBh/oneNSkMehoNK.XmtGftAiWtJkH.yf0mMym', 'admin'),
(3, CURRENT_TIMESTAMP, 'sanyogvm119@gmail.com', 'Sanyog', 'Mane', '1234567892', '$2a$10$Kc3zgdE.xyVqQiy4XgDASucCVmPx4EDmut32PF6u734eeosdvCcRS', 'user'),
(52, CURRENT_TIMESTAMP, 'sanyogvm91@gmail.com', 'Sanyog', 'Mane', '1234567893', '$2a$10$h6ASgWEKSD7WsCmSM4/gU.RGjol0PGHUhYEZlqZO0CDk9Th/BFWW.', 'user'),
(53, CURRENT_TIMESTAMP, 'sanyogvm191@gmail.com', 'Sanyog', 'Mane', '1234567894', '$2a$10$8qeJnysf3.Z4gStfCoNxH.wHwfNEUUjZIkU1FXhyBRXYUq0fuR7W2', 'admin'),
(54, CURRENT_TIMESTAMP, 'sanyogvm219@gmail.com', 'Sanyog', 'Mane', '1234567895', '$2a$10$ebIpgAN.3ljEJz6v1Ye7X.LKHGXiPmI7.wbpQaB8r9zjtACoItxsa', 'user');
