package mocks

import (
	"context"
	"github.com/stretchr/testify/mock"
	"mime/multipart"
)

// MockImageRepository is a mock type for model.ImageRepository
type MockImageRepository struct {
	mock.Mock
}

// DeleteProfile is mock of representations of ImageRepository DeleteProfile
func (m *MockImageRepository) DeleteProfile(ctx context.Context, objName string) error {
	ret := m.Called(ctx, objName)

	var r0 error
	if ret.Get(0) != nil {
		r0 = ret.Get(0).(error)
	}

	return r0
}

// UpdateProfile is mock of representations of ImageRepository Update Profile
func (m *MockImageRepository) UpdateProfile(ctx context.Context, objName string, imageFile multipart.File) (string, error) {
	// args that will be passed to "Return" in the tests, when function
	// is called with a uid. Hence the name "ret"
	ret := m.Called(ctx, objName, imageFile)

	// first value passed to "Return"
	var r0 string
	if ret.Get(0) != nil {
		// we can just return this if we know we won't be passing function to "Return"
		r0 = ret.Get(0).(string)
	}

	var r1 error

	if ret.Get(1) != nil {
		r1 = ret.Get(1).(error)
	}

	return r0, r1
}
