USE store;

CREATE TABLE product (
    product_id INT AUTO_INCREMENT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description LONGTEXT NOT NULL,
    price VARCHAR(255) NOT NULL,
    quantity VARCHAR(255) NOT NULL,
    image LONGBLOB NOT NULL,
    PRIMARY KEY (product_id)
);

CREATE TABLE cart (
    id INT AUTO_INCREMENT NOT NULL,
    productId INT,
    FOREIGN KEY (productId) REFERENCES product(product_id),
    PRIMARY KEY (id)
);