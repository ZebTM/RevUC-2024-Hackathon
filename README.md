# RevUC-2024-Hackathon


## Database Schema
CREATE TABLE [IF NOT EXISTS] accounts (
	id UUID PRIMARY KEY,
	is_admin boolean NOT NULL,
	username VARCHAR(255) NOT NULL UNIQUE
	email VARCHAR(50) NOT NULL UNIQUE,
	hashed_password text NOT NULL,
	first_name VARCHAR(50) NOT NULL,
	last_name VARCHAR(50) NOT NULL,
	created_at TIMESTAMP NOT NULL,
	last_login TIMESTAMP
)
	
CREATE TABLE IF NOT EXISTS medicines (
	id UUID PRIMARY KEY,
	name VARCHAR(255) NOT NULL,
	trial_id UUID
	CONSTRAINT fk_trial
		FOREIGN KEY (trial_id)
			REFERENCES trial(id)
);

CREATE TABLE IF NOT EXISTS trial (
	id UUID PRIMARY KEY,
	name TEXT NOT NULL,
	created_at TIMESTAMP NOT NULL,
	edited_at TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS symptoms (
	id UUID PRIMARY KEY,
	created_at TIMESTAMP NOT NULL,
	edited_at TIMESTAMP NOT NULL,
	patient_id UUID,
	notes TEXT,
	img_path TEXT,
	trial_id UUID,
	CONSTRAINT fk_trial
		FOREIGN KEY (trial_id)
			REFERENCES trial(id),
	CONSTRAINT fk_patient
		FOREIGN KEY (patient_id)
			REFERENCES accounts(id)
);