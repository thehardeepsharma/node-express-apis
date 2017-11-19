-- phpMyAdmin SQL Dump
-- version 4.7.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 11, 2017 at 04:22 PM
-- Server version: 10.1.26-MariaDB
-- PHP Version: 7.1.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `pharmacy`
--

-- --------------------------------------------------------

--
-- Table structure for table `branches`
--

CREATE TABLE `branches` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `contact_name` varchar(50) NOT NULL,
  `contact_number` varchar(15) NOT NULL,
  `email_id` varchar(100) DEFAULT NULL,
  `country_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `address` varchar(250) NOT NULL,
  `pincode` varchar(6) NOT NULL,
  `created` datetime NOT NULL,
  `created_by` int(11) NOT NULL,
  `updated` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1=>Active,0=>In Active',
  `ip_address` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `employee`
--

CREATE TABLE `employee` (
  `id` int(11) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `middle_name` varchar(50) DEFAULT NULL,
  `last_name` varchar(50) NOT NULL,
  `username` varchar(50) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email_id` varchar(120) NOT NULL,
  `gender` tinyint(4) DEFAULT NULL COMMENT '1=>Male,2=>Female,3=>Other',
  `blood_group` varchar(10) DEFAULT NULL,
  `address` varchar(250) DEFAULT NULL,
  `country_id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `city_id` int(11) NOT NULL,
  `pincode` varchar(10) NOT NULL,
  `phone_number` varchar(15) DEFAULT NULL,
  `mobile_number` varchar(15) NOT NULL,
  `father_name` varchar(100) NOT NULL,
  `mother_name` varchar(100) NOT NULL,
  `maritial_status` tinyint(4) NOT NULL COMMENT '1=>Married,2=>Single',
  `spouse_name` varchar(100) DEFAULT NULL,
  `date_of_birth` date NOT NULL,
  `date_of_joning` date NOT NULL,
  `created` datetime NOT NULL,
  `created_by` int(11) NOT NULL,
  `updated` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `ip_address` varchar(30) NOT NULL,
  `picture` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `employee_bank_details`
--

CREATE TABLE `employee_bank_details` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `bank_name` varchar(100) NOT NULL,
  `account_number` varchar(20) NOT NULL,
  `ifsc_code` varchar(20) DEFAULT NULL,
  `branch` varchar(100) DEFAULT NULL,
  `created` datetime NOT NULL,
  `created_by` int(11) NOT NULL,
  `updated` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `ip_address` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `employee_branch`
--

CREATE TABLE `employee_branch` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `branch_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `employee_designation`
--

CREATE TABLE `employee_designation` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `designation_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `employee_education`
--

CREATE TABLE `employee_education` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `qualification` varchar(100) NOT NULL,
  `institute` varchar(200) DEFAULT NULL,
  `university` varchar(200) DEFAULT NULL,
  `year` int(4) DEFAULT NULL,
  `marks` float(5,2) NOT NULL COMMENT 'Marks in percentage'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `employee_experience`
--

CREATE TABLE `employee_experience` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `company_name` varchar(200) NOT NULL,
  `designation` varchar(100) NOT NULL,
  `form_date` date NOT NULL,
  `to_date` date NOT NULL,
  `priority` int(11) DEFAULT NULL,
  `created` datetime NOT NULL,
  `created_by` int(11) NOT NULL,
  `updated` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL,
  `ip_address` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `holiday`
--

CREATE TABLE `holiday` (
  `id` int(11) NOT NULL,
  `name` varchar(200) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `year` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `leave_balance`
--

CREATE TABLE `leave_balance` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `leave_type_id` int(11) NOT NULL,
  `total_leave` int(11) NOT NULL,
  `taken_leave` float(5,2) NOT NULL,
  `remaining_leave` float(5,2) NOT NULL,
  `leave_year` year(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `leave_group`
--

CREATE TABLE `leave_group` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `status` tinyint(4) NOT NULL,
  `created` datetime NOT NULL,
  `created_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `leave_request`
--

