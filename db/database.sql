
drop database companydb;
create database if not exists companydb;

use companydb;

create table employee(
  id int auto_increment,
  name varchar(50) null default null,
  salary int null default 0,
  primary key(id)
);

insert into employee values (0, 'Victor', 100);
insert into employee values (0, 'Lisseth', 300);
insert into employee values (0, 'Hilary', 500);

