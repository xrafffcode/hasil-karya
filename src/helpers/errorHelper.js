export function handleError(error) {
    if (error.response && error.response.status === 422) {
        return error.response.data.errors;
    } else {
        return error.response.data.message;
    }
}
