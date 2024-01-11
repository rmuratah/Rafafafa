const CreateTablesQuery = [`
    CREATE TABLE sigma_case.user (
    iduser INT NOT NULL AUTO_INCREMENT,
    firstname VARCHAR(45) NOT NULL,
    email VARCHAR(45) NOT NULL,
    PRIMARY KEY (iduser));
    `,
    `  
    CREATE TABLE sigma_case.permissions (
    idpermissions INT NOT NULL AUTO_INCREMENT,
    permissions VARCHAR(45) NOT NULL,
    PRIMARY KEY (idpermissions));
    `,
    ` 
    CREATE TABLE sigma_case.user_permissions_rela (
    iduser_permissions_rela INT NOT NULL AUTO_INCREMENT,
    iduser INT NOT NULL,
    idpermissions INT NOT NULL,
    FOREIGN KEY (iduser) REFERENCES sigma_case.user(iduser), 
    FOREIGN KEY (idpermissions) REFERENCES sigma_case.permissions(idpermissions), 
    PRIMARY KEY (iduser_permissions_rela));
`]

const GetUsersQuery = `
    SELECT
        u.firstname,
        u.email,
        IFNULL(JSON_ARRAYAGG(p.permissions), JSON_ARRAY()) AS permissions
    FROM
        sigma_case.user u
    LEFT JOIN
        sigma_case.user_permissions_rela upr ON u.iduser = upr.iduser
    LEFT JOIN
        sigma_case.permissions p ON upr.idpermissions = p.idpermissions
    GROUP BY
        u.iduser, u.firstname, u.email;
    `

const GetUsersQueryByID = `
    SELECT
        u.iduser,
        u.firstname,
        u.email,
        JSON_ARRAYAGG(p.permissions) AS permissions
    FROM
        sigma_case.user u
    JOIN
        sigma_case.user_permissions_rela upr ON u.iduser = upr.iduser
    JOIN
        sigma_case.permissions p ON upr.idpermissions = p.idpermissions
    WHERE
        u.email = ?
    GROUP BY
        u.iduser, u.firstname, u.email;
    `

export default { CreateTablesQuery, GetUsersQuery, GetUsersQueryByID };
