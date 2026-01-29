# Conflict-Free Room & Resource Booking System

## Overview
A production-grade room and resource booking platform designed to eliminate overlapping reservations through deterministic scheduling rules, interval-based validation, and controlled booking workflows. The system supports both free and premium (paid) resources with secure payment handling and administrative controls.

---

## Problem Statement
Traditional room booking systems often rely on manual coordination or simple availability flags, leading to double bookings, race conditions, and poor visibility. Managing premium shared resources further complicates the workflow when payments, cancellations, and rule enforcement are involved.

---

## Objectives
- Guarantee zero overlapping bookings across all rooms and time slots
- Provide intelligent alternative room suggestions when conflicts occur
- Support premium room bookings with secure payments
- Enable administrators to define and enforce booking rules
- Maintain clean, auditable booking lifecycles

---

## Planned Core Features
- Interval-based conflict detection for room bookings
- Proximity-based alternative room recommendations
- Rule-driven booking constraints (buffers, priorities, blackout windows)
- Secure Stripe-based payments for premium rooms
- Multi-image room and resource management using AWS S3
- Administrative dashboard for room, rule, and booking oversight

---

## Tech Stack
**Frontend**
- Next.js (App Router)
- TypeScript
- Tailwind CSS

**Backend**
- Node.js
- Next.js API Routes
- Prisma ORM

**Database**
- PostgreSQL

**Infrastructure & Services**
- AWS S3 (image storage)
- Stripe (payments)
- Docker & Docker Compose
- GitHub Actions (CI)

---

## Project Structure
apps/
web/ # Frontend application
api/ # Backend API
packages/ # Shared config and types
prisma/ # Database schema and migrations
docker/ # Docker-related configuration
docs/ # Documentation and design notes


---

## Project Status
🚧 Under active development  
This repository will be updated incrementally with each completed phase of the system.
