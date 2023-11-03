package main

import (
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		w.Write([]byte("Olá Mundo!"))
		//http.ServeFile(w, r, "index.html")
	})
	http.ListenAndServe(":8080", nil)
}
