import * as Swal from "sweetalert2";

export function status_success_200(message) {
    Swal.fire({
        icon: 'success',
        title: message,
        showConfirmButton: false,
        timer: 3000
    })
}

export function status_bad_request_400(message) {
    Swal.fire({
        icon: 'error',
        title: message,
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
    })
}

export function status_not_found_404(message) {
    Swal.fire({
        icon: 'error',
        title: message,
        text: 'Something went wrong!',
        footer: '<a href>Why do I have this issue?</a>'
    })
}

export function status_internal_server_error_500(message) {
    Swal.fire({
        icon: 'error',
        title: message,
        text: 'Something went wrong!',
        timer:5000
    })
}

export function loginError(message) {
    Swal.fire({
        icon: 'error',
        title: message,
        text: 'Username or Password is Incorrect',
    })
}

export function registerError(message) {
    Swal.fire({
        icon: 'error',
        title: message,
        text: 'Username or Password is Incorrect',
    })
}
