class User {
    userId: number
    username: string
    hashPassword: string
    role: Role
}

type Role = "commander" | "soldier";