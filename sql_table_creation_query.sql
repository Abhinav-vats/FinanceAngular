--======================================
--        Customer Table Creation
--=======================================

Sequence associated-  CREATE SEQUENCE customer_seq start with 1 increment by 1;

CREATE TABLE customer_user_detail(
id number(8) Primary key,
first_name VARCHAR2(25) NOT NULL,
middle_name VARCHAR2(25),
last_name VARCHAR2(25) NOT NULL,
date_of_birth DATE NOT NULL,
phone_number varchar2(15) NOT NULL,
email_id VARCHAR2(30) NOT NULL,
username VARCHAR2(15) NOT NULL,
password VARCHAR2(16) NOT NULL,
address VARCHAR2(255) NOT NULL,
card_type varchar2(15) default 'GOLD',
bank_name varchar2(30),
bank_account_number varchar2(25) NOT NULL,
ifs_code varchar2(15) NOT NULL,
is_active VARCHAR2(5) default 'false'
);


--======================================
--        Admin Table Creation
--=======================================

Sequence associated-  CREATE SEQUENCE admin_seq start with 1 increment by 1;

CREATE TABLE admin_user_detail(
id number(8) Primary Key,
first_name VARCHAR2(25) NOT NULL,
middle_name VARCHAR2(25),
last_name VARCHAR2(25) NOT NULL,
phone_number varchar2(14) NOT NULL,
email_id VARCHAR2(30) NOT NULL,
username VARCHAR2(15) NOT NULL,
password VARCHAR2(16) NOT NULL
);


--======================================
--        Card Type Table Creation
--=======================================

Sequence associated-  CREATE SEQUENCE card_type_seq start with 1 increment by 1;

CREATE TABLE card_type_detail(
id number(3) PRIMARY KEY,
CARD_TYPE VARCHAR(10) NOT NULL,
MAXIMUM_LIMIT NUMBER(10,2),
JOINING_FEE NUMBER(10,2)
);


--=========================================
--           ALLOTED CARD TABLE
--=========================================

Sequence associated-  CREATE SEQUENCE alloted_card_seq start with 1 increment by 1;

CREATE TABLE alloted_card_detail(
id number(8) PRIMARY KEY,
card_id  number(3), 
user_id number(8), 
card_cvv_no number(3) NOT NULL, 
card_no varchar2(16) NOT NULL,
valid_till date NOT NULL,
card_credit_used number(10,2) default 0,
card_credit_remaining number(10,2),
card_activation_status VARCHAR2(5) default 'active',
constraint fk_alloted_card_card_type FOREIGN KEY (card_id) REFERENCES card_type_detail(id),
constraint fk_alloted_card_customer_user FOREIGN KEY (user_id) REFERENCES customer_user_detail(id)
);

alter table alloted_card_detail modify card_activation_status VARCHAR2(10) default 'active';


--===========================================
--     Product detail table
--===========================================

Sequence associated-  CREATE SEQUENCE product_seq start with 1 increment by 1;

CREATE TABLE product_detail(
id number(8) PRIMARY KEY,
name VARCHAR2(30) NOT NULL,
model_name varchar2(30) NOT NULL,
brand_name varchar2(30) NOT NULL,
category VARCHAR2(30) NOT NULL,
detail VARCHAR2(50) NOT NULL,
image_path varchar2(50) NOT NULL,
quantity number(4) NOT NULL,
cost_per_unit number(10,2) NOT NULL,
profit_share NUMBER(10,2) NOT NULL
);


--=================================================
--         Upload Document TABLE
--=================================================

Sequence associated-  CREATE SEQUENCE document_upload_seq start with 1 increment by 1;


CREATE TABLE document_upload(
id number(8) PRIMARY KEY,
user_id number(8) Not Null,
aadhar_card VARCHAR2(200) NOT NULL,
pan_card VARCHAR2(200) NOT NULL,
blank_cheque VARCHAR2(200) NOT NULL,
constraint fk_doc_upload_cust_user FOREIGN KEY (user_id) REFERENCES customer_user_detail(id)
);


--=================================================
--			Plan type
--=================================================

Sequence associated-  CREATE SEQUENCE plan_seq start with 1 increment by 1;

CREATE TABLE plan_type(
id number(3) PRIMARY KEY,
duration number(2) NOT NULL,
name VARCHAR2(15)
);


--==================================================
--  		Order detail 
--==================================================

Sequence associated-  CREATE SEQUENCE order_seq start with 1 increment by 1;


CREATE TABLE order_detail(
id number(8) PRIMARY KEY,
user_id number(8) NOT NULL,
product_id number(8) NOT NULL,
price_paid number(10,2) NOT NULL,
plan_id number(3) NOT NULL,
constraint fk_order_detail_cust_user FOREIGN KEY (user_id) REFERENCES customer_user_detail(id),
constraint fk_order_detail_product_detail FOREIGN KEY (product_id) REFERENCES product_detail(id),
constraint fk_order_detail_plan_type FOREIGN KEY (plan_id) REFERENCES plan_type(id)
);

--====================================================
--			Payment Schedule Detail table
--====================================================

Sequence associated-  CREATE SEQUENCE payment_seq start with 1 increment by 1;


CREATE TABLE payment_schedule(
id number(8) PRIMARY KEY,
month_count number(2) NOT NULL,
month_for VARCHAR2(15) NOT NULL,
payment_status VARCHAR2(5) default 'false',
installment number(10,2) NOT NULL,
payment_date Date,
order_id number(8),
user_id number(8),
plan_id number(3),
constraint fk_pay_sched_cust_user FOREIGN KEY (user_id) REFERENCES customer_user_detail(id),
constraint fk_pay_sched_order_detail FOREIGN KEY (order_id) REFERENCES order_detail(id),
constraint fk_pay_sched_plan_type FOREIGN KEY (plan_id) REFERENCES plan_type(id)
);




--=============================================
--                  OTP manager
--=============================================

Sequence - CREATE SEQUENCE otp_seq start with 1 increment by 1;

create table otp_manager(
id number(8) PRIMARY KEY,
email_id VARCHAR2(30) NOT NULL,
otp VARCHAR2(8)
);



--==============================================================
-- 		How to assign sequence to their respective table
--==============================================================

--use this annotation of java in the entity class of the respective table

if sequence is :-

CREATE SEQUENCE stop_sq_seq start with 1 increment by 1;

@GeneratedValue(strategy=GenerationType.SEQUENCE,generator="stop_sq")
	@SequenceGenerator(sequenceName = "stop_sq",allocationSize=1,name="stop_sq")
	
	
	insert into card_type_detail(id, card_type, maximum_limit, joining_fee) values(1, 'GOLD', 100000.00, 500);
	insert into card_type_detail(id, card_type, maximum_limit, joining_fee) values(2, 'TITANIUM', 400000.00, 1000);
	
	
	insert into product_detail(id,name,model_name,brand_name,category,detail,image_path,quantity,cost_per_unit,profit_share) values(201,'Shoes','Sneakers','Nike','Footware','Air jordan','https://images-na.ssl-images-amazon.com/images/I/81zN34Whk2L._AC_UL1500_.jpg',100,5000,500);
	
insert into product_detail(id,name,model_name,brand_name,category,detail,image_path,quantity,cost_per_unit,profit_share) values(601,'Phones','Iphone 11','Apple','Electronics','64 GB','https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone11-select-2019-family?wid=882=1058=jpeg=80=0.5,0.5&.v=1567022175704',10,60000,500);

ALTER TABLE  payment_schedule ADD payment_date date;



// Otp Management Service k through Otp delete abhi ni kiya hai