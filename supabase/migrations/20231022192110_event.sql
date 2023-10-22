CREATE TABLE events (
    event_id SERIAL PRIMARY KEY,
    event_type VARCHAR(255),
    dtstamp TIMESTAMP,
    summary VARCHAR(255),
    location VARCHAR(255),
    description TEXT,
    class VARCHAR(50),
    start_timestamp TIMESTAMP,
    end_timestamp TIMESTAMP,
    uid VARCHAR(255),
    sequence INT,
    last_modified TIMESTAMP,
    method VARCHAR(50)
);
