import { GetService, PostService } from "./Services"

export async function GetStats() {
    return await GetService('/teachers/stats')
}

export async function GetStudents() {
    return await GetService('/students')
}

export async function GetRooms() {
    return await GetService('/rooms')
}

export async function EnrolledStudents(params) {
    return await PostService('/teachers/enrolledstudent', params)
}