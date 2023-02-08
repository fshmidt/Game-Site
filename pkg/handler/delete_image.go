package handler

import (
	"github.com/fshmidt/game-site/model"
	"github.com/fshmidt/game-site/model/apperrors"
	"github.com/gin-gonic/gin"
	"log"
	"net/http"
)

// DeleteImage handler
func (h *Handler) DeleteImage(c *gin.Context) {
	authUser := c.MustGet("user").(*model.User)

	ctx := c.Request.Context()
	err := h.UserService.ClearProfileImage(ctx, authUser.UID)

	if err != nil {
		log.Printf("Failed to delete profile image: %v\n", err.Error())

		c.JSON(apperrors.Status(err), gin.H{
			"error": err,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "success",
	})
}
