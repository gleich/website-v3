package util

import (
	"net/http"

	"github.com/gleich/lumber/v2"
)

func HandleHTTPError(w http.ResponseWriter, err error, ctx string) {
	lumber.Error(err, ctx)
	http.Error(w, err.Error(), http.StatusInternalServerError)
}
