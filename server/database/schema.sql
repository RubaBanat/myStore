USE store;

CREATE TABLE product (
    product_id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description LONGTEXT NOT NULL,
    price VARCHAR(255) NOT NULL,
    image VARCHAR(255) NOT NULL
);

CREATE TABLE cart (
    id INT  PRIMARY KEY AUTO_INCREMENT NOT NULL,
    product_id INT,
    FOREIGN KEY (product_id) REFERENCES product(product_id),
    CONSTRAINT contacts_unique UNIQUE (product_id)
);