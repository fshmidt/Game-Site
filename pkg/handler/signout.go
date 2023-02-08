package handler

import (
	"github.com/fshmidt/game-site/model"
	"github.com/fshmidt/game-site/model/apperrors"
	"github.com/gin-gonic/gin"
	"net/http"
)

// Signout handler
func (h *Handler) Signout(c *gin.Context) {
	user := c.MustGet("user")

	ctx := c.Request.Context()
	if err := h.TokenService.Signout(ctx, user.(*model.User).UID); err != nil {
		c.JSON(apperrors.Status(err), gin.H{
			"error": err,
		})
		return
	}

	c.JSON(http.StatusOK, gin.H{
		"message": "user signed out successfully!",
	})
}
