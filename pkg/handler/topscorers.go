package handler

import (
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

// Me handler calls services for getting a user's details
func (h *Handler) TopScorers(c *gin.Context) {

	u, err := h.UserService.TopScorers()

	if err != nil {
		log.Printf("Unable to get top scorers")

		c.JSON(500, gin.H{
			"error": "Unable to get top scorers",
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"topscorers": u,
	})
}
