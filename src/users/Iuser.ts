class User {
    userId: number
    username: string
    password: string
    role: Role
}

type Role = "commander" | "soldier";