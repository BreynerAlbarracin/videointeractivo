import { PostService } from "./Services"

export async function LoginAdminService(params) {
    return await PostService('/teachers/login', params)
}

export async function LoginStudentService(params) {
    return await PostService('/students/login', params)
}   