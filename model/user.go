package model

import (
	"github.com/google/uuid"
)

// User defines domain model and its json and db representations
type User struct {
	UID      uuid.UUID `db:"uid" json:"uid"`
	Email    string    `db:"email" json:"email"`
	Password string    `db:"password" json:"-"`
	Username string    `db:"username" json:"username"`
	ImageURL string    `db:"image_url" json:"imageUrl"`
	Website  string    `db:"website" json:"website"`
	Score    int       `db:"score" json:"score"`
}
