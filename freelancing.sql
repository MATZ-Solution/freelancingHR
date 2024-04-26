-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2024 at 09:34 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `freelancing`
--

-- --------------------------------------------------------

--
-- Table structure for table `job`
--

CREATE TABLE `job` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `jobTitle` varchar(250) DEFAULT NULL,
  `jobCategory` varchar(250) DEFAULT NULL,
  `pay` varchar(250) DEFAULT NULL,
  `shift` varchar(250) DEFAULT NULL,
  `location` varchar(250) DEFAULT NULL,
  `qualification` varchar(250) DEFAULT NULL,
  `skills` varchar(250) DEFAULT NULL,
  `jobType` varchar(250) DEFAULT NULL,
  `jobDescription` varchar(250) DEFAULT NULL,
  `lastDate` timestamp NULL DEFAULT NULL,
  `status` varchar(250) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `job`
--

INSERT INTO `job` (`id`, `userId`, `jobTitle`, `jobCategory`, `pay`, `shift`, `location`, `qualification`, `skills`, `jobType`, `jobDescription`, `lastDate`, `status`, `createdAt`, `updatedAt`) VALUES
(15, 5, NULL, 'Lorem ipsumaq', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'Rejected', '2024-03-26 07:56:39', '2024-04-02 07:41:23'),
(16, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2024-04-08 08:33:29', '2024-04-08 08:33:29');

-- --------------------------------------------------------

--
-- Table structure for table `job_proposal`
--

CREATE TABLE `job_proposal` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `jobId` varchar(250) DEFAULT NULL,
  `notice_Period` varchar(250) DEFAULT NULL,
  `cover_letter` varchar(900) DEFAULT NULL,
  `resume` varchar(900) DEFAULT NULL,
  `resumeKey` varchar(900) DEFAULT NULL,
  `status` varchar(250) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `job_proposal`
--

INSERT INTO `job_proposal` (`id`, `userId`, `jobId`, `notice_Period`, `cover_letter`, `resume`, `resumeKey`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 5, '1', '23', 'nahi batao ga', 'http://res.cloudinary.com/dao9gnwv4/image/upload/v1711101606/kjhz9xgvbjz6018ldpju.pdf', '29e7c5d3f35215a2815c3e66f1f0fe84', 'pending', '2024-03-22 09:59:59', NULL),
(4, 4, '2', '23', 'nahi batao ga', 'http://res.cloudinary.com/dao9gnwv4/image/upload/v1711352126/asmghzo8t875bohwc5jr.jpg', '069420a81b35bc10ad8f1a7fe81a75ed', 'pending', '2024-03-25 07:33:13', NULL),
(5, 4, '2', '23', 'nahi batao ga', 'http://res.cloudinary.com/dao9gnwv4/image/upload/v1711352141/a0biw3otlcchwxjczqju.jpg', '00ac441e303df87105f687d4607ead52', 'pending', '2024-03-25 07:35:13', NULL),
(6, 4, '1', '23', 'nahi batao ga', 'http://res.cloudinary.com/dao9gnwv4/image/upload/v1711352876/g00wsxryulmowhcsadph.jpg', '89fa6a96ba9266a45bf82dd510332938', 'pending', '2024-03-25 07:47:45', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `project`
--

CREATE TABLE `project` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `projectTitle` varchar(255) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `companyType` varchar(255) NOT NULL,
  `projectType` varchar(255) NOT NULL,
  `amount` varchar(255) NOT NULL,
  `description` varchar(900) NOT NULL,
  `deliveryDate` timestamp NULL DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project`
--

INSERT INTO `project` (`id`, `userId`, `projectTitle`, `Location`, `companyType`, `projectType`, `amount`, `description`, `deliveryDate`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 3, '', '', '', '', '', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.', NULL, 'Rejected', '2024-03-22 08:40:40', NULL),
(2, 23, '', '', '', '', '', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsuma placeholder before the final copy is available.', NULL, '', '2024-03-26 10:47:21', NULL),
(3, 5, '', '', '', '', '', '', NULL, '', '2024-03-26 10:47:21', NULL),
(5, 456, '', '', '', '', '', 'In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before the final copy is available.', NULL, '', '2024-03-26 10:47:21', NULL),
(6, 23, '', '', '', '', '', '', NULL, '', '2024-03-26 10:47:21', NULL),
(7, 5, '', '', '', '', '', '', NULL, '', '2024-03-26 10:47:21', NULL),
(22, 23, '', '', '', '', '', '', NULL, '', '2024-03-26 10:47:21', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `project_proposal`
--

CREATE TABLE `project_proposal` (
  `id` int(11) NOT NULL,
  `userId` int(11) DEFAULT NULL,
  `projectId` varchar(250) DEFAULT NULL,
  `price` varchar(250) DEFAULT NULL,
  `est_hours` varchar(250) DEFAULT NULL,
  `cover_letter` varchar(900) DEFAULT NULL,
  `startDate` timestamp NULL DEFAULT NULL,
  `endDate` timestamp NULL DEFAULT NULL,
  `status` varchar(250) DEFAULT NULL,
  `createdAt` timestamp NULL DEFAULT NULL,
  `updatedAt` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `project_proposal`
--

INSERT INTO `project_proposal` (`id`, `userId`, `projectId`, `price`, `est_hours`, `cover_letter`, `startDate`, `endDate`, `status`, `createdAt`, `updatedAt`) VALUES
(1, 5, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 2, '1', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(3, 5, '22', '234', '2', '<p>Test.</p>', '2024-03-13 14:18:36', '2024-03-13 14:18:36', 'pending', '2024-03-26 09:56:06', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `skills`
--

CREATE TABLE `skills` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `skill` varchar(255) NOT NULL,
  `type` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `skills`
--

INSERT INTO `skills` (`id`, `userId`, `skill`, `type`) VALUES
(1, 15, 'eee', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `uploadimage`
--

CREATE TABLE `uploadimage` (
  `id` int(11) NOT NULL,
  `image` varchar(255) NOT NULL,
  `imageKey` varchar(255) NOT NULL,
  `type` varchar(250) DEFAULT NULL,
  `userId` varchar(250) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `uploadimage`
--

INSERT INTO `uploadimage` (`id`, `image`, `imageKey`, `type`, `userId`) VALUES
(1, 'ASD', 'ASD', 'job', '15');

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phoneNumber` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `userType` varchar(255) DEFAULT NULL,
  `professionalHeadline` varchar(255) DEFAULT NULL,
  `Worktype` varchar(255) DEFAULT NULL,
  `HourlyRate` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `country` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `state` varchar(255) DEFAULT NULL,
  `zipcode` varchar(255) DEFAULT NULL,
  `overview` varchar(255) DEFAULT NULL,
  `profileImage` varchar(255) DEFAULT NULL,
  `ProfileImageKey` varchar(255) DEFAULT NULL,
  `coverImage` varchar(255) DEFAULT NULL,
  `coverImageKey` varchar(255) DEFAULT NULL,
  `token` varchar(200) NOT NULL,
  `createdAt` datetime DEFAULT NULL,
  `updatedAt` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `firstName`, `lastName`, `email`, `phoneNumber`, `password`, `userType`, `professionalHeadline`, `Worktype`, `HourlyRate`, `address`, `country`, `city`, `state`, `zipcode`, `overview`, `profileImage`, `ProfileImageKey`, `coverImage`, `coverImageKey`, `token`, `createdAt`, `updatedAt`) VALUES
(3, '', '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '', NULL, NULL),
(4, 'XGEN', 'Technologies PVT LMT', 'xgen@gmail.com', '03132304322', '$2b$10$A0251G9.hmTI8C1aGBSo8e7itxuRM047vz.pSRtIgAA9nlZDAPm2K', 'company', NULL, NULL, NULL, 'Address', 'UK', 'UK', 'UK', '1234', NULL, NULL, NULL, 'http://res.cloudinary.com/dao9gnwv4/image/upload/v1711352838/bdj4qqfeneww7n3g8nl8.jpg', '3f31289e003b2f126d0bc3ab59478659', '', '2024-03-22 14:38:36', NULL),
(5, 'asdfg', 'ddfd', 'umairnazakat2222@gmail.com', NULL, '$2b$10$7Tb1JjSa7L3oz7Gpz02PO.5emx/eb4yefDTuOw8UYptc2Mkz2gX3q', 'company', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '370728', '2024-03-26 12:40:38', '2024-04-18 08:07:40');

-- --------------------------------------------------------

--
-- Table structure for table `user_company`
--

CREATE TABLE `user_company` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `companyName` varchar(255) DEFAULT NULL,
  `tagline` varchar(255) DEFAULT NULL,
  `establishedOn` varchar(255) DEFAULT NULL,
  `companyOwnerName` varchar(255) DEFAULT NULL,
  `industry` varchar(255) DEFAULT NULL,
  `website` varchar(255) DEFAULT NULL,
  `teamSize` varchar(255) DEFAULT NULL,
  `about` varchar(255) DEFAULT NULL,
  `workingHours` varchar(255) DEFAULT NULL,
  `companyAddress` varchar(255) DEFAULT NULL,
  `companyCountry` varchar(255) DEFAULT NULL,
  `companyCity` varchar(255) DEFAULT NULL,
  `companyState` varchar(255) DEFAULT NULL,
  `companyZipCode` varchar(255) DEFAULT NULL,
  `facebook` varchar(255) DEFAULT NULL,
  `instagram` varchar(255) DEFAULT NULL,
  `linkedIn` varchar(255) DEFAULT NULL,
  `behance` varchar(255) DEFAULT NULL,
  `pinterest` varchar(255) DEFAULT NULL,
  `twitter` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user_company`
--

INSERT INTO `user_company` (`id`, `userId`, `companyName`, `tagline`, `establishedOn`, `companyOwnerName`, `industry`, `website`, `teamSize`, `about`, `workingHours`, `companyAddress`, `companyCountry`, `companyCity`, `companyState`, `companyZipCode`, `facebook`, `instagram`, `linkedIn`, `behance`, `pinterest`, `twitter`) VALUES
(1, 3, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, 4, '1', '2', '3', '4', '5', '6', '7', '8', '1,2,3', '10', '12', '11', '13', '14', '15', '16', '17', '20', '18', '19'),
(3, 5, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_education`
--

CREATE TABLE `user_education` (
  `id` int(11) NOT NULL,
  `userId` int(11) NOT NULL,
  `endDate` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `school` varchar(255) NOT NULL,
  `degree` varchar(255) NOT NULL,
  `fieldStudy` varchar(255) NOT NULL,
  `startDate` varchar(255) NOT NULL,
  `grade` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `user_experience`
--

CREATE TABLE `user_experience` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `employmentType` varchar(255) NOT NULL,
  `companyName` varchar(255) NOT NULL,
  `Location` varchar(255) NOT NULL,
  `locationType` varchar(255) NOT NULL,
  `startDate` datetime NOT NULL,
  `endDate` varchar(255) NOT NULL,
  `Description` varchar(255) NOT NULL,
  `userId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `job`
--
ALTER TABLE `job`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `job_proposal`
--
ALTER TABLE `job_proposal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project`
--
ALTER TABLE `project`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `project_proposal`
--
ALTER TABLE `project_proposal`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `skills`
--
ALTER TABLE `skills`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `uploadimage`
--
ALTER TABLE `uploadimage`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_company`
--
ALTER TABLE `user_company`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_education`
--
ALTER TABLE `user_education`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `user_experience`
--
ALTER TABLE `user_experience`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `job`
--
ALTER TABLE `job`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=17;

--
-- AUTO_INCREMENT for table `job_proposal`
--
ALTER TABLE `job_proposal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `project`
--
ALTER TABLE `project`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `project_proposal`
--
ALTER TABLE `project_proposal`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `skills`
--
ALTER TABLE `skills`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `uploadimage`
--
ALTER TABLE `uploadimage`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `user_company`
--
ALTER TABLE `user_company`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT for table `user_education`
--
ALTER TABLE `user_education`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `user_experience`
--
ALTER TABLE `user_experience`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