CREATE TABLE `leave_request` (
  `id` int(11) NOT NULL,
  `employee_id` int(11) NOT NULL,
  `leave_type_id` int(11) NOT NULL,
  `from_date` date NOT NULL,
  `to_date` date NOT NULL,
  `no_of_days` int(11) NOT NULL,
  `is_half_day` tinyint(1) DEFAULT NULL COMMENT '1=>Yes, 0=>No',
  `reason` varchar(500) NOT NULL,
  `apply_date` datetime NOT NULL,
  `approver_by` int(11) DEFAULT NULL,
  `approver_status` tinyint(4) DEFAULT NULL COMMENT '1=>Pending,2=>Approve',
  `hr_approver_by` int(11) DEFAULT NULL,
  `hr_status` tinyint(4) DEFAULT NULL COMMENT '1=>Pending,2=>Approve',
  `hr_status_date` datetime DEFAULT NULL,
  `updated` datetime DEFAULT NULL,
  `updated_by` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `leave_type`
--

CREATE TABLE `leave_type` (
  `id` int(11) NOT NULL,
  `leave_group_id` int(11) NOT NULL,
  `code` varchar(5) NOT NULL,
  `description` varchar(500) DEFAULT NULL,
  `is_carry_forward` tinyint(4) DEFAULT '0' COMMENT '1 => Yes, 0 => No',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1 => Active, 0 => Inactive',
  `created` datetime NOT NULL,
  `created_by` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mas_city`
--

CREATE TABLE `mas_city` (
  `id` int(11) NOT NULL,
  `state_id` int(11) NOT NULL,
  `city` varchar(50) NOT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1=>Active,0=>In Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mas_country`
--

CREATE TABLE `mas_country` (
  `id` int(11) NOT NULL,
  `country` varchar(50) NOT NULL,
  `code` varchar(10) DEFAULT NULL,
  `abbr_code` varchar(10) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1=>Active,0=>In Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mas_department`
--

CREATE TABLE `mas_department` (
  `id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  `department` varchar(50) NOT NULL,
  `desription` varchar(250) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1=>Active,0=>In Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mas_designation`
--

CREATE TABLE `mas_designation` (
  `id` int(11) NOT NULL,
  `department_id` int(11) NOT NULL,
  `designation` varchar(50) NOT NULL,
  `desription` varchar(250) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1=>Active,0=>In Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mas_kyc_documents`
--

CREATE TABLE `mas_kyc_documents` (
  `id` int(11) NOT NULL,
  `name` varchar(50) NOT NULL,
  `kyc_type` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1=>Idproof,2=>Address proof',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1=>Active,0=>In Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `mas_kyc_documents`
--

INSERT INTO `mas_kyc_documents` (`id`, `name`, `kyc_type`, `status`) VALUES
(1, 'Passport', 1, 1);

-- --------------------------------------------------------

--
-- Table structure for table `mas_menu`
--

CREATE TABLE `mas_menu` (
  `id` int(11) NOT NULL,
  `module_id` int(11) NOT NULL,
  `parent_id` int(11) DEFAULT '0',
  `menu` varchar(100) NOT NULL,
  `priority` int(11) DEFAULT NULL,
  `link` varchar(250) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `menu_class` varchar(20) DEFAULT NULL,
  `is_navigation` tinyint(4) DEFAULT '1' COMMENT '1=>Yes,0=>No',
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1=>Active,0=>In Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mas_module`
--

CREATE TABLE `mas_module` (
  `id` int(11) NOT NULL,
  `module` varchar(50) NOT NULL,
  `priority` int(11) DEFAULT NULL,
  `description` varchar(250) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1=>Active,0=>In Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mas_role`
--

CREATE TABLE `mas_role` (
  `id` int(11) NOT NULL,
  `role` varchar(20) NOT NULL,
  `description` varchar(200) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `mas_state`
--

CREATE TABLE `mas_state` (
  `id` int(11) NOT NULL,
  `country_id` int(11) NOT NULL,
  `state` varchar(100) NOT NULL,
  `code` varchar(10) DEFAULT NULL,
  `status` tinyint(4) NOT NULL DEFAULT '1' COMMENT '1=>Active,0=>In Active'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `system_config`
--

CREATE TABLE `system_config` (
  `id` int(11) NOT NULL,
  `config_name` varchar(50) NOT NULL,
  `config_key` varchar(50) NOT NULL,
  `config_value` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `branches`
--
ALTER TABLE `branches`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `employee`
--
ALTER TABLE `employee`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_employee_country_id` (`country_id`),
  ADD KEY `FK_employee_state_id` (`state_id`),
  ADD KEY `FK_employee_city_id` (`city_id`);

--
-- Indexes for table `employee_bank_details`
--
ALTER TABLE `employee_bank_details`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_employee_bank_details_employee_id` (`employee_id`);

--
-- Indexes for table `employee_branch`
--
ALTER TABLE `employee_branch`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_employee_branch_employee_id` (`employee_id`),
  ADD KEY `FK_employee_branch_branch_id` (`branch_id`);

--
-- Indexes for table `employee_designation`
--
ALTER TABLE `employee_designation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_employee_designation_employee_id` (`employee_id`),
  ADD KEY `FK_employee_designation_designation_id` (`designation_id`);

--
-- Indexes for table `employee_education`
--
ALTER TABLE `employee_education`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_employee_education_employee_id` (`employee_id`);

--
-- Indexes for table `employee_experience`
--
ALTER TABLE `employee_experience`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_employee_experience_employee_id` (`employee_id`);

--
-- Indexes for table `holiday`
--
ALTER TABLE `holiday`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_balance`
--
ALTER TABLE `leave_balance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_group`
--
ALTER TABLE `leave_group`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_request`
--
ALTER TABLE `leave_request`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `leave_type`
--
ALTER TABLE `leave_type`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mas_city`
--
ALTER TABLE `mas_city`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_mas_city_state_id` (`state_id`);

--
-- Indexes for table `mas_country`
--
ALTER TABLE `mas_country`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mas_department`
--
ALTER TABLE `mas_department`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_mas_department_role_d` (`role_id`);

--
-- Indexes for table `mas_designation`
--
ALTER TABLE `mas_designation`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_mas_designation_department_id` (`department_id`);

--
-- Indexes for table `mas_kyc_documents`
--
ALTER TABLE `mas_kyc_documents`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mas_menu`
--
ALTER TABLE `mas_menu`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_mas_menu_module_id` (`module_id`);

--
-- Indexes for table `mas_module`
--
ALTER TABLE `mas_module`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mas_role`
--
ALTER TABLE `mas_role`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `mas_state`
--
ALTER TABLE `mas_state`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_mas_state_country_id` (`country_id`);

--
-- Indexes for table `system_config`
--
ALTER TABLE `system_config`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `branches`
--
ALTER TABLE `branches`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `employee`
--
ALTER TABLE `employee`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `employee_bank_details`
--
ALTER TABLE `employee_bank_details`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `employee_branch`
--
ALTER TABLE `employee_branch`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `employee_designation`
--
ALTER TABLE `employee_designation`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `employee_education`
--
ALTER TABLE `employee_education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `employee_experience`
--
ALTER TABLE `employee_experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `holiday`
--
ALTER TABLE `holiday`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `leave_balance`
--
ALTER TABLE `leave_balance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `leave_group`
--
ALTER TABLE `leave_group`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `leave_request`
--
ALTER TABLE `leave_request`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mas_city`
--
ALTER TABLE `mas_city`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mas_country`
--
ALTER TABLE `mas_country`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mas_department`
--
ALTER TABLE `mas_department`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mas_kyc_documents`
--
ALTER TABLE `mas_kyc_documents`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `mas_menu`
--
ALTER TABLE `mas_menu`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mas_module`
--
ALTER TABLE `mas_module`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mas_role`
--
ALTER TABLE `mas_role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `mas_state`
--
ALTER TABLE `mas_state`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- AUTO_INCREMENT for table `system_config`
--
ALTER TABLE `system_config`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `employee`
--
ALTER TABLE `employee`
  ADD CONSTRAINT `FK_employee_city_id` FOREIGN KEY (`city_id`) REFERENCES `mas_city` (`id`),
  ADD CONSTRAINT `FK_employee_country_id` FOREIGN KEY (`country_id`) REFERENCES `mas_country` (`id`),
  ADD CONSTRAINT `FK_employee_state_id` FOREIGN KEY (`state_id`) REFERENCES `mas_state` (`id`);

--
-- Constraints for table `employee_bank_details`
--
ALTER TABLE `employee_bank_details`
  ADD CONSTRAINT `FK_employee_bank_details_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

--
-- Constraints for table `employee_branch`
--
ALTER TABLE `employee_branch`
  ADD CONSTRAINT `FK_employee_branch_branch_id` FOREIGN KEY (`branch_id`) REFERENCES `branches` (`id`),
  ADD CONSTRAINT `FK_employee_branch_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

--
-- Constraints for table `employee_designation`
--
ALTER TABLE `employee_designation`
  ADD CONSTRAINT `FK_employee_designation_designation_id` FOREIGN KEY (`designation_id`) REFERENCES `mas_designation` (`id`),
  ADD CONSTRAINT `FK_employee_designation_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

--
-- Constraints for table `employee_education`
--
ALTER TABLE `employee_education`
  ADD CONSTRAINT `FK_employee_education_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

--
-- Constraints for table `employee_experience`
--
ALTER TABLE `employee_experience`
  ADD CONSTRAINT `FK_employee_experience_employee_id` FOREIGN KEY (`employee_id`) REFERENCES `employee` (`id`);

--
-- Constraints for table `mas_city`
--
ALTER TABLE `mas_city`
  ADD CONSTRAINT `FK_mas_city_state_id` FOREIGN KEY (`state_id`) REFERENCES `mas_state` (`id`);

--
-- Constraints for table `mas_department`
--
ALTER TABLE `mas_department`
  ADD CONSTRAINT `FK_mas_department_role_d` FOREIGN KEY (`role_id`) REFERENCES `mas_role` (`id`);

--
-- Constraints for table `mas_designation`
--
ALTER TABLE `mas_designation`
  ADD CONSTRAINT `FK_mas_designation_department_id` FOREIGN KEY (`department_id`) REFERENCES `mas_department` (`id`);

--
-- Constraints for table `mas_menu`
--
ALTER TABLE `mas_menu`
  ADD CONSTRAINT `FK_mas_menu_module_id` FOREIGN KEY (`module_id`) REFERENCES `mas_module` (`id`);

--
-- Constraints for table `mas_state`
--
ALTER TABLE `mas_state`
  ADD CONSTRAINT `FK_mas_state_country_id` FOREIGN KEY (`country_id`) REFERENCES `mas_country` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
