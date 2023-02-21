package handler

import (
	"github.com/fshmidt/game-site/model"
	"github.com/fshmidt/game-site/model/apperrors"
	"github.com/fshmidt/game-site/pkg/handler/middleware"
	"github.com/gin-gonic/gin"
	"time"
)

// Handler struct holds required services for handler to function
type Handler struct {
	UserService  model.UserService
	TokenService model.TokenService
	MaxBodyBytes int64
}

// Config will hold services that will eventually be injected into this
// handler layer on handler initialization
type Config struct {
	Router          *gin.Engine
	UserService     model.UserService
	TokenService    model.TokenService
	BaseURL         string
	TimeoutDuration time.Duration
	MaxBodyBytes    int64
}

// NewHandler initializes the handler with required injected services along with http routes
// Does not return as it deals directly with a reference to the gin Engine
func NewHandler(c *Config) {
	// Create a handler (which will later have injected services)
	h := &Handler{
		UserService:  c.UserService,
		TokenService: c.TokenService,
		MaxBodyBytes: c.MaxBodyBytes,
	} // currently has no properties

	// Create an account group
	g := c.Router.Group(c.BaseURL)

	if gin.Mode() != gin.TestMode {
		g.Use(middleware.Timeout(c.TimeoutDuration, apperrors.NewServiceUnavailable()))
		g.GET("/me", middleware.AuthUser(h.TokenService), h.Me)
		g.POST("/signout", middleware.AuthUser(h.TokenService), h.Signout)
		g.PUT("/details", middleware.AuthUser(h.TokenService), h.Details)
		g.POST("/image", middleware.AuthUser(h.TokenService), h.Image)
		g.DELETE("/image", middleware.AuthUser(h.TokenService), h.DeleteImage)
	} else {
		g.GET("/me", h.Me)
		g.POST("/signout", h.Signout)
		g.PUT("/details", h.Details)
		g.POST("/image", h.Image)
		g.DELETE("/image", h.DeleteImage)
	}

	g.POST("/signup", h.Signup)
	g.POST("/signin", h.Signin)
	g.POST("/tokens", h.Tokens)
	g.GET("/topscorers", h.TopScorers)
}
